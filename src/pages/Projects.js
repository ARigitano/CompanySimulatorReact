import React from 'react';
import Navigation from '../components/Navigation';
import Project from '../components/Project';

const Projects = () => {
    return (
        <div>
            <Navigation />
            <h1>Projects</h1>
            <Project name="Website" />
            <Project name="Game" />
            <Project name="Mobile application" />
        </div>
    );
};

export default Projects;