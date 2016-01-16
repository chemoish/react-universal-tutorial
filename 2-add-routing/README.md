# 2. Add Routing

This will get you setup with a client-side only React and React Routing project with Hot Module Reloading (More useful).

## Features

- [Babel](https://babeljs.io/)
- [EditorConfig](http://editorconfig.org/)
- [ESLint](http://eslint.org/)
- [React](https://facebook.github.io/react/)
- [React Router](https://github.com/rackt/react-router)
- [Webpack](https://webpack.github.io/)

## Getting Started

```sh
cd 2-add-routing

npm install
npm start

# NOTE: Generate steps

# Run to identify commits made in this step
git log --reverse --pretty=format:"%C(green)%h\\ %C(yellow)[%ad]%C(red)%d\\ %C(reset)%s%C(blue)\\ [%cn]%C(reset)" --decorate --date=relative .

# Run to identify commits since port of 1-add-react (ce908df)
git log -p --reverse ce908df.. --pretty=format:"%C(yellow)%h%C(red)%d\\ %C(reset)%s%C(blue)\\ [%cn]%C(reset)" --decorate --numstat .
```

## Summary

### Install packages

```sh
npm install react-router -S
```

### Setup routing

…

- Create additional views: `./src/view/about.js`, `./src/view/setting.js`
- Create routes: `./src/route/index.js`
- Update React root to manage router: `./src/client.js`
- Update layout to manage views: `./src/layout/index.js`

### Update Webpack Dev Server

…

- Update Webpack Dev Server configuration: `historyApiFallback`
