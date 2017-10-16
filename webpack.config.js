module.exports = {
  entry: "./root.js",
  output: {
    filename: "./dist/bundle.js"
  },
  devtool: "eval-source-map",
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react", "env"]
          }
        }
      }
    ]
  }
}
