import React, { Component } from 'react';
import './App.css';
import CoinList from './components/coinList';
import Coin from './components/coin';
import Home from './components/home';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="container"> 
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" href="/" className="nav-link active" aria-current="page">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/coins" href="/coins" className="nav-link">Coins</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        
          <Switch>
            
            <Route path="/coins">
              <CoinList />
            </Route>
            <Route path="/coin/:coinId">
              <Coin />
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
