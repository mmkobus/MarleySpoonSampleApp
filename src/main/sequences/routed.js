import { state, props } from 'cerebral';
import { set } from 'cerebral/factories';

export const recipeRouted = [
  set(state`data.recipeId`, props`id`),
  set(state`page`, 'Recipe'),
  set(state`meta`, 'recipe'),
];

export const recipeListing = [
  set(state`page`, 'RecipesListing'),
  set(state`meta`, 'recipeListing'),
];

export const notFoundRouted = [
  set(state`page`, 'NotFound'),
  set(state`meta`, 'notFound'),
];
