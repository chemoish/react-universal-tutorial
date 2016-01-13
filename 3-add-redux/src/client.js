import 'babel-polyfill';

import React from 'react';

import { createHistory } from 'history';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router } from 'react-router';

import configureStore from './store/configure-store';
import routes from './route';

const history = createHistory();
const store = configureStore();

const component = (
  <Provider store={store} key="provider">
      <Router history={history}>
        {routes}
      </Router>
  </Provider>
);

render(component, document.getElementById('root'));
