import React, { Component } from 'react'
import Article from '../../components/Article/Article'
import Articles from '../../components/Articles/Articles'
import './ArticleList.css'

const articles = [
  { id: 1, title: "Japanese Distilleries: The Unsung Brands from the East", author: "JDB", content: "Japanese culture pays great attention to detail and holds tradition dear. Much the same could be said for the country’s whisky. Despite the heavy influence of Scottish distilleries, the huge variety of production techniques create a special and standout flavor." },
  { id: 2, title: "Designing a Home Bar", author: "John Doe", content: "As advanced design becomes more popular and attainable in the home, some really amazing designs have come into fashion. Warm, reclaimed woods and cast iron create a rustic feel for the perfect bourbon bar." },
  { id: 3, title: "If You Only Had One Bottle", author: "JDB", content: "If you could only have one bottle in the home, what would you choose? Scotch? Bourbon? Rye? This Bourbon is the Jack of All Trades of bottles. With a moderate proof and a clean finish, you could easily enjoy it on ice or neat. However, it isn't so expensive you regret using it to cook or as a mixer. " },
  { id: 4, title: "Bourbon Article", author: "Jane Doe", content: "Corporis accusamus placeat quas non voluptas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { id: 5, title: "Nice Bourbon", author: "John Doe", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { id: 6, title: "Nice Bourbon", author: "Jane Doe", content: "Corporis accusamus placeat quas non voluptas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { id: 7, title: "Nice Bourbon", author: "JDB", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Corporis accusamus placeat quas non voluptas." },
  { id: 8, title: "Nice Bourbon", author: "JDB", content: "Corporis accusamus placeat quas non voluptas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];


export default class ArticleList extends Component {
  constructor(props) {
		super(props);
  this.state = {
    id: 0,
  };
}

componentDidMount() {
  window.scrollTo(0, 0);
  if (this.props.location.state){
    this.setState({
      id: this.props.location.state.carouselId
    });
}
}


  setArticle = newId => {
    console.log(newId);
    this.setState({
      id: newId
    });
  };

 

  render() {

    return (
      <div className="article-list-container">
      <div className="articles-container">
      <h2 className="past-articles-style"> Past Articles</h2>
        <Articles articlelist={articles} article={this.setArticle} />
        </div>
        <div classname="article-detail-container">
        {this.state.id ? (
          <Article article={articles.find(each => each.id == this.state.id)} />
        ) : null}
        </div>
        
      </div>
    );
  }
}
