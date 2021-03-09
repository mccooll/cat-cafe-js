import React from 'react';
import { Bar } from 'react-chartjs-2';

class Graph extends React.Component {
    getBreeds(cats) {
        const breeds = new Set();
        cats.forEach(cat => breeds.add(cat.breed));
        return Array.from(breeds);
    }
    
    getBreedNumbers(breeds, cats) {
        let numbers = [];
        numbers = breeds.map( breed => 
            cats.reduce((n, cat) => 
                breed === cat.breed ? n+1 : n
            , 0)
        );
        return numbers;
    }

    getDataSet() {
        const breeds = this.getBreeds(this.props.cats);
        return {
            labels: breeds,
            datasets:[{
                backgroundColor: 'purple',
                borderColor: '#eeeeee',
                borderWidth: 1,
                data: this.getBreedNumbers(breeds,this.props.cats)
            }]
        };
    }

    options = {
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontFamily: 'Palatino',
                    fontSize: 15,
                    fontColor: 'purple',
                    beginAtZero: true,
                    precision: 0
                }
            }],
            xAxes: [{
                ticks: {
                    fontFamily: 'Palatino',
                    fontSize: 15,
                    fontColor: 'purple'
                }
            }]
        }
    }
    

    render() {
        return (
            <section className="chart">
                <h3>Breeds</h3>
                <Bar data={() => this.getDataSet()} options={this.options} />
            </section>
        )
    }
}

export default Graph;