# React Universal Tutorial

This tutorial is designed to land you in a familiar place<sup>1.</sup>—but also to get you introduced to a bunch of new front-end technologies. I appreciate the hundreds<sup>2.</sup> of starter kits that came before, and all of the hard work that went into the bleeds, but I wanted to understand why.

The overarching goal of this repository is to provide some basic, digestible, leverage—so you can continue your research of learning all the things—or do whatever you want.

## Goals

- Keep it simple
- Understand design decisions
- Learn

## Features

- [Babel](https://babeljs.io/)
- [ESLint](http://eslint.org/)
- [React](https://facebook.github.io/react/)
- [React Router](https://github.com/rackt/react-router)
- [Redux](http://redux.js.org/)
- [Webpack](https://webpack.github.io/)

## Getting Started

```sh
git clone https://github.com/chemoish/react-universal-tutorial.git
cd react-universal-tutorial

cd …

npm install
npm start
```

## Summary

Here is a summary of starter kits and documentation I went through when deciphering this puzzle.

**NOTE:** May become instantaneously out of date.<sup>3.</sup>

### Webpack + server (koa) + react-router

https://github.com/RickWong/react-isomorphic-starterkit

- Yes isomorphic
- Yes HMR server

### Webpack middleware + server (koa) + react-router + redux + redux-simple-router

https://github.com/davezuko/react-redux-starter-kit

- Testing
- No isomorphic

### Webpack middleware + server (express) + react-router + redux + redux-router

https://github.com/erikras/react-redux-universal-hot-example

- Testing
- Yes isomorphic
- Yes HMR server (Not sure how—webpack-isomorphic-tools?)

### Webpack middleware + server (express) + react-router + redux + redux-simple-router

https://github.com/jlongster/react-redux-universal-hot-example

- Testing
- Yes isomorphic
- Yes HMR server (Not sure how—webpack-isomorphic-tools?)
- Fork of erikras

### Webpack middleware + server (express) + redux

https://github.com/rackt/redux/tree/master/examples/universal

- Yes isomorphic
- No HMR server

### Webpack + server (express)

http://jlongster.com/Backend-Apps-with-Webpack--Part-I
http://jlongster.com/Backend-Apps-with-Webpack--Part-II
http://jlongster.com/Backend-Apps-with-Webpack--Part-III

https://github.com/jlongster/backend-with-webpack

### Webpack + HMR server (fake server) [For learning only—if using HMR React]

https://github.com/webpack/hot-node-example

### Webpack + HMR [For Learning]

https://github.com/webpack/docs/wiki/hot-module-replacement

---

### Express

#### Https

https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener

#### SSL certification and private key

http://stackoverflow.com/a/12907165/1438446

## Troubleshooting

…

---

1. Instead of your mind imploding—http://i.imgur.com/sg017lt.gif
1. Some ludicrous number—http://i.imgur.com/RCsyMvx.gif
1. http://blog.codinghorror.com/everything-you-know-will-be-obsolete-in-five-years/
