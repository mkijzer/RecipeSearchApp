import { Box, Image, Center, Text, VStack } from "@chakra-ui/react";

export const RecipeItem = ({
  label,
  image,
  dishType,
  mealType,
  dietLabels,
  cautions,
  healthLabels,
  onClick,
}) => (
  <Center bg="gray.">
    <Box
      p="5"
      borderWidth="1px"
      borderColor="gray.200"
      onClick={onClick}
      cursor="pointer"
      width={{ base: "0 0 100%", sm: "0 0 48%", lg: "0 0 19%" }}
      bg="gray.200"
      borderRadius="md"
      boxShadow="sm"
      h="100%"
      minH="350px"
      overflow="auto"
      mb={4}
      minW={{ base: "200px", sm: "380px" }}
      maxW="380px"
    >
      <VStack spacing={3} align="center">
        {" "}
        <Text
          fontSize="md"
          fontWeight="semibold"
          noOfLines={2}
          textAlign="center"
          sx={{
            whiteSpace: "normal",
            overflow: "hidden",
          }}
          mt="2"
          mb="6"
        >
          {label}
        </Text>
        <Image
          borderRadius="full"
          src={image}
          boxSize={{ base: "150px", sm: "170px", md: "250px", lg: "300px" }}
          objectFit="cover"
          m="auto"
        />
        <Box p="4">
          <Text
            p={2}
            fontSize="xs"
            textAlign="center"
            textTransform="uppercase"
          >
            {dishType}
          </Text>

          <Text fontSize="xs" textAlign="center">
            {mealType}
          </Text>

          <Text
            fontSize="xs"
            textAlign="center"
            sx={{
              whiteSpace: "normal",
              overflow: "hidden",
            }}
          >
            Dietlabels: {dietLabels.join(", ")}
          </Text>
          <Text fontSize="xs" color="red" textAlign="center">
            Cautions:
            {cautions.join(", ")}
          </Text>
          {healthLabels.includes("Vegetarian") ? (
            <Text fontSize="xs" color="green.600" textAlign="center">
              Vegetarian
            </Text>
          ) : (
            <Text fontSize="xs" visibility="hidden">
              Not Vegetarian
            </Text>
          )}

          {healthLabels.includes("Vegan") ? (
            <Text fontSize="xs" color="green.600" textAlign="center">
              Vegan
            </Text>
          ) : (
            <Text fontSize="xs" visibility="hidden">
              Not Vegan
            </Text>
          )}
        </Box>
      </VStack>
    </Box>
  </Center>
);
