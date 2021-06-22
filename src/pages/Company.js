import React from 'react';
import Navigation from '../components/Navigation';
import Employee from '../components/Employee';

const Company = () => {
    const gain = 0;

    return (
        <div>
            <Navigation />
            <h1>Company</h1>
            <Employee name ="Jim"/>
            <Employee name ="Jane"/>
            <Employee name ="Joe"/>
            <Employee name ="Jill"/>
            <h3>Company gain: {gain}</h3>
        </div>
    );
};

export default Company;