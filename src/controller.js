import page from 'page';
import HttpProvider from '@cerebral/http';
import fetchConfiguration from './main/sequences/fetchConfiguration';
import pageChange from './main/sequences/pageChange';
import routes from './routes/routes';

export default ({ app, get }) => {
  app.on('initialized', () => {
    app.runSequence(fetchConfiguration);

    page.start({
      hashbang: false,
    });
  });

  routes.forEach((route) => {
    page(`${route.path}`, ({ path, params }) => {
      app.runSequence(path, route.signal, params);
      app.runSequence('pageChange', pageChange);
    });
  });

  return {
    state: {
      page: 'RecipeListing',
      path: '/',
      data: {
        chefs: null,
        loading: false,
        recipeId: null,
        recipes: null,
      }
    },
    providers: {
      http: HttpProvider({}),
    },
  };
};
