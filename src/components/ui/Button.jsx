import { Button as ChakraButton } from "@chakra-ui/react";

export const Button = ({ text, onClick, size }) => {
  return (
    <ChakraButton
      fontSize="sm"
      px="1.5"
      color="orange.400"
      size={size}
      onClick={onClick}
    >
      {text}
    </ChakraButton>
  );
};
