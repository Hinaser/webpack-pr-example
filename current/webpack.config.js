const path = require("path");

module.exports = [
  {
    mode: "development",
    entry: {
      moduleA: "./src/moduleA.js",
      moduleB: "./src/moduleB.js",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      library: ["MyLibrary"],
      libraryTarget: "umd",
      globalObject: "this",
    },
  },
  {
    mode: "development",
    entry: {
      moduleA: "./src/moduleA.js",
      moduleB: "./src/moduleB.js",
    },
    output: {
      path: path.resolve(__dirname, "..", "docs", "current"),
      filename: "[name].js",
      library: ["MyLibrary"],
      libraryTarget: "umd",
      globalObject: "this",
    },
  }
];
