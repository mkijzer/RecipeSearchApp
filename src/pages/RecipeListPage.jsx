import { useState } from "react";
import { data } from "../utils/data";
import { SearchRecipe } from "../components/searchRecipe";
import { RecipeList } from "../components/RecipeList";

export const RecipeListPage = ({ onSelectRecipe }) => {
  const [matchedRecipes, setMatchedRecipes] = useState(data.hits);

  const handleSearch = (searchValue) => {
    const filteredRecipes = data.hits.filter((dish) =>
      dish.recipe.label.toLowerCase().includes(searchValue.toLowerCase())
    );
    setMatchedRecipes(filteredRecipes);
  };

  return (
    <div>
      <SearchRecipe onSelectRecipe={onSelectRecipe} onSearch={handleSearch} />
      <h1>Your Recipe App For You</h1>
      <RecipeList
        matchedRecipes={matchedRecipes}
        onSelectRecipe={onSelectRecipe}
      />
    </div>
  );
};
