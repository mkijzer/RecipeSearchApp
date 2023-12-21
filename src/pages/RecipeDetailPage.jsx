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
  const showNutrients = (nutrients) => {
    const nutrientKeys = [
      "ENERC_KCAL",
      "FAT",
      "FASAT",
      "FATRN",
      "FAMS",
      "FAPU",
      "CHOCDF",
      "FIBTG",
      "SUGAR",
      "PROCNT",
      "CHOLE",
      "NA",
      "CA",
      "MG",
      "K",
      "FE",
      "ZN",
      "P",
      "VITA_RAE",
      "VITC",
      "THIA",
      "RIBF",
      "NIA",
      "VITB6A",
      "FOLDFE",
      "FOLFD",
      "FOLAC",
      "VITB12",
      "VITD",
      "TOCPHA",
      "VITK1",
      "WATER",
    ];

    return nutrientKeys.map((key) => {
      const nutrient = nutrients[key];
      return (
        <Text key={key} fontSize="xs">
          {nutrient.label}: {nutrient.quantity.toFixed(0)} {nutrient.unit}
        </Text>
      );
    });
  };

  const buttonSize = useBreakpointValue({ base: "xs", md: "sm" });
  const buttonText = useBreakpointValue({
    base: "Back",
    md: "Back to recipes ",
  });
  const imageSize = useBreakpointValue({ base: "250px", md: "400px" });

  return (
    <Center h={{ base: "auto", md: "100vh" }} w="100vw">
      <Box
        p={{ base: 3, md: 5 }}
        shadow="md"
        borderWidth="1px"
        rounded="md"
        maxW="1000px"
        w="full"
        mx="auto"
        my={4}
        backgroundColor="gray.200"
        position="relative"
        // overflowY="aut"
      >
        <Button
          text={buttonText}
          onClick={onReturnToRecipes}
          position="absolute"
          top="20px"
          left="20px"
          size={buttonSize}
          zIndex="2"
        ></Button>

        <Text
          fontSize="xs"
          textTransform="uppercase"
          position="absolute"
          top="20px"
          right="20px"
        >
          {selectedRecipe.dishType}
        </Text>

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
        <Flex
          wrap="wrap"
          justify="left"
          align="start"
          mt="4"
          mx="auto"
          w="full"
        >
          {showNutrients(selectedRecipe.totalNutrients)}
        </Flex>

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="start"
          mt="4"
          mx="auto"
          w="full"
          gap="50px"
        >
          {/* FIRST COLUMN */}

          <VStack flex="1" spacing={2} align="start" mt="14px">
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

          {/* SECOND COLUMN  */}

          <VStack flex="1" spacing={4} align="start">
            <Box textAlign="left" mt={4}>
              <Text fontSize="sm">Ingredients</Text>
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
            <Text fontSize="xs">
              Total preparing time: {selectedRecipe.totalTime} min{" "}
            </Text>
          </VStack>
          <Box mt={5}></Box>

          {/* // Third COLUMN */}

          <VStack flex="1" spacing={3} align="start">
            {" "}
            <Box mt={4}>
              <Text color="red" fontSize="sm">
                Cautions: {selectedRecipe.cautions.join(", ")}
              </Text>
            </Box>
            <VStack align="start" spacing={1}>
              <Text fontSize="sm">Diet Labels</Text>
              <Text fontSize="xs">{selectedRecipe.dietLabels.join(", ")}</Text>
            </VStack>
            <Box>
              <Text fontSize="sm" color="green.600">
                Health Labels
              </Text>
              <Wrap spacing={1}>
                {selectedRecipe.healthLabels.map((label, index) => (
                  <WrapItem key={index} minWidth="100px">
                    <Text fontSize="xs" mr={2} color="green.600">
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
