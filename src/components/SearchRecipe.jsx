import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { data } from "../utils/data";

export const SearchRecipe = ({ onSearch }) => {
  const handleChange = (event) => {
    const inputValue = event.target.value;
    onSearch(inputValue);
  };

  return (
    <div>
      <h2>Search here</h2>
      <TextInput changeFn={handleChange} />
    </div>
  );
};
