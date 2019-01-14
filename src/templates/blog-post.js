import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { IconGitHub } from '../components/icons';
import {
  article,
  articleTile,
  articleSubtitle,
  articleMeta,
  code,
  contain,
  bottomNav,
  iconLink,
  flexRow,
} from '../styles';
import {
  createShadow,
  formatTime,
  ghLink,
  addSnippetHeaders,
  initUtterances
} from '../utils';

class BlogPostTemplate extends Component {
  componentDidMount() {
    createShadow(this.title);
    addSnippetHeaders(this.article);
    initUtterances(this.comments);
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const post = this.props.data.markdownRemark;
    const { frontmatter: meta } = post;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={meta.title} description={post.excerpt} keywords={meta.tags || []} />
        <article css={contain}>
          <h1 css={articleTile} ref={n => (this.title = n)}>
            <span>{meta.title}</span>
          </h1>
          <div css={articleMeta}>
            <span css={articleSubtitle}>{meta.subtitle}</span>
            <div>
              <time dateTime={meta.date}>
                {formatTime(meta.date)}
              </time>
              <a href={ghLink(post.fileAbsolutePath)} css={[flexRow, iconLink]}>
                <span className="link-text">Edit on GitHub</span>
                <IconGitHub size={26} />
              </a>
            </div>
          </div>
          <div
            ref={n => this.article = n}
            css={[article, code]}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>

        <div css={contain}>
          <Bio  />
        </div>

        <nav css={[contain, bottomNav]}>
          <div>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </div>
          <div>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </div>
        </nav>

        <div ref={n => this.comments = n} css={contain}></div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      fileAbsolutePath
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        subtitle
        date
        tags
      }
    }
  }
`;
