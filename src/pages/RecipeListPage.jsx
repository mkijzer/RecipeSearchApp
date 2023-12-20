import { useState } from "react";
import { data } from "../utils/data";
import { SearchRecipe } from "../components/searchRecipe";
import { RecipeList } from "../components/RecipeList";
import { Box, Center, Heading } from "@chakra-ui/react";

export const RecipeListPage = ({ onSelectRecipe }) => {
  const [matchedRecipes, setMatchedRecipes] = useState(data.hits);

  const handleSearch = (searchValue) => {
    const filteredRecipes = data.hits.filter((dish) =>
      dish.recipe.label.toLowerCase().includes(searchValue.toLowerCase())
    );
    setMatchedRecipes(filteredRecipes);
  };

  return (
    <Box m="4">
      <Center>
        <Box w="full" m="4">
          <Heading
            fontFamily=" 'Pacifico' cursive"
            mt="8"
            mb="6"
            textAlign="center"
          >
            Your Favorite Recipe App
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
