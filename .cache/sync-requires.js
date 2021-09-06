
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/vinctuyen/gatsby-demo/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/vinctuyen/gatsby-demo/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/vinctuyen/gatsby-demo/src/pages/index.js")),
  "component---src-pages-page-stories-jsx": preferDefault(require("/home/vinctuyen/gatsby-demo/src/pages/Page.stories.jsx"))
}

