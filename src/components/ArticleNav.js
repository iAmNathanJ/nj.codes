import React from 'react';
import { Link } from 'gatsby';
import { contain, bottomNav } from '../styles';

const ArticleNav = ({ prev, next }) => (
  <nav css={[contain, bottomNav]}>
    <div>
      {prev && (
        <Link to={prev.fields.slug} rel="prev">
          <span className="arrow">←</span> {prev.frontmatter.title}
        </Link>
      )}
    </div>
    <div>
      {next && (
        <Link to={next.fields.slug} rel="next">
          {next.frontmatter.title} <span className="arrow">→</span>
        </Link>
      )}
    </div>
  </nav>
);

export default ArticleNav;
