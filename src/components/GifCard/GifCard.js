import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';


class GifCard extends Component {

  goToAddFavorite = () => {
    this.props.history.push('/addNew');
    this.props.dispatch({type: 'SELECT_IMAGE', payload: {...this.props.image, categories:[]}})
  }

  render () {
    return (
      <div className="imageCard">
         <img src={this.props.image.image_url} alt={this.props.image.title}/>
         <button onClick={this.goToAddFavorite}>Favorite me!</button>
      </div>
    )
  }
}

export default withRouter(connect()(GifCard));