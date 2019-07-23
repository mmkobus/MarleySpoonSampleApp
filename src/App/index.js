import React from 'react';
import { state } from 'cerebral';
import { connect } from '@cerebral/react';
import Helmet from 'react-helmet';
import i18n from '../resources/i18n/i18n';
import NotFound from '../components/NotFound';
import Recipe from '../components/Recipes/recipe';
import RecipesListing from '../components/Recipes';
import ToastMsgModule from '../components/ToastMsgModule';

const components = {
  NotFound,
  Recipe,
  RecipesListing,
};

const dependencies = {
  config: state`configuration`,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getMetaData = this.getMetaData.bind(this);
  }

  getMetaData(page, meta) {
    const { get } = this.props;
    let metaData;

    if (page === 'Recipe') {
      const recipeId = get(state`data.recipeId`);
      const recipes = get(state`data.recipes`);
      const recipe = recipes && recipes.find((item) => {
        return item.sys.id === recipeId;
      });

      if (recipe) {
        metaData = {
          title: recipe.fields.title,
          description: recipe.fields.description,
        };
      }

    } else {
      metaData = {
        title: i18n.t(`meta.${meta}.title`),
        description: i18n.t(`meta.${meta}.description`),
      };
    }

    return metaData;
  }

  render() {
    const { get } = this.props;
    const page = get(state`page`);
    const meta = get(state`meta`);
    const metaData = page && this.getMetaData(page, meta);

    const Component = components[page];

    return (
      <div>
        {metaData && <Helmet
          title={metaData.title ? `${metaData.title}` : 'Recipes App'}
          meta={[{ name: 'description', content: metaData.description }]}
        />}

        <div className="site-content">
          <Component />
          <ToastMsgModule />
        </div>
      </div>
    );
  }
}

export default connect(
  dependencies,
  App,
);
