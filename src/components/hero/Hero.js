import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Hero.css';

class Hero extends Component {
    render() {
    return (
      <section className='hero'>
        <h2 className="hero-text">Cheers!</h2>
        <p className="hero-text">Neat is here to help you find your next glass. Search for the perfect whiskey, check out what other users had to say, or log-in to join the conversation. </p>
        <Link to="/liquorlist">
          <h1 className="app-title">START SEARCHING</h1>
        </Link>
      </section>
    );
  }
}
  
  export default Hero;
