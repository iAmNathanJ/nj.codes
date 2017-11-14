import React, { PureComponent } from 'react';
import Page from 'components/page';
import Markdown from 'react-markdown';
import changeTheme from 'helpers/change-theme';
import { Link } from 'react-router-dom';

export default class About extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { route } = this.props;

    return (
      <Page pageName={route.pageName}>
        <article className="article">
          <div className="article-meta">
            <h2 className="article-title">
              <span>Hello :)</span>
            </h2>
          </div>
          <div className="article-body contain">
            <div className="article-date">
            </div>
            <div className="article-content">
              Things about me.
            </div>
          </div>
        </article>
      </Page>
    );
  }
}
