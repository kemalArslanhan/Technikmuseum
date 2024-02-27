const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: "markdown" });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            continent
            country
            image
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.log(result.errors);
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/templates/museum-detail.js`),
      context: {
        slug: node.frontmatter.slug,
        image: node.frontmatter.image, // Resim bilgisini context'e ekleyin
        country: node.frontmatter.country // Ülkeyi de context olarak ekleyebilirsiniz
      },
    });
  });
};