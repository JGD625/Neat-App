import React, { Component } from 'react'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import './LiquorPage.css'





function Liquor(props) {
  return <div className="liquor-list-item"><Link to={`/liquorlist/${props.id}`} liquor={props.id}><h2>{props.name}</h2></Link>
  
<span>Type: {props.type}</span><span>  Proof: {props.proof}</span><p>Description: {props.content}</p></div>;
}

Liquor.propTypes = {
  name: PropTypes.string.isRequired
};

export default Liquor;

