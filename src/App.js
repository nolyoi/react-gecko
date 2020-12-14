import React, { Component } from 'react';
import './App.css';
import CoinList from './components/coinList';
import Home from './components/home';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="container"> 
        <Router>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link to="/" href="/" className="nav-link active" aria-current="page">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/coins" href="/coins" class="nav-link">Coins</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        
          <Switch>
            <Route path="/coins">
              <CoinList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>

      </div>
    );
    
  }
}

export default App;
