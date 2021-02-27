import React from 'react';

class List extends React.Component {
    render() {
        return (
            <section className="cats">
                <h3>Cats</h3>
                <ul>
                    { this.props.cats.map(cat =>
                        <li>{cat.name}</li>
                    )}
                </ul>
            </section>
        )
    }
}

export default List;