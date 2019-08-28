import React, {Component} from 'react';
import './Articles.css'


export default class Articles extends Component {
  constructor(props) {
		super(props);
		this.state = {
      articlelist: this.props.articlelist,
		};
	}


  handleClick = e => {
    this.props.article(e.target.value);
  };  

  render() {
  
    const { articlelist } = this.state;

	
    return (
      <div>
        <div className="article-list">
          {articlelist.map(each => (
            <ul>
              <li key={each.id}>
                {each.title} <br />
                <span className="article-author-name-style">{each.author}</span>
                <button  onClick={this.handleClick} value={each.id} className="article-detail-button">
                &#8599;
                </button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

