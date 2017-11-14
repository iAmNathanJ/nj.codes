import React, { PureComponent } from 'react';
import Page from 'components/page';
import ArticlePlaceholder from 'components/article-placeholder';
import Markdown from 'react-markdown';
import changeTheme from 'helpers/change-theme';

export default class Article extends PureComponent {
  constructor(props) {
    super(props);
  }

  articleDate = () => {
    const { article } = this.props.data;
    const dateAuthored = article['date-authored'];
    const date = new Date(dateAuthored);
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate() + 1;
    return (
      <time dateTime={dateAuthored}>{`${y}-${m}-${d}`}</time>
    );
  }

  articleContent = () => {
    const { article } = this.props.data;
    const body = article.body;
    return body
      ? <Markdown source={body} />
      : <ArticlePlaceholder />
  }

  render() {
    const { route, data } = this.props;
    const { article } = data;
    return (
      <Page pageName={route.pageName}>
        <article className="article">
          <div className="article-meta">
            <h2 className="article-title">
              <span>{article.title}</span>
            </h2>
            <h3>{article.summary}</h3>
          </div>
          <div className="article-body contain">
            <div className="article-date">
              <a href="#">{this.articleDate()}</a>
              <a href={article.articleLink}>GitHub</a>
              <a href="#" onClick={changeTheme}>Color</a>
            </div>
            <div className="article-content">
              {this.articleContent()}
            </div>
          </div>
        </article>
      </Page>
    );
  }
}
