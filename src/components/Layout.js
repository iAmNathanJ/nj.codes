import 'focus-visible';
import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby';
import { storage, PREFERENCES } from '../utils';
import { GlobalStyles, contain } from '../styles';

class Layout extends Component {
  componentDidMount() {
    const shouldWrap = Boolean(storage(PREFERENCES).get('wordWrap'));
    document.body.classList.toggle('word-wrap', shouldWrap);
  }
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const isHomePage = location.pathname === rootPath;
    return (
      <Fragment>
        <GlobalStyles />
        <Header isHomePage={isHomePage}>
          <Link className="site-title__link" to="/">
            {title}
          </Link>
        </Header>
        {children}
        <footer css={contain} className="site-footer">
          copyright {new Date().getFullYear()} nj // <Link to="rss.xml">RSS</Link>
        </footer>
      </Fragment>
    );
  }
}

function Header({ isHomePage, children }) {
  return (
    <header css={contain}>
      {isHomePage ? (
        <h1 className="site-title">{children}</h1>
      ) : (
        <h3 className="site-title">{children}</h3>
      )}
    </header>
  );
}

export default Layout;
