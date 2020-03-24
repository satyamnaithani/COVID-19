import React from 'react'
import ModalGraph from './ModalGraph'


const CovidData = (props) => {
  
  return (
    //   <Row style={{paddingBottom: "3px", paddingTop: "3px"}}>
    //   <Col sm={1} md ={2} lg={3} xl={4}>
    //   <Card body style={{textAlign: "left", backgroundImage: "linear-gradient(to right, #1c92d2 ,#f2fcfe)", borderRadius: "5%", borderColor: "white"}}>
    //     <CardTitle style={{textAlign: "center", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "bold", color: "white"}}><strong>{props.country}</strong></CardTitle>
    //     <CardText><strong>Cases : </strong>{props.cases}</CardText>
    //     <CardText><strong>Today Cases : </strong>{props.todayCases}</CardText>
    //     <CardText><strong>Deaths : </strong>{props.deaths}</CardText>
    //     <CardText><strong>Today Deaths : </strong>{props.todayDeaths}</CardText>
    //     <CardText><strong>Recovered : </strong>{props.recovered}</CardText>
    //     <CardText><strong>Critical : </strong>{props.critical}</CardText>
    //     {/* <Button>Go somewhere</Button> */}
    //   </Card>
    // </Col>
    // </Row>


    <tbody>
      <tr style={{fontWeight: "600"}}>
      <th scope="row">{props.rank}</th>
      {/* <img src={props.flag} alt="flag" height="20px" width="40px"/>{' '} */}
      
  <th scope="row"><ModalGraph countryName={props.country}></ModalGraph></th>
        <td>{props.cases}</td>
        <td><span style={{color: "#CCCC00"}}>+{props.todayCases}</span></td>
        <td>{props.deaths}</td>
        <td><span style={{color: "red"}}>+{props.todayDeaths}</span></td>
        <td>{props.recovered}</td>
        <td>{props.critical}</td>
      </tr>
    </tbody>

  );
};

export default class CardCovid extends React.Component {

  render() {
    return (
      <CovidData key={this.props.country}
        rank ={this.props.rank}
        country={this.props.country}
        flag={this.props.flag}
        cases={this.props.cases}
        todayCases={this.props.todayCases}
        deaths={this.props.deaths}
        todayDeaths={this.props.todayDeaths}
        recovered={this.props.recovered}
        critical={this.props.critical}
      />
 
    )
  }
}