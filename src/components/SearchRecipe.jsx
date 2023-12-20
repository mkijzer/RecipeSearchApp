import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { data } from "../utils/data";
import { Box, Center } from "@chakra-ui/react";

export const SearchRecipe = ({ onSearch }) => {
  const handleChange = (event) => {
    const inputValue = event.target.value;
    onSearch(inputValue);
  };

  return (
    <Center>
      <TextInput changeFn={handleChange} />
    </Center>
  );
};
