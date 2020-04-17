import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
// import 'chartjs-plugin-datalabels';
const bar = {
  width: '600px',
  height: '490px',
  marginLeft: '50px',
}


const state = {
  labels: ['M', 'TL', 'SSE', 'ASE'],
  datasets: [
    {
      label: 'Male',
      data: [1, 2, 1, 0],
      backgroundColor: 'rgba(75,192,192,1)',
      borderWidth: 2
    }, {
      label: 'Female',
      data: [0, 0, 2, 1],
      backgroundColor: 'rgb(255,179,28)',
      borderWidth: 2
    },

  ],
}


class BarChart extends Component {
  render() {
    return (
      <div style={bar}>
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: 'ESI - Level Wise Diversity Headcount',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'bottom'
            },
            scales: {
              xAxes: [{
                barThickness: 75
              }],
              yAxes: [{
                ticks: {
                  max: 2.5,
                  min: 0,
                  stepSize: 0.5

                }
              }]
            }, plugins: {
              datalabels: {
                align: 'end',
                anchor: 'end',
                font: 'bold',
                fontSize: 10,
                color: 'black'
              }
            },

          }}
        />
      </div>
    );
  }
}

export default BarChart;