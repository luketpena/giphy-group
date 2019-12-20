import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

class AddNewPage extends Component {

  state = {
    categories: []
  }

  goToAddFavorite = () => {
    this.props.history.push('/addNew');
    
  }

  clickCategory = (event, id) => {
    if (this.state.categories.findIndex(val=>val===id)===-1) {     
      this.setState({
        categories: [...this.state.categories, id]
      });
    } else {
      this.setState({
        categories: this.state.categories.filter( val=>val!==id)
      })
    }
  }

  render () {
    return (
      <div >
          {JSON.stringify(this.state.categories)}
         <h1>ADD NEW</h1>
         <img src={this.props.image.image_url} alt={this.props.image.title} />
         <div>
          {this.props.categories.map( (item,i)=>{
            return <label key={i}><input  type="checkbox" value={item.name} onClick={(event)=>this.clickCategory(event,item.id)}/> {item.name} </label>
          })}
        </div>
      </div>
    )
  }
}

export default withRouter(connect(reduxState=>({
  image: reduxState.favoriteReducer,
  categories: reduxState.categoryReducer
}))(AddNewPage));