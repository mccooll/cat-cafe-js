import React from 'react';
import './App.css';
import CatList from './components/List';
import { backendBaseUrl } from './Constants';

class App extends React.Component {
    state = { cats: [] }

    async getCats() {
        const request = await fetch(`${backendBaseUrl}/cats`);
        return request.json();      
    }

    async componentDidMount() {
        let cats = await this.getCats();
        this.setState({cats});
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
                    <section>
                        <h3>New Cat</h3>
                        <ul>
                            <li><input type="text" placeholder="Name"/></li>
                            <li><input type="text" placeholder="Breed"/></li>
                        </ul>
                    </section>
                </main>
            </div>
        )
    }
}

export default App;
