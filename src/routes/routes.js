import {
  notFoundRouted,
  recipeRouted,
  recipeListing,
} from '../main/sequences/routed';

export default [
  { path: '/', signal: recipeListing },
  { path: '/recipe/:id', signal: recipeRouted },
  { path: '/404', signal: notFoundRouted },
  { path: '/*', signal: notFoundRouted },
];
