const path = require('path');

module.exports = {
  entry: ['./src/build/js/app.js',],
  output: {
    filename: 'app.js',
    path: path.resolve("src/public/js"),
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
         // Creates `style` nodes from JS strings
         "style-loader",
         // Translates CSS into CommonJS
         "css-loader",
         // Compiles Sass to CSS
         "sass-loader",
        ],
      },
    ],
  },
  mode: 'development',
};