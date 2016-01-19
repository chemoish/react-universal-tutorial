// This will emulate a full ES6 environment.
import 'babel-polyfill';

import React from 'react';

import { createHistory } from 'history';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { syncReduxAndRouter } from 'redux-simple-router';

import configureStore from './store/configure-store';
import Route from './route';

const history = createHistory();
const store = configureStore();

syncReduxAndRouter(history, store);

const component = (
  <Provider store={store} key="provider">
    <Router history={history}>
      {Route}
    </Router>
  </Provider>
);

render(component, document.getElementById('root'));
