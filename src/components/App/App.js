import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Favorite from '../Favorite/Favorite'
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
          <Route path='/favorite' component={Favorite}/>
        </Router>
      </div>
    );
  }
  
}

export default connect()(App);
