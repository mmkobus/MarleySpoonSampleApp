/* eslint import/no-nodejs-modules: ["error", {"allow": ["http"]}] */
import http from 'http';
import App from './app';
import config from './config';

// start the server
http.createServer(App(config)).listen(config.port, () => {
  console.info(`==> Recipes App Listening on port ${config.port} in ${config.env}`);
});
