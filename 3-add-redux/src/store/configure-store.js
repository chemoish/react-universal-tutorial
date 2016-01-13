import thunk from 'redux-thunk';

import { applyMiddleware, createStore } from 'redux';

import reducer from '../reducer';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default function configureStore(initial_state) {
  const store = createStoreWithMiddleware(reducer, initial_state);

  if (module.hot) {
    module.hot.accept('../reducer', () => {
      const next_reducer = require('../reducer').default;

      store.replaceReducer(next_reducer);
    });
  }

  return store;
}
