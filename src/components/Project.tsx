import React from 'react';

interface Props {
    name: string;
}

const Project: React.FC<Props> = (props) => {
    const name = props.name;

    let randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

    const turnsRequired = randomNumber(1, 20);
    
    const minPayment = 1000;
    const maxPayment = 100000;
    const payment = turnsRequired * randomNumber(minPayment, maxPayment);

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