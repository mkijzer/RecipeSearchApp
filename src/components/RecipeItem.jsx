import { Box, Image, Center, Text, VStack } from "@chakra-ui/react";

export const RecipeItem = ({
  label,
  image,
  dishType,
  dietLabels,
  cautions,
  onClick,
}) => (
  <Center>
    <Box
      p="5"
      borderWidth="1px"
      borderColor="gray.200"
      onClick={onClick}
      cursor="pointer"
      width={{ base: "0 0 100%", sm: "0 0 48%", lg: "0 0 19%" }}
      bg="gray.100"
      borderRadius="md"
      boxShadow="sm"
      h="100%"
      minH="350px"
      overflow="auto"
      mb={4}
    >
      <VStack spacing={3} align="center">
        {" "}
        <Image
          borderRadius="full"
          src={image}
          boxSize={{ base: "150px", sm: "170px", md: "250px", lg: "350px" }}
          objectFit="cover"
          m="auto"
        />
        <Box p="4">
          <Text fontSize="xs" textAlign="center">
            {dishType}
          </Text>
          <Text
            fontSize="sm"
            fontWeight="semibold"
            noOfLines={2}
            textAlign="center"
          >
            {label}
          </Text>

          <Text fontSize="sm" textAlign="center">
            Dietlabels: {dietLabels.join(", ")}
          </Text>
          <Text fontSize="sm" color="red" textAlign="center">
            Cautions:
            {cautions.join(", ")}
          </Text>
        </Box>
      </VStack>
    </Box>
  </Center>
);
