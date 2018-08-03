import React, { Component } from 'react';
import Home from './Home';
import Pricing from './Pricing';
import About from './About';
import { Link, Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Pricing'>Pricing</Link></li>
              <li><Link to='/About'>About</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Pricing' component={Pricing} />
            <Route exact path='/About' component={About} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
