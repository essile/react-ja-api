import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Tuotteet from "./Tuotteet/Tuotteet";
import Etusivu from "./Etusivu/Etusivu";
import { Navbar, Nav, NavItem } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h2>Tuotehallinta</h2>             
              <Navigaatio />
            <hr />
            <Switch>
              <Route exact path="/" component={Etusivu} />
              <Route path="/tuotteet" component={Tuotteet} />
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

class Navigaatio extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" exact activeClassName="active">&nbsp;&nbsp;&nbsp;Koti&nbsp;&nbsp;&nbsp;</NavLink>
        <NavLink to="/tuotteet" exact activeClassName="active">&nbsp;&nbsp;&nbsp;Tuotteet&nbsp;&nbsp;&nbsp;</NavLink>
      </div>
    );
  }
}

export default App;




{/* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */}