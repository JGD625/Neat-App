import React, { Component } from 'react'
import './Article.css'



export default class Article extends Component {
  render() {
    return (
      <div className="article-detail-container">
      <div className="img-placeholder"></div>
      <div className="article-text-container">
      <span className="article-title-style">{this.props.article.title}</span>
      <span className="article-detail-author-name-style"> {this.props.article.author}</span>
      <span> {this.props.article.content}</span>
      </div>
    

    </div>
    );
  }
}

   