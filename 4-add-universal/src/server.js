import express from 'express';
import fs from 'fs';
import https from 'https';
import React from 'react';

import { match, RoutingContext } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

import configureStore from './store/configure-store';
import Route from './route';

const app      = express();
const hostname = 'localhost';
const port     = 8080;

function getMarkup(store, render_props) {
  const uri = 'https://localhost:8000';

  const component = renderToString(
    <Provider store={store} key="provider">
      <RoutingContext {...render_props} />
    </Provider>
  );

  return `
    <!doctype html>
    <html class="no-js" lang="en">

    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Add Universal</title>
      <meta name="description" content="Get started with React, React Router, Redux, and Universal.">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <link rel="apple-touch-icon" href="apple-touch-icon.png">
      <!-- Place favicon.ico in the root directory -->
    </head>

    <body>
      <div id="root">${component}</div>

      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}
      </script>
      <script src="${uri}/client/index.js"></script>
    </body>

    </html>
  `;
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
