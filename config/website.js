const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Theo Archer - Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Theo', // Alternative Site title for SEO
  siteTitleShort: 'Theo', // short_name for manifest
  siteHeadline: 'Theo Archer Portfolio', // Headline for schema.org JSONLD
  siteUrl: 'https://theoarcher.me', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Portfolio of projects that Theo Archer has worked on.',
  author: 'Theo Archer', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@theo_tatton', // Twitter Username
  ogSiteName: 'theo', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-137728228-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.blue,
  backgroundColor: tailwind.colors.blue,
}
