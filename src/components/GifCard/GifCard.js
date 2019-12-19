import React, {Component} from 'react';

class GifCard extends Component {
  render () {
    return (
      <div className="imageCard">
         <img src={this.props.image.image_url} alt={this.props.image.title}/>
         <button>Favorite me!</button>
      </div>
    )
  }
}

export default GifCard;