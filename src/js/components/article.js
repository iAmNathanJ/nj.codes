import React, { PureComponent } from 'react';
import Page from 'components/page';
import ArticlePlaceholder from 'components/article-placeholder';
import changeTheme from 'helpers/change-theme';
import { leadingZero } from 'helpers/formatting';
import { createShadow } from 'helpers/long-shadow';
import { highlightCode } from 'helpers/code-styles';

export default class Article extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      lightTheme: document.documentElement.classList.contains('light-theme')
    });
    createShadow(this.title);
    document.querySelectorAll('pre code').forEach(highlightCode);
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
      ? <div className="markdown" dangerouslySetInnerHTML={article} />
      : <ArticlePlaceholder />
  }

  render() {
    const { route, data } = this.props;
    const { article } = data;
    const otherTheme = this.state.lightTheme ? 'Dark' : 'Light';
    return (
      <Page pageName={route.pageName}>
        <article className="article contain">
          <h2 ref={n => this.title = n} className="article-title">
            <span>{article.title}</span>
          </h2>
          <h3 className="article-subtitle">{article.summary}</h3>
          <div className="article-content">
            {this.articleContent()}
          </div>
          <div className="article-meta">
            <p>
              <a href={article.articleLink}>View on GitHub</a> {'\u1680'} Authored: {this.articleDate()}
            </p>
          </div>
        </article>
      </Page>
    );
  }
}
