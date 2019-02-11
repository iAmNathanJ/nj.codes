import React, { useEffect, Fragment } from 'react';
import { Link } from 'gatsby';
import { storage, PREFERENCES } from '../utils';
import { GlobalStyles, contain } from '../styles';

function Layout({ location, title, children }) {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isHomePage = location.pathname === rootPath;

  useEffect(() => {
    const shouldWrap = Boolean(storage(PREFERENCES).get('wordWrap'));
    document.body.classList.toggle('word-wrap', shouldWrap);
  });

  return (
    <Fragment>
      <GlobalStyles />
      <Header isHomePage={isHomePage}>
        <Link className="site-title__link" to="/">
          {title}
        </Link>
      </Header>
      {children}
      <Footer />
    </Fragment>
  );
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

function Footer() {
  return (
    <footer css={contain} className="site-footer">
      <a rel="license" href="http://creativecommons.org/licenses/by/4.0/" style={{ color: 'var(--accent)' }}>
        cc {new Date().getFullYear()} nj
      </a>
      <span className="c-compliment"> // </span>
      <a href="/rss.xml">RSS</a>
    </footer>
  );
}

export default Layout;
