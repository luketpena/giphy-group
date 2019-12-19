import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

import SearchPage from '../SearchPage/SearchPage';


class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        
        <Router>
          <Route exact path='/' component={SearchPage}/>
        </Router>
      </div>
    );
  }
  
}

export default connect()(App);
