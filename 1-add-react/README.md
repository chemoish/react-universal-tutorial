# 1. Add React

This will get you setup with a client-side only React project with Hot Module Reloading (Not terribly useful).

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

### Setup .editorconfig

…

- Create `./.editorconfig`

### Install packages

```sh
npm install react react-dom -S

npm install babel-core babel-loader babel-polyfill -D
npm install babel-preset-es2015 babel-preset-react -D

npm install webpack webpack-dev-server -D

npm install babel-plugin-react-transform react-transform-hmr -D

npm install file-loader -D
```

### Setup Webpack build

…

- Create Webpack configuration: `./webpack.config.client.js`
- Create `./src/index.html`
- Create React root: `./src/client.js`
- Create layout: `./src/layout/index.js`
- Create view: `./src/view/home.js`
- Configure `package.json`

### Setup Webpack Dev Server

…

- Create Webpack Dev Server configuration: `./webpack.config.client-start.js`
- Configure `package.json`

### Install packages

```sh
npm install eslint eslint-loader eslint-plugin-react -D
```

### Setup ESLint

…

- Create ESLint configuration: `./.eslintrc`
- Configure `./webpack.config.client.js`
