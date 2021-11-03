module.exports = {
  siteMetadata: {
    siteTitle: `React-Hooks Cheatsheet`,
    defaultTitle: `React-Hooks Cheatsheet`,
    siteTitleShort: `React-Hooks Cheatsheet`,
    siteDescription: `A custom made cheatsheet with a handful of react hooks`,
    siteUrl: `https://gatsby-starter-rocketdocs.vercel.app`,
    siteAuthor: `@uvacoder`,
    siteImage: `/logo.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/uvacoder/gatsby-starter-docs`,
        baseDir: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `React-Hooks Cheatsheet`,
        short_name: `React-Hooks Cheatsheet`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://gatsby-starter-rocketdocs.vercel.app`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
