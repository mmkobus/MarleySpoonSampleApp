import React from 'react';
import { connect } from '@cerebral/react';
import { state } from 'cerebral';
import { ReactComponent as LoadingIcon } from '../../svg/loading.svg';

const dependencies = {
  loading: state`data.loading`,
  recipes: state`data.recipes`,
};

class Recipes extends React.Component {
  render() {
    const { loading, recipes } = this.props;

    return (
      <div className="recipes">
        <h2 className="recipes-title">Recipes</h2>
        <div className="recipe-listing">
          {
              loading ? (
                <div className="loading-indicator">
                  <LoadingIcon />
                </div>
              ) : (
                <>
                  {recipes && recipes.map((recipe, i) =>
                    (
                      <a className="tile" key={i} href={`/recipe/${recipe.sys.id}`}>
                        <div className="tile-card">
                          {recipe.fields.photo.fields.file.url &&
                            <div className="tile-img">
                              <img src={recipe.fields.photo.fields.file.url} alt={recipe.fields.photo.fields.title} />
                            </div>
                          }

                          {recipe.fields.title && <h2 className="tile-title">{recipe.fields.title}</h2>}
                        </div>
                      </a>
                    )
                  )}
                </>
              )
          }
        </div>
      </div>
    );
  }
}

export default connect(
  dependencies,
  Recipes
);
