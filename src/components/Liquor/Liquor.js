import React, { Component } from 'react'
import StarRatings from 'react-star-ratings'
import './Liquor.css'



export default class Liquor extends Component {
  render() {
    return (
      <div className="liquor-list-item-detail">
        <div className="img-placeholder"></div>
        <div className="detail-text-container">
        <span>Name: {this.props.liquor.name}</span>
        <span>Proof: {this.props.liquor.proof}</span>
        <span>Type: {this.props.liquor.type}</span>
        <span>About: {this.props.liquor.content}</span>
        </div>
        <StarRatings
          rating={this.props.liquor.rating}
          starRatedColor="black"
          changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
          starDimension="20px"
          starSpacing="5px"
        />

      </div>
    );
  }
}

   