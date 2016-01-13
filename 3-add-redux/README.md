# 3. Add Redux

This will get you setup with a client-side only React, React Routing, and Redux project with Hot Module Reloading (More useful).

## Features

- Babel
- ESLint
- React
- React Router
- Redux
- Webpack

## Getting Started

```sh
npm install
npm start
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
