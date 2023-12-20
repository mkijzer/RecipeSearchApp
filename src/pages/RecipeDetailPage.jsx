import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  Wrap,
  WrapItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Button } from "../components/ui/Button";

export const RecipeDetailPage = ({ selectedRecipe, onReturnToRecipes }) => {
  const buttonSize = useBreakpointValue({ base: "xs", md: "sm" });
  const buttonText = useBreakpointValue({
    base: "back",
    md: "back to recipes ",
  });
  const imageSize = useBreakpointValue({ base: "250px", md: "400px" });

  return (
    <Center h="100vh" w="100vw">
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        rounded="md"
        maxW="1000px"
        w="full"
        mx="auto"
        my={4}
        backgroundColor="gray.100"
        position="relative"
        overflowY="auto"
      >
        <Button
          text={buttonText}
          onClick={onReturnToRecipes}
          position="absolute"
          top={5}
          left={5}
          size={buttonSize}
        ></Button>

        <Image
          p="5"
          mx="auto"
          width={imageSize}
          height="150px"
          // boxSize="200px"
          objectFit="cover"
          src={selectedRecipe.image}
          alt={selectedRecipe.label}
          borderRadius="md"
        />

        {/* HERE STARTS THE FLEX */}

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="start"
          mt="4"
          mx="auto"
          w="full"
        >
          {/* FIRST COLUMN */}
          {/* <Box flex={1} textAlign="left"> */}

          <VStack flex="1" spacing={2} align="start">
            <Text fontSize="sm"> Category: {selectedRecipe.dishType}</Text>
            <Heading fontSize="xl">{selectedRecipe.label}</Heading>

            {/* <Text fontSize="xs">
              Total Weight: {selectedRecipe.totalWeight}{" "}
            </Text> */}
            <Text fontSize="xs">Servings:{selectedRecipe.yield}</Text>
            <Text fontSize="xs">
              Origin: {selectedRecipe.cuisineType.join(", ")}
            </Text>
            <Text fontSize="xs">
              category: {selectedRecipe.mealType.join(", ")}
            </Text>
            <Text fontSize="xs">Calories: {selectedRecipe.calories} kcal</Text>
          </VStack>

          {/* </Box> */}

          {/* SECOND COLUMN  */}
          {/* <Box flex={1} textAlign="left"> */}
          <VStack flex="1" spacing={4} align="start">
            <Box textAlign="left" mt={4}>
              <Text fontSize="sm">
                Total preparing time: {selectedRecipe.totalTime}{" "}
              </Text>
              <Box mt={5}></Box>
              <Text fontSize="sm">Ingredients:</Text>
              <Text fontSize="xs">
                <Box w="full" mt={2}>
                  <UnorderedList spacing={2}>
                    {selectedRecipe.ingredients.map((ingredients, index) => (
                      <ListItem key={index}>{ingredients.text}</ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </Text>
            </Box>
          </VStack>
          {/* </Box> */}

          {/* // Third COLUMN */}
          {/* <Box flex={1} textAlign="left"> */}
          <VStack flex="1" spacing={3} align="start">
            {" "}
            <Box mt={4}>
              <Text color="red">
                Cautions: {selectedRecipe.cautions.join(", ")}
              </Text>
            </Box>
            <VStack align="start" spacing={1}>
              <Text fontSize="sm">Diet Labels:</Text>
              <Text fontSize="xs">{selectedRecipe.dietLabels.join(", ")}</Text>
            </VStack>
            <Box color="green.200">
              <Text color="green.600" fontSize="sm">
                Health Labels:
              </Text>

              <Wrap spacing={1}>
                {selectedRecipe.healthLabels.map((label, index) => (
                  <WrapItem key={index} minWidth="100px">
                    <Text color="green.600" fontSize="xs" mr={2}>
                      {label}
                    </Text>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </VStack>

          {/* </Box> */}
        </Flex>
      </Box>
    </Center>
  );
};
