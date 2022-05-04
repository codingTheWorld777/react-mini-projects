# Configuration of React project from scratch with Webpack and Babel
The following section describes how to config a **React** project from scratch without using [create-react-app](https://create-react-app.dev/)

## Content
- [Introduction](#introduction)
- [Getting started](#getting-started)
  - [Setting up the basic configuration](#setting-up-the-basic-configuration)
  - [What is `webpack`?](#what-is-webpack)
    - [Setup `webpack`](#setup-webpack)
  - [About `babel`](#about-babel)
    - [Setup `babel`](#setup-babel)
  - [Setup `webpack` with `HTML`](#setup-webpack-with-html)
    - [Setup `HTML` to `webpack`](#setup-html-to-webpack)
    - [Extra useful configs](#extra-useful-configs)
  - [Define script to build and run react app with `webpack`](#define-script-to-build-and-run-react-app-with-webpack)
- [Conclusion](#conclusion)
- [Bibliography](#bibliography)

## Introduction
At the very first glance of beginners in `react` development, I have learned about how to develop an `React` application with a tools named `create-react-app`. This tool help me to build a full necessary infrastructure for the `React` app, so that I just need to start coding and playing around with `React` components without understanding why when we write components and put them in the right place in the framework build by `create-react-app`, the web page begins to launche in browser. For this reason, I have been learning a bit about how the `react` app is built from scratch and after a bit of reading and practicing, I've decided to write this articles to summarize what I've learned. 

## Getting started
### Setting up the basic configuration
Very first we are going to do some stuffs to initialize our setup with `npm`
Create a folder and go into it, then run below commands in terminal:
```
# Here we are using ***Node v 14*** and ***NPM 6***
# Let's feel free to use yarn instead of npm
# with -y we are getting all default value for our project

> npm init -y
```

### What is `webpack`?
From [Webpack](https://webpack.js.org/concepts/) homepage, it is said that: 
> At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.

So basically, `webpack` is a tools, a module bundler that help us to bundle all files in our JS project to a unique file in the development environment, which will make our app faster when it is launched in browser.

From Webpack 4, we don't need to do the configuration phase (it is automatically), but we always need to config out `webpack` to make our app works as we expect.

#### Setup `webpack`
1) Install `Webpack`:
- In this lecture, I've used:
  - `webpack@5.72.0`: webpack core
  - `webpack-cli@4.9.2`: used to run webpack commands such as `webpack serve`,...
  - `webpack-dev-server@4.8.1`: used to run webpack project (in our case `react` app) locally
```
> npm i webpack@5.72.0 webpack-cli@4.9.2 webpack-dev-server@4.8.1 --save-dev
```
2) Add a configuration file to the `root` folder
- In terminal, enter:
```
> touch webpack.config.js
```
3) Define entry point and output for webpack
- We need to tell webpack where to start bundling the JS files, and we can do it by specifying an `entry` property in `webpack.config.js`, and the output of this 'bundle' (just simply a JS file that contains the 'bundle' of all files from the `entry` point):
```js
const path = require('path')
module.exports = {
  mode: 'development',  // we are in dev-mode
  entry: {  // this is where the app starts to bundle 
    'src': path.resolve(__dirname, 'front/src', 'index.js')
  },
  output: { // this is where webpack bundles all files into 1 unique file
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
}
```

### About `babel`
As we known, JS has been upgraded its functionality by time, from first basic language in ***1995*** to `ECMAScript 1` in ***1997*** and become popular in version `ES5` and `ES6+` in nowadays. But our browser just understands some old versions of JS, it doesn't understand new syntaxes and new functionalities in the new releases. Therefore, we need to transpile our "new language" of JS to the "old one" that browser could understand. And this is where `babel` comes in action.

From [babel]() homepage:
> Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

#### Setup `babel`
1) Install `babel`:
- In this lecture, I've used: 
  - [`@babel/core@7.17.10`](https://babeljs.io/docs/en/babel-core): core transpiler
  - [`babel-loader`](https://webpack.js.org/loaders/babel-loader/): a webpack loader that will help `webpack` to use `babel` transpiler
```
> npm i @babel/core@7.17.10 babel-loader@8.2.5 --save-dev
```
2) Config `webpack` to use `babel`:
We now need to tell `webpack` to transpile JS files using `babel` before bundling them. So we need to define `rules` property for the module bundling. In `webpack.config.js`:
```js
const path = require('path')

module.exports = {
  ...
  module: { 
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",  // here where we apply loader
        }
      },
  },
  ...
}
```
Here we tell `webpack` to use `babel-loader` to transpile files that end with `.js` and `.jsx`.
3) Define rules for `babel`:
- `Babel` is a transpiler so we need to tell it what to transpile by using `presets`.
- I've used: 
  - [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env): used for transpiling `ES2015+` syntax
  - [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react): used for transpiling `react` code
```
> npm i @babel/preset-env@7.17.10 @babel/preset-react@7.16.7 --save-dev
```
- Let's use them in `webpack.config.js`:
```js
const path = require('path')

module.exports = {
  ...
  module: { 
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { 
            presets: ["@babel/preset-env", "@babel/preset-react"] // here where we apply our presets
          }
        }
      },
  },
  ...
}
```

### Setup `webpack` with `HTML`
Naturally, `React` is a `single page application` that basically just updates `DOM` elements without loading entire page. Therefore, we need to create a page `HTML` in order to push our `React` component into this page.

#### Setup `HTML` to `webpack`
1) Install 
- `Webpack` by default doesn not know how to deal with `HTML` so we need some help plugins from other sources. `Webpack` supports plugins and we are going to use [`html-webpack-plugin`](https://www.npmjs.com/package/html-webpack-plugin)
``` 
> npm i html-webpack-plugin@5.5.0 --save-dev
```
2) Include this plugin in our `webpack.config.js`:
```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  ...
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'django-back/common/templates/common', 'index.html')
    }),
  ],
  ...
}
```
3) Let's create an `index.html` in `root/django-back/common/templates/common` like default `index.html` in `create-react-app`

#### Extra useful configs
- `Babel` config for `CSS/SASS` files
```
> npm i style-loader@3.3.1 css-loader@6.7.1 sass-loader --save-dev
```
- `Babel` config for images
```
> npm i file-loader --save-dev
```
- `Babel` config for `SVG` as react component
```
> npm i @svgr/webpack --save-dev
```
- Config in `webpack.config.js`
```js
// fule module configs
module.exports = {
  ...
  module: { 
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
  ...
}
```

### Define script to build and run react app with `webpack`
Now that we have created the config file it is time to actually build and run the app. To do that we need to add some scripts to `package.json`.
```json
{
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack --mode=development", // run webpack in mode development
    "start": "webpack serve --open" // this will use the webpack dev server and run the app locally (webpack build will run automatically), --open means open the app automatically in browser
  },
  ...
}
```
After that, go to terminal at the root folder and run `npm start` (or `npm `)

## Conclusion
This is just my personal research of `webpack` and `babel` and how to apply them in `react` app. If you have some comments on this article, please contact me via my personal email: **khainguyenhuu121@gmail.com**, or directly via **github**.

## Bibliography
- [Webpack + React Optimised from scratch](https://medium.com/nerd-for-tech/webpack-react-optimised-from-scratch-da8f75024ba4)
- [Setup react with webpack and babel](https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9#8b7c)