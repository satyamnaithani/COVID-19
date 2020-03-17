import React from 'react'
import { Card, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

const CovidData = (props) => {
  return (
      <Row xs="6" sm="4">
    
      <Col >
        <Card body>
          <CardTitle>{props.country}</CardTitle>
          <CardText>Cases : {props.cases}</CardText>
          <CardText>Today Cases : {props.todayCases}</CardText>
          <CardText>Deaths : {props.deaths}</CardText>
          <CardText>Today Deaths : {props.todayDeaths}</CardText>
          <CardText>Recovered : {props.recovered}</CardText>
          <CardText>Critical : {props.critical}</CardText>
          {/* <Button>Go somewhere</Button> */}
        </Card>
      </Col>
      </Row>
  );
};

export default class CardCovid extends React.Component{

    render(){
        return(
            
               <Container>
                    <CovidData  key={this.props.country} 
                        country={this.props.country} 
                        cases={this.props.cases} 
                        todayCases={this.props.todayCases}
                        deaths={this.props.deaths}
                        todayDeaths={this.props.todayDeaths}
                        recovered={this.props.recovered}
                        critical={this.props.critical}
                        />
               </Container>
        )
    }
}