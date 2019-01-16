import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/Bio';
import ArticleMeta from '../components/ArticleMeta';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import ArticleNav from '../components/ArticleNav';
import Comments from '../components/Comments';
import { article, code, contain } from '../styles';
import { addSnippetHeaders } from '../utils';

class BlogPostTemplate extends Component {
  componentDidMount() {
    addSnippetHeaders(this.article);
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const post = this.props.data.markdownRemark;
    const { frontmatter: meta } = post;
    const { revisions, fileRelativePath, previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={meta.title} description={post.excerpt} keywords={meta.tags || []} />
        <article css={contain}>
          <ArticleMeta
            meta={meta}
            revisions={revisions}
            file={fileRelativePath}
          />
          <div
            ref={n => this.article = n}
            css={[article, code]}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>

        <div css={contain}>
          <Bio  />
        </div>
        <ArticleNav prev={previous} next={next} />
        <Comments />
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
