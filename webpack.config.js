const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {  // this is where the app starts to bundle 
    'src': path.resolve(__dirname, 'front/src', 'index.js')
  },
  output: { // this is where webpack bundles all files into 1 unique file
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: { // bundle will find all module (js files, node_modules packages), css that connects to entry point
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }, 
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'django-back/common/templates/common', 'index.html')
    }),
  ],
}