import React from 'react';

interface Props {
    name: string;
}

const Employee: React.FC<Props> = (props) => {
    const name = props.name;

    let randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

    const age = randomNumber(18, 67);
    const velocity = randomNumber(0, 100);
    const learning = randomNumber(0, 100);
    const communication = randomNumber(0, 100);
    const problemSolving = randomNumber(0, 100);

    let workOnProject = () => {
            return this.velocity;
    } 

    return (
        <div className="employee">
            <img src="./img/EmployeeImage.png" alt="EmployeeImage" />
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Velocity: {velocity} %</p>
            <p>Learning: {learning} %</p>
            <p>Communication: {communication} %</p>
            <p>Problem Solving: {problemSolving} %</p>
        </div>
    );
};

export default Employee;