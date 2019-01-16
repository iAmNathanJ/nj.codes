const path = require(`path`);
const shell = require('shelljs');
const { createFilePath } = require(`gatsby-source-filesystem`);

shell.config.silent = true;

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                fileRelativePath
                revisions {
                  sha1
                  date
                  author
                }
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          fileRelativePath: post.node.fields.fileRelativePath,
          revisions: post.node.fields.revisions,
          previous,
          next
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    const { birthtime, absolutePath, relativePath } = getNode(node.parent);
    const log = shell.exec(`git log --pretty=format:'%h___%aI___%an' -- ${absolutePath}`).stdout;
    const history = log.split('\n');
    const revisions = history.reduce((revs, entry) => {
      const [ sha1, date, author ] = entry.split('___');
      return [
        ...revs,
        {
          sha1: sha1 || 'xxxxxxx',
          date: date || birthtime,
          author
        }
      ];
    }, []);

    createNodeField({ name: `slug`, node, value: slug });
    createNodeField({ name: `revisions`, node, value: revisions });
    createNodeField({ name: `fileRelativePath`, node, value: relativePath });
  }
}
