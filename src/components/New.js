import { useState } from "react";

function New(props) {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');

    const saveCatToList = function(e) {
        if(e.key==="Enter" && name && breed) {
            props.addCat({ name: name, breed: breed});
            setName('');
            setBreed('');
        }
    }

    return (
            <section>
                <h3>New Cat</h3>
                <ul>
                    <li><input type="text" placeholder="Name" onKeyDown={e => saveCatToList(e)} onChange={v => setName(v.target.value)} value={name} /></li>
                    <li><input type="text" placeholder="Breed" onKeyDown={e => saveCatToList(e)} onChange={v => setBreed(v.target.value)} value={breed} /></li>
                </ul>
            </section>
    )
}

export default New;