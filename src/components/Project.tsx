import React from 'react';

const Project = (props) => {
    const name = props.name;

    let randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const turnsRequired = randomNumber(1, 20);
    const payment = turnsRequired * randomNumber(1000, 10000);

    return (
        <div>
            <h3>Project: {name}</h3>
            <p>Turns required: {turnsRequired}</p>
            <p>Payment: {payment}</p>
            <button>Work on project</button>
        </div>
    );
};

export default Project;