# 4. Add Universal

This will get you setup with a universal React, React Routing, and Redux project with Hot Module Replacement (Useful).

## Features

- [Babel](https://babeljs.io/)
- [EditorConfig](http://editorconfig.org/)
- [ESLint](http://eslint.org/)
- [Express](http://expressjs.com/)
- [React](https://facebook.github.io/react/)
- [React Router](https://github.com/rackt/react-router)
- [Redux](http://redux.js.org/)
- [Webpack](https://webpack.github.io/)

## Getting Started

```sh
cd 4-add-universal

npm install
npm start

# NOTE: Generate steps

# Run to identify commits made in this step
git log --reverse --pretty=format:"%C(green)%h\\ %C(yellow)[%ad]%C(red)%d\\ %C(reset)%s%C(blue)\\ [%cn]%C(reset)" --decorate --date=relative .

# Run to identify commits since port of 3-add-redux (6e7d1e6)
git log -p --reverse 6e7d1e6.. --pretty=format:"%C(yellow)%h%C(red)%d\\ %C(reset)%s%C(blue)\\ [%cn]%C(reset)" --decorate --numstat .
```

## Summary

### Install packages

```sh
npm install express -S

npm install concurrently -D
npm install wait-run -D
```

### Create Webpack Server build

…

- Create Webpack configuration: `./webpack.config.server.js`
- Create server: `./src/server.js`
- Reconfigure client Webpack configuration: `./webpack.config.client.js`
- Configure `package.json`

### Create Webpack Server

…

- Create Webpack configuration: `./webpack.config.server-start.js`
- Reconfigure client Webpack Dev Server configuration: `./webpack.config.client-start.js`
- Configure `package.json`

### Install packages

```sh
npm install https -D
```

### Setup Https for Express

…

- Create SSL information: `./conf/cert.pem`, `./conf/key.pem`
- Reconfigure client Webpack Dev Server configuration: `./webpack.config.client-start.js`
- Update server: `./src/server.js`

### Setup Hot Module Replacement for routing on server

…

- Update server: `./src/server.js`

### Setup Hot Module Replacement for html on server

…

- Create html: `./src/layout/html.js`
- Update server: `./src/server.js`

### Enhance development by leveraging flags

…

- Configure Webpack configuration: `./webpack.config.client-start.js`, `./webpack.config.client.js`, `./webpack.config.server-start.js`, `./webpack.config.server.js`
