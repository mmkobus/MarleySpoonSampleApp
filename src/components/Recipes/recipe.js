import React from 'react';
import { connect } from '@cerebral/react';
import { state } from 'cerebral';
import { richTextFromMarkdown } from '@contentful/rich-text-from-markdown';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import BackButton from '../BackButton';
import { ReactComponent as LoadingIcon } from '../../svg/loading.svg';

const dependencies = {
  loading: state`data.loading`,
  recipeId: state`data.recipeId`,
  recipes: state`data.recipes`,
};

class RecipeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
    };

    this.startMDParse = this.startMDParse.bind(this);
  }

  componentDidMount() {
    this.setState({
      result: null
    })
  }

  componentDidUpdate() {
    if (this.props.recipes && this.state.result === null && this.props.recipeId) {

      const recipe = this.props.recipes && this.props.recipes.find((item) => {
        return item.sys.id === this.props.recipeId;
      });
      this.startMDParse(recipe.fields);
    }
  }

  startMDParse(recipe) {
    richTextFromMarkdown(recipe.description).then((result) => {
      this.setState({
        result
      });
    });
  }

  render() {
    const { loading, recipeId, recipes } = this.props;
    const { result } = this.state;

    let recipe = recipes && recipes.find((item) => {
      return item.sys.id === recipeId;
    });

    recipe = recipe && recipe.fields;

    if (recipes && !recipe) {
      window.location.href = '/404';
    }

    const tags = (recipe && recipe.tags) && recipe.tags.map((t) => { return t.fields.name; }).join(', ');

    return (
      <div className="recipes">
        <BackButton />
        {
          loading ? (
            <div className="loading-indicator">
              <LoadingIcon />
            </div>
          ) : (
            <>
              {recipe && (
                <div className="item">
                  { recipe.photo.fields.file.url &&
                    <div className="item-hero">
                      <img src={recipe.photo.fields.file.url} alt={recipe.photo.fields.title} />
                    </div>
                  }
                  <h1 className="item-title">{recipe.title}</h1>
                  {
                    recipe.chef &&
                    <div className="item-chef"><p>By { recipe.chef.fields.name }</p></div>
                  }
                  {recipe.calories && <p className="item-calories">Calories: { recipe.calories }</p>}
                  {result && <div className="item-desc">{documentToReactComponents(result)}</div>}
                  {tags &&
                    (
                      <div className="item-tags">
                        <p><strong>Tagged</strong>: <span>{tags}</span></p>
                      </div>
                    )
                  }
                </div>
              )}
            </>
          )
        }
      </div>
    );
  }
}

export default connect(
  dependencies,
  RecipeView
);
