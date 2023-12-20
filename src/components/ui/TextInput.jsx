// import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn }) => {
  return (
    <input
      type="text"
      placeholder="Search for your recipe"
      onChange={changeFn}
    />
  );
};
