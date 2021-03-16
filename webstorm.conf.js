import { resolve } from "path";

module.exports = {
  context: resolve("./"),
  resolve: {
    extensions: [".js", ".ts"],
    alias: {
      "@src": resolve("src")
    }
  }
};
