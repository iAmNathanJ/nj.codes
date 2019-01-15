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
                created
                revised
                sha1
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
          created: post.node.fields.created,
          revised: post.node.fields.revised,
          sha1: post.node.fields.sha1,
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
    const { absolutePath, birthtime, mtime } = getNode(node.parent);
    const sha1 = shell.exec(`git log --pretty=format:'%h' -- ${absolutePath} | head -1`).stdout;
    const slug = createFilePath({ node, getNode });
    createNodeField({ name: `slug`, node, value: slug });
    createNodeField({ name: `created`, node, value: birthtime });
    createNodeField({ name: `revised`, node, value: mtime });
    createNodeField({ name: `sha1`, node, value: sha1 });
  }
}
