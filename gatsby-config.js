module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-demo",
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-gatsby-cloud"],
  flags: {
    DEV_SSR: true,
  }
};
