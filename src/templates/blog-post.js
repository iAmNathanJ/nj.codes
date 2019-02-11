import React, { useLayoutEffect, useRef } from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/Bio';
import ArticleMeta from '../components/ArticleMeta';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import ArticleNav from '../components/ArticleNav';
import Comments from '../components/Comments';
import { article as articleCSS, code, contain } from '../styles';
import { addSnippetHeaders } from '../utils';

function BlogPostTemplate({ data, location, pageContext }) {
  const article = useRef(null);
  const siteTitle = data.site.siteMetadata.title;
  const post = data.markdownRemark;
  const { frontmatter: meta } = post;
  const { revisions, fileRelativePath, previous, next } = pageContext;

  useLayoutEffect(() => {
    addSnippetHeaders(article.current);
  });

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={`${meta.title}${meta.subtitle ? ` - ${meta.subtitle}` : ''}`}
        description={post.excerpt}
        keywords={meta.tags || []}
      />
      <article css={contain}>
        <ArticleMeta
          meta={meta}
          revisions={revisions}
          file={fileRelativePath}
        />
        <div
          ref={article}
          css={[articleCSS, code]}
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
