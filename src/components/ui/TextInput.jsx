// import { Input } from "@chakra-ui/react";

import { Box, Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn }) => {
  return (
    <Box p={2}>
      <Input
        type="text"
        placeholder="Find your favorite recipe"
        fontSize="sm"
        onChange={changeFn}
        p={2}
        focusBorderColor="orange.300"
        sx={{
          ":: placeholder": {
            color: "gray.500",
            fontSize: "xs",
          },
        }}
      />
    </Box>
  );
};
