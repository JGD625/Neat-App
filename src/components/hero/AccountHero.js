import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Hero.css';

class AccountHero extends Component {
    render() {
    return (
      <section className='hero'>
        <h2 className="hero-text">Join Neat</h2>
        <p className="hero-text">Create a Neat account, </p>
        <div className="hero-button-container">
        <Link to={"/profile"} >
          <h1 className="app-title">See A Neat Profile</h1>
        </Link>
        </div>
      </section>
    );
  }
}
  
  export default AccountHero;