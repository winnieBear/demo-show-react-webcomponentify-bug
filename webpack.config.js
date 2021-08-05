var path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const OUTPUT_DIR = path.resolve(__dirname, "dist");

module.exports = {
  // entry: "./src/index.js",
  entry: {
    bundle: ['./src/index.js'],
  },

  mode: "development",
  output: {
    path: OUTPUT_DIR,
    filename:  './js/[name].js',
  },
  devServer: {
    contentBase: OUTPUT_DIR,
    compress: true,
    port: 9000
  },
  devtool: "source-map",
  resolve: {
    alias: {
     
    }
  },
  optimization: {
    minimize: false,
    splitChunks: {
      minSize: 1,
      minChunks: 2,
      cacheGroups: {
        commons: {
          name: 'vendors',
          chunks: 'all',
        }
      }
    }
  },
 
  plugins: [new CopyWebpackPlugin([{ from: "assets", to: OUTPUT_DIR }])],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
