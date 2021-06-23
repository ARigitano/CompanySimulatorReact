import React from 'react';
import Navigation from '../components/Navigation';
import Employee from '../components/Employee';

const Company = () => {
    const gain = 0;
    const employee = [<Employee name="Jeff" />, <Employee name="John" />, <Employee name="Jane" />, <Employee name="Jill" />];

     return (
        <div>
            <Navigation />
            <h1>Company</h1>
            <p>{employee[0]}</p>
            <p>{employee[1]}</p>
            <p>{employee[2]}</p>
            <p>{employee[3]}</p>
            <h3>Company gain: {gain}</h3>
        </div>
    );
};

export default Company;