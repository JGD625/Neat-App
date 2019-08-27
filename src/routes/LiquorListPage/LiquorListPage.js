import React, { Component } from 'react'
import Liquor from '../LiquorPage/LiquorPage'
import './LiquorListPage.css'




function LiquorList(props) {
  return (
    <div className="liquor-list-main">
      {props.liquors.map(c => <Liquor key={c.id} id={c.id} liquorId={c.id} name={c.name} proof={c.proof} type={c.type} content={c.content}/>)}
     </div> 
  ); 
} 

export default LiquorList;
