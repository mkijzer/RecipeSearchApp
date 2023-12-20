import { RecipeItem } from "./RecipeItem";
export const RecipeList = ({ matchedRecipes, onSelectRecipe }) => {
  const handleRecipeClick = (recipe) => {
    onSelectRecipe(recipe);
  };

  return (
    <div>
      {matchedRecipes.map((dish) => (
        <RecipeItem
          key={dish.recipe.label}
          label={dish.recipe.label}
          image={dish.recipe.image}
          dishType={dish.recipe.dishType}
          dietLabels={dish.recipe.dietLabels}
          cautions={dish.recipe.cautions}
          onClick={() => handleRecipeClick(dish.recipe)}
        />
      ))}
    </div>
  );
};
