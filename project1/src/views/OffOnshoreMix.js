import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

const pie = {
    width: '700px',
    height: '600px',
    marginLeft: '330px'
}

class OffOnshoreMix extends Component {
    constructor(props) {
        super(props)
        this.state = {
            labels: ['Offshore', 'Onshore'],
            datasets: [{
                data: [87, 13],
                backgroundColor: ['rgba(75,192,192,1)', 'rgb(255,179,28)']
            }]
        }
    }
    render() {
        return (
            <div style={pie}>
                <Pie
                    data={{
                        labels: this.state.labels,
                        datasets: this.state.datasets
                    }}
                    options={{
                        title: {
                            display: true,
                            text: 'Offshore/Onshore Mix',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'bottom'
                        },
                        plugins: {
                            datalabels: {
                                color: 'black',
                                formatter: function (value) {
                                    return Math.round(value) + '%';
                                }, font: {
                                    weight: 'bold',
                                    size: 16

                                },
                                align: 'top',
                                anchor: 'top'
                            }
                        }
                    }} />
                <br />
            </div>

        );
    }
}
export default OffOnshoreMix;
