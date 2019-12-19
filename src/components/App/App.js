import React, { Component } from 'react';
import {connect} from 'react-redux';




class App extends Component {

  performSearch = ()=> {
    this.props.dispatch({type: 'SEARCH_GIPHY', payload: 'baby'})
  }

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <button onClick={this.performSearch}>CLICK ME</button>
        {JSON.stringify(this.props.images)}
        {this.props.images.map( (item,i)=> {
          return <img src={item.url} alt={item.title} />
        })}
        <img src="https://media2.giphy.com/media/Xw6yFn7frR3Y4/giphy.gif?cid=668c3057a0ca735edc4ae601d5401a54d4197d730639f42a&rid=giphy.gif" />
      </div>
    );
  }
  
}

export default connect(reduxState=>({images: reduxState.searchReducer}))(App);
