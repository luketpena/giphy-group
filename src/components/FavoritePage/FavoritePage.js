import React, {Component} from 'react';
import { connect } from 'react-redux';
import GifCard from '../GifCard/GifCard';

class FavoritePage extends Component {

componentDidMount(){
  this.props.dispatch({ type: 'GET_FAVORITE_LIST'})
}

  render () {
    return (
      <div>
        <h1>Favorite List</h1>
        {JSON.stringify(this.props.favoriteImages)}
        <div className="pictureBox">
        {this.props.favoriteImages.map( (item,i)=> {     
          return <GifCard key={i} image={item} page='favorites'/>
        })}
        </div>
      </div>
    )
  }
}

export default connect(reduxState=>({favoriteImages: reduxState.favoriteListReducer}))(FavoritePage);