module.exports = {
  watchOptions: {
    ignored: [".vscode", "node_modules", "*/__pycache__"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
