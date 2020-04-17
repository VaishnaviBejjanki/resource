import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
// import 'chartjs-plugin-datalabels'

const bar = {
  width: '600px',
  height: '354px',
  marginLeft: '27px',
}


const state = {
  labels: ['AD', 'SM', 'M',
    'AM', 'TL', 'SSE', 'SE', 'ASE'],
  datasets: [
    {
      label: 'Male',
      data: [0, 0, 100, 0, 100, 33.3, 0, 0],
      backgroundColor: 'rgba(75,192,192,1)',
      borderWidth: 2
    }, {
      label: 'Female',
      data: [0, 0, 0, 0, 0, 66.7, 0, 100],
      backgroundColor: 'rgb(255,179,28)',
      borderWidth: 2
    }

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
              text: 'ESI - Level Wise Diversity Ratio',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'bottom',
            },
            scales: {
              yAxes: [{
                ticks: {
                  max: 120,
                  min: 0,

                }
              }]
            }, plugins: {
              datalabels: {
                color: 'black',
                formatter: function (value) {
                  return Math.round(value) + '%';
                }, font: {
                  weight: 'bold',
                  size: 13
                },
                anchor: "end",
                align: 'top'
              }
            },
            width: '1000px',
            height: '498px'

          }}
        />
      </div>
    );
  }
}

export default BarChart;