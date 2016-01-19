// This will emulate a full ES6 environment.
import 'babel-polyfill';

import React from 'react';

import { createHistory } from 'history';
import { render } from 'react-dom';
import { Router } from 'react-router';

import Route from './route';

const history = createHistory();

const component = (
  <Router history={history}>
    {Route}
  </Router>
);

render(component, document.getElementById('root'));
