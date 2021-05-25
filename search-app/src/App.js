import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Homepage from './components/home';
import Search from './components/search';
import AdvancedSearch from './components/advancedSearch';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Homepage} />
          <Route path='/Search' component={Search} />
          <Route path='/AdvancedSearch' component={AdvancedSearch} />
        </div>
      </Router>
    );
  }
}

export default App;
