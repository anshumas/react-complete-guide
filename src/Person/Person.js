import React from 'react';

import './Person.css';
const Person = (props) => {
    return (
        <div>
            <p>I am {props.name} and my age is {props.age}.</p>
            <input type="text" onChange={props.changeName} value={props.name} />

            {/* <button onClick={props.clickUpdate}>Person update Name </button>
            <button onClick={props.clickRevert}>Person revert Name </button> */}

        </div>
    );
}
export default Person;
