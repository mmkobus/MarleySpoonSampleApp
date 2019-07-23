# Recipes App

## Prerequisites

* git
* nodejs >= 10.0
* yarn

## Getting Started

In the project directory, run:
* `npm install`

## ENV Variables

Please copy the contents of the `.env.default` file in the `src` directory and create a file called `.env` and fill in the variables from `.env.default` with the correct credentials.

## Running the dev server

* `npm run dev`
* Open http://localhost:8080 in your browser

## Using Cerebral

Cerebral.js is a declarative state and side effects management solution with a single state tree.
This project utilises Cerebral 5. If you haven't used v.5 yet, please take a look at the migration docs below, as there are several breaking changes in v.4 & v.5:
* https://cerebraljs.com/docs/migration/index.html
* https://cerebraljs.com/docs/migration/5_0.html

## Download Cerebral Debugger

Cerebral debugger will help you view the calls being made by the app, as well as the state tree.

* download debugger from https://github.com/cerebral/cerebral-debugger/releases (note: version 3.0.0 did not work on Mac (Mojave OS), version 2.5.1 seems to work just fine)
* connect debugger to 8589


## Proxy server

All requests to the Contentful API are made through the proxy server.
