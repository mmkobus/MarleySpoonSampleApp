/* eslint import/no-nodejs-modules: ["error", {"allow": ["path"]}] */
import path from 'path';

const env = process.env.NODE_ENV || 'development';
const reactEnv = process.env.REACT_APP_SETTING || 'development';

const config = {
  port: process.env.PORT || 8080,
  lang: 'en',
  env,
  reactEnv,
  isHttps: process.env.HTTPS ? process.env.HTTPS.toLowerCase() === 'true' : env === 'production',
  buildPath: path.join(__dirname, '../../build'),
};

export default config;
