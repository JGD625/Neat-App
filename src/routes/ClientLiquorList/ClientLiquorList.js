import React, { Component } from 'react'
import LiquorList from '../LiquorListPage/LiquorListPage'

const liquors = [
  { id: 1, name: "Nice Bourbon", proof: "80", type: "Bourbon", content: "Corporis accusamus placeat quas non voluptas."  },
  { id: 2, name: "Great Bourbon", proof: "90", type: "Bourbon", content: "Corporis accusamus placeat quas non voluptas." },
  { id: 3, name: "Nice Rye", proof: "80", type: "Rye", content: "Corporis accusamus placeat quas non voluptas."},
  { id: 4, name: "OK Scotch", proof: "110", type: "Scotch", content: "Corporis accusamus placeat quas non voluptas." },
  { id: 4, name: "Good Scotch", proof: "90", type: "Scotch", content: "Corporis accusamus placeat quas non voluptas." },
  { id: 4, name: "Great Rye", proof: "80", type: "Rye", content: "Corporis accusamus placeat quas non voluptas." },
  { id: 4, name: "Nasty Drink", proof: "90", type: "Bourbon", content: "Corporis accusamus placeat quas non voluptas." },
  { id: 4, name: "Ole Rot Gut", proof: "110", type: "Rye", content: "Corporis accusamus placeat quas non voluptas." }
];


export default class ClientLiquorList extends Component {
  render() {
    return (
      <div>
    
        <LiquorList liquors={liquors} />
        

      </div>
    )
  }
}
