import React, { Component } from "react";
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings'
import './ProfilePage.css'

const dummyusers = [
  { id: 1, name: "James B. Urban", username: "BourbonMan42", favorite_liquor: "Wild Turkey", picture_url: "http://jdbutisbauch.com/images/profilepic.png"  }
];

const dummycomments = [
  { id: 1, liquor: "Awesome Bourbon", content: "I thought it was pretty good, but not for the price.", rating: 3, date:"8-20-2019"  },
  { id: 2, liquor: "Brown Rye", content: "Rye is my second favorite, so of course I love this one! A bit sweet but nice vanilla notes with a sharp finish.", rating: 4, date:"7-10-2019" },
  { id: 3, liquor: "Mossy Scotch", content: "I am not much of a scotch drinker, so maybe I am not the right person to ask, but I thought this was pretty decent.", rating: 3, date:"5-4-2019"  },
  { id: 4, liquor: "Best Bourbon", content: "Amazing taste and value! Plus the bottle looks great, nice on the bar.", rating: 5, date:"5-1-2019"  },
]


class Profile extends Component {
  state = {
    user: "",
  };

  componentDidMount() {
    window.scrollTo(0, 0);
      this.setState({ user: dummyusers });
  }

  renderNewUser = () => {
    return (
      <div className="user-profile-page-container clearfix">
        <div className="user-profile-container">
          {dummyusers.map(each => (
            <ul>
              <li key={each.id}>
              <img src={each.picture_url} alt="profile-picture" className="profile-picture" />
                <div className="user-profile-list">
                <span className="user-user_name-style">{each.username}</span>
                <span className="user-name-style">{each.name}</span>
                <span >Favorite: {each.favorite_liquor}</span>
                </div>
              </li>
            </ul>
          ))}
        </div>
        <h3>RECENT COMMENTS</h3>
        <div className="user-profile-container">
          {dummycomments.map(each => (
            <ul>
              <li key={each.id}>
                {each.comments} 
                <span>{each.liquor}</span>
                <span><StarRatings
                  rating={each.rating}
                  starRatedColor="black"
                  numberOfStars={5}
                  name='rating'
                  starDimension="20px"
                  starSpacing="5px"
                />
                </span>
                <p>{each.content}</p>
                <span>{each.date}</span>
              </li>
            </ul>
          ))}
        </div>
      
      </div>
    );
  };

  renderLoading() {
    return <div>Loading...</div>;
  }

  render() {
    return (
      <div>{this.state.user ? this.renderNewUser() : this.renderLoading()}</div>
    );
  }
}
export default Profile;