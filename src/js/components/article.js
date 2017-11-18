import React, { PureComponent } from 'react';
import Page from 'components/page';
import ArticlePlaceholder from 'components/article-placeholder';
import changeTheme from 'helpers/change-theme';
import { leadingZero } from 'helpers/formatting';

export default class Article extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      lightTheme: document.documentElement.classList.contains('light-theme')
    });
  }

  articleDate = () => {
    const { article } = this.props.data;
    const dateAuthored = article['date-authored'];
    const date = new Date(dateAuthored);
    const y = date.getFullYear();
    const m = leadingZero(date.getMonth() + 1);
    const d = leadingZero(date.getDate() + 1);
    return (
      <time dateTime={dateAuthored}><strong>{`${y}.${m}.${d}`}</strong></time>
    );
  }

  articleContent = () => {
    const { article } = this.props.data;
    return article
      ? <div dangerouslySetInnerHTML={article} />
      : <ArticlePlaceholder />
  }

  render() {
    const { route, data } = this.props;
    const { article } = data;
    const otherTheme = this.state.lightTheme ? 'Dark' : 'Light';
    return (
      <Page pageName={route.pageName}>
        <article className="article contain">
          <h2 className="article-title">
            <span>{article.title}</span>
          </h2>
          <h3 className="article-subtitle">{article.summary}</h3>
          <div className="article-meta">
            <a className="article-date" href="#">{this.articleDate()}</a>
            <a href={article.articleLink}>GitHub</a>
            <a href="#" onClick={changeTheme}>Change Theme</a>
          </div>
          <div className="article-content">
            {this.articleContent()}
          </div>
        </article>
      </Page>
    );
  }
}
