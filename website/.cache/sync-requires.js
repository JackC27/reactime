const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jackcrish/Documents/Programming/Codesmith - 37/MAIN/Projects/ITERATION-TEAM4/reactime/website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jackcrish/Documents/Programming/Codesmith - 37/MAIN/Projects/ITERATION-TEAM4/reactime/website/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jackcrish/Documents/Programming/Codesmith - 37/MAIN/Projects/ITERATION-TEAM4/reactime/website/src/pages/index.js")))
}

