import 'babel-polyfill';

import React from 'react';

import { createHistory } from 'history';
import { render } from 'react-dom';
import { Router } from 'react-router';

import routes from './route';

const history = createHistory();

const component = (
  <Router history={history}>
    {routes}
  </Router>
);

render(component, document.getElementById('root'));
