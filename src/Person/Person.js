import React from 'react';

import './Person.css';

const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <input type="text" onChange={props.changeName} value={props.name} />

            {/* <button onClick={props.clickUpdate}>Person update Name </button>
            <button onClick={props.clickRevert}>Person revert Name </button> */}

            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;