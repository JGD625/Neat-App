import React, {Component} from 'react';
import StarRatings from 'react-star-ratings'
import './Liquors.css'


const WHISKEY_FILTERS = {

  'BY_BOURBON': list => list.type === 'Bourbon',
	'BY_RYE': list => list.type === 'Rye',
  'BY_SCOTCH': list => list.type === 'Scotch',
  'BY_ALL': list => list.type != '',
  'BY_RATING': list => list.rating === 5,
};

export default class Liquors extends Component {
  constructor(props) {
		super(props);

		this.state = {
      filterKey: 'BY_ALL',
      list: this.props.list,
		};
	}


  handleClick = e => {
    this.props.liquor(e.target.value);
  };  

  render() {
  
    const { filterKey, list } = this.state;

		const filteredlist = list.filter(WHISKEY_FILTERS[filterKey]);
    return (
      <div className="filtered-section-container">
        <div className="filter-container">
        <button className="filter-button" 
					type="button" 
					onClick={() => this.setState({ filterKey: 'BY_RYE' })}
				>Rye</button>
                <button className="filter-button"
					type="button" 
					onClick={() => this.setState({ filterKey: 'BY_BOURBON' })}
				>Bourbon</button>
                <button className="filter-button"
					type="button" 
					onClick={() => this.setState({ filterKey: 'BY_SCOTCH' })}
				>Scotch</button>
                <button className="filter-button"
					type="button" 
					onClick={() => this.setState({ filterKey: 'BY_ALL' })}
				>All</button>
         <button className="filter-button"
					type="button" 
					onClick={() => this.setState({ filterKey: 'BY_RATING' })}
				>TOP SHELF</button>
       </div>
        <div>
          {filteredlist.map(each => (
            <ul>
              <li key={each.id} className="liquor-list-item">
                {each.name} <br />
                <StarRatings
          rating={each.rating}
          starRatedColor="black"
          numberOfStars={5}
          name='rating'
          starDimension="20px"
          starSpacing="5px"
        />
                <button className="details-button" onClick={this.handleClick} value={each.id}>
                  details
                </button>
              </li>
            </ul>
          ))}
        </div>
       
      </div>
    );
  }
}

