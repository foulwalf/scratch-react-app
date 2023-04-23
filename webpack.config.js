module.exports = {
  module: {
    rules: [
      {
        entry: "./src/index.js",
        output: "./dist/index-webpacked.js",
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
