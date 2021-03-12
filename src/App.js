import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {NavBar} from './components';
import {HomePage, TaskPage} from './pages';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/tasks'>
          <TaskPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
