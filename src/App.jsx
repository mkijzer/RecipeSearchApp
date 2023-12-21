import React from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeDetailPage } from "./pages/RecipeDetailPage";
import { Box } from "@chakra-ui/react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = React.useState(null);

  const handleReturnToRecipes = () => {
    setSelectedRecipe(null);
  };

  return (
    <Box bg="gray.300">
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
    </Box>
  );
};
