module.exports = {
  entry: "./app.js",
  output: {
    filename: "./dist/[name].bundle.js"
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
            presets: ["react", "env"],
            plugins: ["transform-object-rest-spread"],
            env: {
              production: {
                presets: ["minify"]
              }
            }
          }
        }
      }
    ]
  }
}
