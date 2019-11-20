const path = require("path")

const config = {
  ...require("../lingui.config"),
  srcPathDirs: [path.resolve(__dirname, "src")],
}

module.exports = config
