import React from 'react';
import './App.css';
import CatList from './components/List';
import NewCat from './components/New';
import { backendBaseUrl } from './Constants';

class App extends React.Component {
    state = { cats: [], colour: 'red' }

    async getCats() {
        const request = await fetch(`${backendBaseUrl}/cats`);
        return request.json(); 
    }

    async componentDidMount() {
        let cats = await this.getCats();
        this.setState({ cats: cats });
    }

    addCat(cat) {
        let newCats = [...this.state.cats];
        fetch(`${backendBaseUrl}/cats`, { method:'post', body: JSON.stringify(cat), headers: { "Content-Type": 'application/json'}});
        newCats.push(cat);
        this.setState({ cats: newCats });
    }

    render() {
            return (
            <div className="App">
                <header><h1>Cat Cafe</h1></header>
                <main>
                    <section class="chart">
                        <h3>Breeds</h3>
                        <canvas id="canvas"></canvas>
                    </section>
                    <CatList cats={this.state.cats} />
                    <NewCat addCat={this.addCat.bind(this)} />
                </main>
            </div>
        )
    }
}

export default App;
