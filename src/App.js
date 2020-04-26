import React from 'react';
import './App.css';
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/hats' component={HomePage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
