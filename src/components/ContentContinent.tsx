import { Flex, Text, Box, Image, HStack, Tooltip, useBreakpointValue } from "@chakra-ui/react";
import { useContinents } from "hooks/useContinents";

export function ContentContitnent() {
   const { continent } = useContinents();
   const isWideScreem = useBreakpointValue([false, false, true]);

   return (
      <Flex
         flexDir={["column", null, null, "row"]}
         justify="center"
         px="20"
         align="center"
         maxW="1920px"
         w="100%"
      >
         <Text maxW="600" minW="343" textAlign="justify" mr={["0", null, null, "10"]}>
            { continent.current.content.text }
         </Text>
         <Flex maxW="490" minW="343" >
            <HStack spacing="6">
               <Flex direction="column">
                  <Text color="yellow.400" fontSize="48" fontWeight="semibold">
                     { continent.current.content.countries }
                  </Text>
                  <Text fontSize="24" fontWeight="semibold">países</Text>
               </Flex>
               <Flex direction="column">
                  <Text color="yellow.400" fontSize="48" fontWeight="semibold">
                     {continent.current.content.languages}
                  </Text>
                  <Text fontSize="24" fontWeight="semibold">línguas</Text>
               </Flex>
               <Flex direction="column">
                  <Text color="yellow.400" fontSize="48"fontWeight="semibold">
                     {continent.current.citiesPlus.length}
                  </Text>
                  <Text fontSize="24"fontWeight="semibold">cidades +100</Text>
               </Flex>
            </HStack>
            <Flex justify="flex-start" alignItems="flex-end" minW="4">
               <Tooltip
                  label="Cidades entre as 100 mais visitadas no mundo"
                  w="100%"
               >
                  <Image
                     src="/images/info.svg"
                     alt="informação"
                     mb="2.5"
                     ml="4"
                     w="100%"
                  />
               </Tooltip>
            </Flex>
         </Flex>
      </Flex>
   );
}