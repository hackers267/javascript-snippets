const path = require("path");

module.exports = {
  context: path.resolve("./"),
  resolve: {
    extensions: [".js"],
    alias: {
      "@": path.resolve("src")
    }
  }
};
