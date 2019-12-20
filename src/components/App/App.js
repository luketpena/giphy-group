import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

import SearchPage from '../SearchPage/SearchPage';
import AddNewPage from '../AddNewPage/AddNewPage';


class App extends Component {

  componentDidMount () {
    this.props.dispatch({type: 'GET_CATEGORIES'});
  }

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        
        <Router>
          <Route exact path='/' component={SearchPage}/>
          <Route path='/addNew' component={AddNewPage}/>
        </Router>
      </div>
    );
  }
  
}

export default connect()(App);
