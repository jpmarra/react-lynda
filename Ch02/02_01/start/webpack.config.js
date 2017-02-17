var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "/Users/student/Downloads/Ex_Files_React_EssT/Ch02/02_01/start/dist",
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
    inline: true,
    contentBase: "./dist",
    port: 3000
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'babel-loader?presets[]=latest,presets[]=stage-0,presets[]=react']
    }]
    // loaders: [
    //   {
    //     test: /\.js$/,
    //     exclude: /(node_modules)/,
    //     loader: ["babel-loader", ],
    //     query: {
    //       presets: ["latest", "stage-0", "react"]
    //     }
    //   }
    // ]
  }
}
