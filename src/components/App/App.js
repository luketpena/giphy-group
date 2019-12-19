import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import addNew from '../addNew/addNew';
import './App.css';

import SearchPage from '../SearchPage/SearchPage';


class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        
        <Router>
          <nav>
            <ul>
              <li><Link to="/favorites">Favorties</Link></li>
            </ul>
          </nav>
          <Route exact path='/' component={SearchPage}/>
          <Route path='/addNew' component={addNew}/>
          <Route path='/favorite' component={favorite}/>
        </Router>
      </div>
    );
  }
  
}

export default connect()(App);
