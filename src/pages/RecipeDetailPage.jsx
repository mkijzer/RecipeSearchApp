import { Button } from "../components/ui/Button";

export const RecipeDetailPage = ({ selectedRecipe, onReturnToRecipes }) => {
  return (
    <div>
      <h1>{selectedRecipe.label}</h1>
      <p>When it works all the other details I want to show</p>
      <Button text="Return To Recipes" onClick={onReturnToRecipes}></Button>
    </div>
  );
};
