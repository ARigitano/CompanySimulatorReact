import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Company from './pages/Company';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Company} />
        <Route path="/projects" exact component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
