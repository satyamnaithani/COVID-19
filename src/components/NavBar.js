import React  from 'react';
import {
  Navbar,
  NavbarBrand,
  Container,

} from 'reactstrap';

import Search from './Search'

 export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
      items: []
    };
  }

  componentDidMount() {
    fetch("https://corona.lmao.ninja/v2/all")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { items } = this.state;
    
      console.log(new Date(items.updated))
      var date = new Date(items.updated)
      console.log(date.toString())
      return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>COVID-19 TRENDS<br/><div style={{fontSize: "12px"}}>Interface By Satyam Naithani</div></NavbarBrand>
      <Search />

        </Navbar>
       <Container>
       <div>
        <div><strong>Last Updated:</strong> {date.toString()}</div>
      <div><strong>Total Cases:</strong> <span style={{color: "	#CCCC00", fontWeight:"bold"}}>{items.cases}</span></div>
  <div><strong>Total Deaths:</strong> <span style={{color: "red", fontWeight:"bold"}}>{items.deaths}</span></div>
      <div><strong>Total Recovered:</strong> <span style={{color: "green", fontWeight:"bold"}}>{items.recovered}</span></div>
        </div>
       </Container>
      </div>
      );
    
  }
}

