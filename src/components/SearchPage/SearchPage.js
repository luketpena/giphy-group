import React, {Component} from 'react';
import { connect } from 'react-redux';
import GifCard from '../GifCard/GifCard';

class SearchPage extends Component {
  state = {
    search: ''
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
    console.log('in handleChange:', event.target.value);
  }

  performSearch = ()=> {
    this.props.dispatch({type: 'SEARCH_GIPHY', payload: this.state.search})
  }

  render () {
    return (
      <div>
        <h1>Search Page</h1>
        <input placeholder="search" type="text" onChange={(event)=>this.handleChange(event, 'search')} value={this.state.search}/>
        <button onClick={this.performSearch}>CLICK ME</button>
        {/* {JSON.stringify(this.props.images)} */}
        <div className="pictureBox">
        {this.props.images.map( (item,i)=> {     
          return <GifCard key={i} image={item}/>
        })}
        </div>
      </div>
    )
  }
}

export default connect(reduxState=>({images: reduxState.searchReducer}))(SearchPage);