import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';


class GifCard extends Component {

  goToAddFavorite = () => {
    this.props.history.push('/addNew');
    this.props.dispatch({type: 'SELECT_IMAGE', payload: {...this.props.image, categories:[]}})
  }

  renderPageStuff = ()=> {
    switch(this.props.page) {
      case 'search': return <button onClick={this.goToAddFavorite}>Favorite me!</button>;
    }
  }

  render () {
    return (
      <div className="imageCard">
         <img src={this.props.image.image_url} alt={this.props.image.title}/>
         {this.renderPageStuff()}
      </div>
    )
  }
}

export default withRouter(connect()(GifCard));