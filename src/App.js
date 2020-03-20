import React from 'react';
import CovidData from './components/covid-data';
import NavBar from './components/NavBar'
// import Card from './components/Card'
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Card /> */}
        <NavBar />
     <CovidData/>
     </div>
    );
  }
}


export default App;
