import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Hero.css';

class SearchHero extends Component {
    render() {
    return (
      <section className='hero'>
        <h2 className="hero-text">EXPLORE</h2>
        <p className="hero-text">Some of the most popular searches on NEAT</p>
        <div className="hero-button-container">
        <Link to={{
    pathname: "/liquorlist",
    state: { filterKey: 'BY_BOURBON', },
  }} >
          <h1 className="app-title">SEARCH BOURBON</h1>
        </Link>
        <button>BOURBON</button> <button>SCOTCH</button> <button>TOP SHELF</button>
        </div>
      </section>
    );
  }
}
  
  export default SearchHero;