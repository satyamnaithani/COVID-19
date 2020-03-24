import React, { Component } from 'react';
import {Chart} from 'react-charts'

function MyChart() {
    const data = React.useMemo(
      () => [
        {
          label: 'Series 1',
          data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
        },
        {
          label: 'Series 2',
          data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
        }
      ],
      []
    )

    const series = React.useMemo(
        () => ({
          showPoints: false
        }),
        []
      )
   
    const axes = React.useMemo(
      () => [
        { primary: true, type: 'time', position: 'bottom' },
      { type: 'linear', position: 'left' }
      ],
      []
    )
   
    return (
      <div
        style={{
          width: '400px',
          height: '300px'
        }}
      >
        <Chart data={data} axes={axes} series={series} tooltip/>
      </div>
    )
  }



class ChartData extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
        }
    }
    
     
    
    render() {
        return (
            <div>
                <MyChart />
                
            </div>
        );
    }
}

export default ChartData;