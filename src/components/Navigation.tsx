import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active"> 
                Company
            </NavLink>
            <NavLink exact to="/projects" activeClassName="nav-active">
                Projects
            </NavLink>
        </div>
    );
};

export default Navigation;