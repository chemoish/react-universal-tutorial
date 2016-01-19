// This will emulate a full ES6 environment.
import 'babel-polyfill';

import React from 'react';

import { render } from 'react-dom';

import Layout from './layout';

render(<Layout />, document.getElementById('root'));
