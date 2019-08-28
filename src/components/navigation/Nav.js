import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';

class Navigation extends Component {
    render() {
    return (
      <section className='navigation'>
        <Link to="/login">
        LOG IN
        </Link> | <Link to="/register">
          REGISTER
        </Link>
      </section>
    );
  }
}
  
  export default Navigation;
