
import React, { Component } from 'react'
import Liquors from "../Liquors/Liquors"
import Liquor from "../Liquor/Liquor"

import './LiquorList.css'

const liquors = [
  { id: 1, name: "Nice Bourbon", proof: "80", type: "Bourbon", content: "Corporis accusamus placeat quas non voluptas.", rating: 3  },
  { id: 2, name: "Great Bourbon", proof: "90", type: "Bourbon", content: "Corporis accusamus placeat quas non voluptas.", rating: 5 },
  { id: 3, name: "Nice Rye", proof: "80", type: "Rye", content: "Corporis accusamus placeat quas non voluptas.", rating: 3},
  { id: 4, name: "OK Scotch", proof: "110", type: "Scotch", content: "Corporis accusamus placeat quas non voluptas.", rating: 2 },
  { id: 5, name: "Good Scotch", proof: "90", type: "Scotch", content: "Corporis accusamus placeat quas non voluptas.", rating: 4 },
  { id: 6, name: "Great Rye", proof: "80", type: "Rye", content: "Corporis accusamus placeat quas non voluptas.", rating: 5 },
  { id: 7, name: "Not so Nice Bourbon", proof: "90", type: "Bourbon", content: "Corporis accusamus placeat quas non voluptas.", rating: 1 },
  { id: 8, name: "Bourbon Street", proof: "80", type: "Bourbon", content: "Corporis accusamus placeat quas non voluptas.", rating: 3  },
  { id: 9, name: "Twice as Nice Bourbon", proof: "90", type: "Bourbon", content: "Corporis accusamus placeat quas non voluptas.", rating: 5 },
  { id: 10, name: "All-Rye-t", proof: "80", type: "Rye", content: "Corporis accusamus placeat quas non voluptas.", rating: 3},
  { id: 11, name: "OK I Guess Scotch", proof: "110", type: "Scotch", content: "Corporis accusamus placeat quas non voluptas.", rating: 2 },
  { id: 12, name: "Decent Scotch", proof: "90", type: "Scotch", content: "Corporis accusamus placeat quas non voluptas.", rating: 4 },
  { id: 13, name: "Awesome Rye", proof: "80", type: "Rye", content: "Corporis accusamus placeat quas non voluptas.", rating: 5 },
  { id: 14, name: "Nasty Bourbon", proof: "90", type: "Bourbon", content: "Corporis accusamus placeat quas non voluptas.", rating: 1 },
  { id: 15, name: "Great Scott! Scotch", proof: "90", type: "Scotch", content: "Corporis accusamus placeat quas non voluptas.", rating: 4 },
  { id: 16, name: "Wonderful Rye", proof: "80", type: "Rye", content: "Corporis accusamus placeat quas non voluptas.", rating: 5 },
  { id: 17, name: "Nasty Brown Stuff", proof: "90", type: "Bourbon", content: "Corporis accusamus placeat quas non voluptas.", rating: 1 },
  { id: 18, name: "Ole Rot Gut", proof: "110", type: "Rye", content: "Corporis accusamus placeat quas non voluptas.", rating: 0 }
];


export default class LiquorList extends Component {
  constructor(props) {
		super(props);
  this.state = {
    id: 0,
  };
}

componentDidMount() {
  window.scrollTo(0, 0);
}

  setLiquor = newId => {
    console.log(newId);
    this.setState({
      id: newId
    });
  };

 

  render() {

    return (
      <div className="liquor-list-container">
        {this.state.id ? (
          <Liquor liquor={liquors.find(each => each.id == this.state.id)} />
        ) : null}
        <Liquors list={liquors} liquor={this.setLiquor} />
      </div>
    );
  }
}
