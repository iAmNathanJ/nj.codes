import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Page from 'components/page';
import DateTime from 'components/date-time';

class Articles extends PureComponent {
  listArticles = () => {
    const { articles } = this.props;
    return articles.map(article => {
      const { oid, path, title, summary } = article;
      const location = {
        pathname: `/articles/${path}`,
        state: { article }
      };
      return (
        <li key={oid} className="article-item border-top-compliment">
          <Link className="article-link" to={location}>
            <h2 className="article-title">{title}</h2>
            <h3 className="article-summary">{summary}</h3>
            <p className="article-date">
              <DateTime className="article-date" dateTime={article['date-authored']} />
            </p>
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

export default Articles;
