const newsletterFeed = require(`./src/utils/newsletterFeed`)

module.exports = (options) => {
  const { feed = true, feedTitle = `Minimal Blog - @lekoarts/gatsby-theme-minimal-blog` } = options

  return {
    siteMetadata: {
      siteTitle: `Jiansing's Blog`,
      siteTitleAlt: `Jiansing's Blog - 念念不忘，必有回响`,
      siteHeadline: `Jiansing's Blog - 念念不忘，必有回响`,
      siteUrl: `https://blog.ofo.moe`,
      siteDescription: `欢迎来到我的小站呀，很高兴遇见你！🤝`,
      siteLanguage: `zh-Hans`,
      siteImage: `/banner.jpg`,
      author: `@iwyifan`,
    },
    plugins: [
      {
        resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
        options,
      },
      feed && {
        resolve: `gatsby-plugin-feed`,
        options: newsletterFeed(feedTitle),
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-theme-ui`,
    ],
  }
}
