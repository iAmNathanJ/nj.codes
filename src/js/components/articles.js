import React, { PureComponent } from 'react';
import Page from 'components/page';
import { Link } from 'react-router-dom';

export default class Articles extends PureComponent {
  constructor() {
    super();
  }

  listArticles() {
    const { articles } = this.props.data;
    return articles.map(({ oid, path, title, summary }) => {
      return (
        <li key={oid} className="article-item">
          <Link to={`/articles/${path}`}>
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
