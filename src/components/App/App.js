import React, { Component } from 'react';
import {connect} from 'react-redux';




class App extends Component {

  state = {
    search: ''
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
    console.log('in handleChange:', event.target.value);
  }

  submitSearch = (event) => {
    event.preventDefault();
    console.log('searching:', this.state.search);
    // clearing
    this.setState ({
      search: ''
    })
    this.props.dispatch({ type: 'SEND_SEARCH', payload: this.state})
  }

  performSearch = ()=> {
    this.props.dispatch({type: 'SEARCH_GIPHY', payload: this.state.search})
  }

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <input placeholder="search" type="text" onChange={(event)=>this.handleChange(event, 'search')} value={this.state.search}/>
        <button onClick={this.performSearch}>CLICK ME</button>
        {/* {JSON.stringify(this.props.images)} */}
        <div>
        {this.props.images.map( (item,i)=> {
          let url = item.image_url;          
          return <img src={url} alt={item.title} />
        })}
        </div>
      </div>
    );
  }
  
}

export default connect(reduxState=>({images: reduxState.searchReducer}))(App);
