const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://nj.codes',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;

const DEV = NODE_ENV === 'development';
const PROD = NETLIFY_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: `nj.codes/`,
    author: `Nate Jacobs`,
    description: `A blog about web development.`,
    keywords: [`javascript`, `react`, `css`, `web`, `programming`, `design`],
    siteUrl: PROD ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL,
    social: {
      twitter: `nathanAlan`,
      github: `iAmNathanJ`,
      codepen: `iAmNathanJ`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content${DEV ? '/drafts' : ''}`,
        name: `blog`,
        ignore: DEV ? [] : [`**`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://nj.codes`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#282a36`,
        theme_color: `#de7373`,
        display: `minimal-ui`,
        icon: `content/assets/nj.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
  ].concat(PROD ? [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-61497510-2`,
      },
    },
  ] : [])
  .concat([`gatsby-plugin-netlify`]), // this needs to come last
}
