import express from 'express';
import fs from 'fs';
import https from 'https';
import React from 'react';

import { match, RoutingContext } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

import configureStore from './store/configure-store';
import HtmlContainer from './layout/html';
import RouteContainer from './route';

let Html = HtmlContainer;
let Route = RouteContainer;

const app      = express();
const hostname = 'localhost';
const port     = 8080;

function getMarkup(store, render_props) {
  const uri = __PRODUCTION__ ? '' : 'https://localhost:8000';

  const component = (
    <Provider store={store} key="provider">
      <RoutingContext {...render_props} />
    </Provider>
  );

  return '<!doctype html>\n' + renderToString(
    <Html
      component = {component}
      script    = {`${uri}/client/index.js`}
      state     = {store.getState()}
    />
  );
}

app.use(function (req, res) {
  match({
    location: req.url,
    routes: Route
  }, function (error, redirection_location, render_props) {
    if (error) {
      console.error('Router error:', error);

      res.status(500).send(error.message);
    } else if (redirection_location) {
      res.redirect(302, redirectLocation.pathname + redirection_location.search);
    } else if (render_props) {
      const store = configureStore({});

      res.status(200).send(getMarkup(store, render_props));
    } else {
      res.status(400).send('Not Found');
    }
  });
});

// SEE: http://stackoverflow.com/questions/12871565/how-to-create-pem-files-for-https-web-server/12907165#12907165
https.createServer({
  key: fs.readFileSync('conf/key.pem'),
  cert: fs.readFileSync('conf/cert.pem')
}, app)
  .listen(port, function (error) {
    if (error) {
      console.error(error);
    } else {
      console.info(`==> 🌎  Open up https://${hostname}:${port}/ in your browser.`);
    }
  });

if (module.hot) {
  console.info('[HMR] Server is listening…');

  module.hot.accept('./layout/html', function () {
    console.info('[HMR] Patching Html');

    Html = require('./layout/html').default;
  });

  module.hot.accept('./route', function () {
    console.info('[HMR] Patching Route');

    Route = require('./route').default;
  });
}
