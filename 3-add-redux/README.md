# 3. Add Redux

This will get you setup with a client-side only React, React Routing, and Redux project with Hot Module Reloading (More useful).

## Features

- [Babel](https://babeljs.io/)
- [EditorConfig](http://editorconfig.org/)
- [ESLint](http://eslint.org/)
- [React](https://facebook.github.io/react/)
- [React Router](https://github.com/rackt/react-router)
- [Redux](http://redux.js.org/)
- [Webpack](https://webpack.github.io/)

## Getting Started

```sh
cd 3-add-redux

npm install
npm start

# NOTE: Generate steps

# Run to identify commits made in this step
git log --reverse --pretty=format:"%C(green)%h\\ %C(yellow)[%ad]%C(red)%d\\ %C(reset)%s%C(blue)\\ [%cn]%C(reset)" --decorate --date=relative .

# Run to identify commits since port of 2-add-routing (f30525e)
git log -p --reverse f30525e.. --pretty=format:"%C(yellow)%h%C(red)%d\\ %C(reset)%s%C(blue)\\ [%cn]%C(reset)" --decorate --numstat .
```

## Summary

### Install packages

```sh
npm install redux redux-simple-router redux-thunk -S
```

### Setup Redux

…

- Create root reducer: `./src/reducer/index.js`
- Create and configure store: `./src/store/configure-store.js`
- Update React root to manage store: `./src/client.js`
- Create counter action and reducer: `./src/component/counter/action/counter-action.js`, `./src/component/counter/reducer/counter-reducer.js`
- Create counter component: `./src/component/counter/index.js`
- Update root reducer to add counter reducer: `./src/reducer/index.js`

### Setup Redux Routing

…

- Update React root to sync redux to the React Router: `./src/client.js`
- Update root reducer to include the route reducer: `./src/route/index.js`

### Update for Redux testability

…

- Update components such that they export twice

```js
// from
export default class Home extends Component {}

// to
export class Home extends Component {}
export default connect(…)(Home);
```
