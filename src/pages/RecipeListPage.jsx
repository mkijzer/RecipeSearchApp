import { useState } from "react";
import { data } from "../utils/data";
import { SearchRecipe } from "../components/searchRecipe";
import { RecipeList } from "../components/RecipeList";
import { Box, Center, Heading } from "@chakra-ui/react";

export const RecipeListPage = ({ onSelectRecipe }) => {
  const [matchedRecipes, setMatchedRecipes] = useState(data.hits);

  const handleSearch = (searchValue) => {
    const searchText = searchValue.toLowerCase();

    const filteredRecipes = data.hits.filter(
      (dish) =>
        dish.recipe.label.toLowerCase().includes(searchText) ||
        dish.recipe.healthLabels.some((label) =>
          label.toLowerCase().includes(searchText)
        )
    );
    setMatchedRecipes(filteredRecipes);
  };

  return (
    <Box m="4">
      <Center>
        <Box w="full" m="4">
          <Heading mt="8" mb="6" textAlign="center" color="orange.400">
            Check your Recipe
          </Heading>

          <Box mb={4} p={3} fontSize="sm">
            <SearchRecipe
              onSelectRecipe={onSelectRecipe}
              onSearch={handleSearch}
            />
          </Box>
          <Box w="full">
            <RecipeList
              matchedRecipes={matchedRecipes}
              onSelectRecipe={onSelectRecipe}
            />
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
