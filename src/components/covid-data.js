import React from 'react';
import CardCovid from './Card';

export default class CovidData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://corona.lmao.ninja/countries")
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
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <CardCovid key={item.country} 
                         country={item.country} 
                         cases={item.cases} 
                         todayCases={item.todayCases}
                         deaths={item.deaths}
                         todayDeaths={item.todayDeaths}
                         recovered={item.recovered}
                         critical={item.critical}
                         />

            ))}
          </ul>
        );
      }
    }
  }