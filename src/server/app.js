/* eslint import/no-nodejs-modules: ["error", {"allow": ["path", "fs"]}] */
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import proxy from 'http-proxy-middleware';
import morgan from 'morgan';
import compression from 'compression';

export default (config) => {

  dotenv.config();
  const app = express();
  if (!config.isTest) {
    app.use(morgan('tiny'));
  }
  app.use(compression());
  app.use(cookieParser(config.secret));

  const load = (dir, ...args) => {
    fs.readdirSync(path.join(__dirname, dir)).forEach((file) => {
      const filePath = `${dir}/${file}`;
      console.info(`filepath: ${path.join(__dirname, filePath)}`)
      if (fs.statSync(path.join(__dirname, filePath)).isDirectory()) {
        load(filePath, ...args);
      } else if (file.endsWith('.js') && !file.endsWith('.test.js')) {
        const { default: handler } = require(`./${filePath}`);
        handler(...args);
      }
    });
  };

  app.use((req, res, next) => {
    res.append('X-Frame-Options', 'sameorigin');
    next();
  });

  load('api', app, config);

  // setup the proxy
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:4000',
      changeOrigin: true,
      logLevel: 'debug',
    }),
  );

  app.use(express.static(config.buildPath));

  app.use('*', (req, res) => {
    res.sendFile(path.resolve(`${config.buildPath}/index.html`));
  });

  return app;
};
