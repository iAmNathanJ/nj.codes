import React, { PureComponent } from 'react';
import Page from 'components/page';
import ArticlePlaceholder from 'components/article-placeholder';
import ArticleNav from 'components/article-nav';
import DateTime from 'components/date-time';
import { selectAll } from 'helpers/dom';
import { createShadow } from 'helpers/long-shadow';
import { addLineNumbers } from 'helpers/code-styles';

class Article extends PureComponent {
  constructor(props) {
    super(props);

    const { location = {} } = this.props;
    this.state = {
      article: location.state
        && location.state.article
        || this.props.article
    };
  }

  componentDidMount() {
    createShadow(this.title);
    selectAll('pre').forEach(addLineNumbers);
  }

  articleContent = () => {
    const { article } = this.state;
    return article
      ? <div className="markdown" dangerouslySetInnerHTML={article} />
      : <ArticlePlaceholder />
  }

  render() {
    const { route } = this.props;
    const { article } = this.state;
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
              <a href={article.articleLink}>View on GitHub</a>
              {' \u1680 '}
              Authored: <DateTime dateTime={article['date-authored']} />
            </p>
          </div>
        </article>
        {/* <ArticleNav {...this.props} /> */}
      </Page>
    );
  }
}

export default Article;
