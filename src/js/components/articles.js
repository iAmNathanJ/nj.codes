import React, { Component } from 'react';
import Page from 'components/page';
import { Link } from 'react-router-dom';

export default class Articles extends Component {
  listArticles() {
    const { data, updateArticle } = this.props;
    const { articles } = data;
    return articles.map(article => {
      const { oid, path, title, summary } = article;
      return (
        <li key={oid} className="article-item border-top-compliment">
          <Link
          className="article-link"
          to={`/articles/${path}`}
          onFocusCapture={() => updateArticle(article)}
          onMouseEnter={() => updateArticle(article)}
          onClick={() => updateArticle(article)}>
            <h2 className="article-title">{title}</h2>
            <h3 className="article-summary">{summary}</h3>
          </Link>
        </li>
      );
    });
  }

  render() {
    const { route } = this.props;
    return (
      <Page pageName={route.pageName}>
        <ul className="article-list contain">
          {this.listArticles()}
        </ul>
      </Page>
    );
  }
}
