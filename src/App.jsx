import React from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeDetailPage } from "./pages/RecipeDetailPage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = React.useState(null);

  const handleReturnToRecipes = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      {selectedRecipe ? (
        <>
          <RecipeDetailPage
            selectedRecipe={selectedRecipe}
            onReturnToRecipes={handleReturnToRecipes}
          />
        </>
      ) : (
        <>
          <RecipeListPage
            onSelectRecipe={setSelectedRecipe}
            onReturnToRecipes={handleReturnToRecipes}
          />
        </>
      )}
    </div>
  );
};
