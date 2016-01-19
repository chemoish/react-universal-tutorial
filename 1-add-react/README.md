# 1. Add React

This will get you setup with a client-side only React project with Hot Module Replacement (Not terribly useful).

## Features

- [Babel](https://babeljs.io/)
- [EditorConfig](http://editorconfig.org/)
- [ESLint](http://eslint.org/)
- [React](https://facebook.github.io/react/)
- [Webpack](https://webpack.github.io/)

## Getting Started

```sh
cd 1-add-react

npm install
npm start

# NOTE: Generate steps

# Run to identify commits made in this step
git log --reverse --pretty=format:"%C(green)%h\\ %C(yellow)[%ad]%C(red)%d\\ %C(reset)%s%C(blue)\\ [%cn]%C(reset)" --decorate --date=relative .

# Run to identify commits since start
git log -p --reverse --pretty=format:"%C(yellow)%h%C(red)%d\\ %C(reset)%s%C(blue)\\ [%cn]%C(reset)" --decorate --numstat .
```

## Summary

### 1.1 Setup .editorconfig

> EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.
>
> \- [EditorConfig](http://editorconfig.org/)

##### `./.editorconfig`

```
# http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

### 1.2 Install packages

```sh
npm install react react-dom -S

npm install babel-core babel-loader babel-polyfill -D
npm install babel-preset-es2015 babel-preset-react -D

npm install webpack webpack-dev-server -D

npm install babel-plugin-react-transform react-transform-hmr -D

npm install file-loader -D
```

### 1.3 Setup Webpack build

The first step in creating a React project is to get your code to bundle. Bundling is nothing more than compiling your modular JavaScript files down to one or more consumable files—traditionally served through `<script>` tag(s).

In addition to using a module bundler, we are going to be writing our code in ES6. ES6 provides many new features and syntactic sugars—so tasty.

*Module bundling isn't required, but it is highly recommended.*

---

First, we are going to create a `Layout` and a view called `Home`. We then are going to use `React.render` to compile the code into a `<div id="root">` element—so fancy.

##### `./src/client.js`

```js
// This will emulate a full ES6 environment.
import 'babel-polyfill';

import React from 'react';

import { render } from 'react-dom';

import Layout from './layout';

render(<Layout />, document.getElementById('root'));
```

##### `./src/layout/index.js`

```js
import React from 'react';

import Home from 'view/home';

export default function Layout(props) {
  return (
    <div>
      <header>Header</header>

      <main>
        <Home />
      </main>

      <footer>Footer</footer>
    </div>
  );
};
```

##### `./src/view/home.js`

```js
import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <h1>Home</h1>
    );
  }
}
```

---

Next we are going to define our `index.html` file that includes our `<div id="root">` element. Don't worry about the `bundle.js` just yet. It will be generated in our next step.

##### `./src/index.html`

```html
<!doctype html>
<html class="no-js" lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Add React</title>
  <meta name="description" content="Get started with React.">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="apple-touch-icon" href="apple-touch-icon.png">
  <!-- Place favicon.ico in the root directory -->
</head>

<body>
  <div id="root"></div>

  <script src="bundle.js"></script>
</body>

</html>
```

---

Now that we have our JavaScript and HTML setup, we need to bring them together with Webpack.

A `bundle.js` file will be created from our `client.js` file. The bundle will include all of the modules that our project is importing–including React and the like. Under the hood Webpack is transpiling the ES6 code into usable ES5 code.

`index.html`, however, will only being copied and not compiled.

Then each of these files are being put into a folder called `client`.

**NOTE:** For brevity I have excluded parts of the configuration.

##### `./webpack.config.client.js`

```js
module.exports = {
  entry: {
    bundle: [
      './src/client'
    ],

    index: './src/index.html'
  },

  output: {
    filename: '[name].js',
    path:     path.join(__dirname, 'client')
  },

  module: {
    loaders: [{
      // NOTE: https://github.com/webpack/file-loader
      loader: 'file?name=[name].[ext]'
    }],

    postLoaders: [{
      // NOTE: https://github.com/babel/babel-loader
      loader: 'babel-loader'
    }]
  }
};
```

---

Finally, we need to configure our `package.json` file to provide a user friendly command to execute all of our hard work.

##### `./package.json`

```json
"scripts": {
  "build": "node ./node_modules/webpack/bin/webpack --config webpack.config.client.js"
}
```

Now when we run `npm run build` our React app will be generated off of our configuration and placed in the `client` folder.

:tada:

### 1.4 Setup Webpack Dev Server

The next thing we need to do is setup our local development server. Webpack provides a development server that will allow us to leverage the configuration we used in the previous step.

We are pretty much just overriding the parts where development options need to be injected. But, after this our project will be setup with source maps and hot module replacement.

**NOTE:** For brevity I have excluded parts of the configuration.

##### `./webpack.config.client-start.js`

```js
var webpack = require('webpack');

var config = require('./webpack.config.client');

config.cache   = true;
config.debug   = true;
config.devtool = 'inline-source-map';

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
];

// …

config.devServer = {
  hot:    true,
  inline: true
};

module.exports = config;
```

---

Lastly, we need to configure our `package.json` to run our development server—hmm looks familiar.

##### `./package.json`

```json
"scripts": {
  "start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server --config webpack.config.client-start.js"
}
```

`npm start` will now run our project on `http://localhost:8080`.

:tada::tada:

### Install packages

```sh
npm install eslint eslint-loader eslint-plugin-react -D
```

### 1.5 Setup ESLint

> Code linting is a type of static analysis that is frequently used to find problematic patterns or code that doesn't adhere to certain style guidelines. There are code linters for most programming languages, and compilers sometimes incorporate linting into the compilation process.
>
> \- [ESLint](http://eslint.org/docs/about/)

Simply by modifying our Webpack configuration we can also enable linting on compile.

Hurray maintainability!

**NOTE:** For brevity I have excluded parts of the configuration.

##### `./.eslintrc`

```
root: true

plugins: [
  "react"
]

ecmaFeatures:
  jsx: true
  modules: true

env:
  browser: true
  node: true
  es6: true

rules:
  # …
```

##### `./webpack.config.client.js`

```js
module: {
  preLoaders: [{
    // NOTE: https://github.com/MoOx/eslint-loader
    exclude: /node_modules/,
    loader:  'eslint-loader',
    test:    /\.jsx?$/
  }]
}
```

---

Next up… Routing.
