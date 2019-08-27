import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Navigation from '../navigation/Nav'
import './Header.css';

class Header extends Component {
    render() {
    return (
      <section className='header'>
        <Link to="/">
          <h1 className="app-title">NEAT</h1>
        </Link>
        <Navigation />
      </section>
    );
  }
}
  
  export default Header;
