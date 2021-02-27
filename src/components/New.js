import React from 'react';

class New extends React.Component {
    state = { name: '', breed: ''}

    saveCatToList(e) {
        if(e.key==="Enter") {
            const {name,breed} = this.state;
            this.props.addCat({ name: name, breed: breed});
        }
    }

    render() {
        return (
            <section>
                <h3>New Cat</h3>
                <ul>
                    <li><input type="text" placeholder="Name" onChange={v => this.setState({name: v.target.value})} value={this.state.name} /></li>
                    <li><input type="text" placeholder="Breed" onKeyDown={e => this.saveCatToList(e)} onChange={v => this.setState({breed: v.target.value})} value={this.state.breed} /></li>
                </ul>
            </section>
        )
    }
}

export default New;