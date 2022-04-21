import { Box, Flex, Heading, Image, Text, Avatar, Stack, SimpleGrid, HStack } from "@chakra-ui/react";
import { useContinents } from "hooks/useContinents";
import { CardCity } from "./CardCity";

export function CitiesPlus() {
   const { continent: { current: { citiesPlus } } } = useContinents();

   return (
      <Flex
         direction="column"
         px="14"
         maxW="1920px"
         pb="10"
         w="100%"
         align="center"
      >
         <Heading px="6"  mb="10" mr={["0", null, null, "auto"]}>Cidades +100</Heading>
         <Flex wrap="wrap" justify="center">
            {
               citiesPlus.map(card => (
                  <CardCity
                     key={card.name}
                     flag={card.flag}
                     image={card.image}
                     country={card.country}
                     name={card.name}
                  />
               ))
            }
         </Flex>

         {/* <SimpleGrid
            // columns={[1, 2, 3, 4]}
            width="content"
            spacingX="45px"
            spacingY="48px"
            minChildWidth="256px"
            mx="auto"
         >
            {
               citiesPlus.map(card => (
                  <CardCity
                     key={card.name}
                     flag={card.flag}
                     image={card.image}
                     country={card.country}
                     name={card.name}
                  />
               ))
            }
         </SimpleGrid> */}
      </Flex>
   );
}