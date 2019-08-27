import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Hero.css';

class RecentHero extends Component {
    render() {
    return (
      <section className='hero'>
        <h2 className="hero-text">New and Popular</h2>
        <p className="hero-text"> Recently added or commented on liquors</p>
       
      </section>
    );
  }
}
  
  export default RecentHero;