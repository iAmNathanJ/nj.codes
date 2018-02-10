import React, { PureComponent } from 'react';
import Page from 'components/page';
import ArticlePlaceholder from 'components/article-placeholder';
import DateTime from 'components/date-time';
import { selectAll } from 'helpers/dom';
import { createShadow } from 'helpers/long-shadow';
import { addLineNumbers } from 'helpers/code-styles';

class Article extends PureComponent {
  componentDidMount() {
    createShadow(this.title);
    selectAll('pre').forEach(addLineNumbers);
  }

  articleContent = () => {
    const { article } = this.props;
    return article
      ? <div className="markdown" dangerouslySetInnerHTML={article} />
      : <ArticlePlaceholder />
  }

  render() {
    const { route, article } = this.props;
    const articleDate = article['date-authored'];
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
              Authored: <DateTime datetime={articleDate} />
            </p>
          </div>
        </article>
      </Page>
    );
  }
}

export default Article;
