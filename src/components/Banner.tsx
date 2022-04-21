import { Box, Flex, Heading, SimpleGrid, Image, useBreakpointValue, Text } from "@chakra-ui/react";

export function Banner() {

   const isWideSize = useBreakpointValue({ sm: false, lg: true })

   return (
      <Box
         as="section"
         h="335"
         w="100%"
         maxW="1920px"
         bgImage="/images/background.svg"
         bgSize="cover"
      >
         <SimpleGrid
            columns={[1, null, null, 2]}
            px={["4", "14"]}
            mx="auto"
            h="335"
         >
            <Box
               mt={[null, null, null, "20"]}
               pr={["0", null, "8"]}
               display={["flex", null, null, "block"]}
               flexDir="column"
               justifyContent="center"
            >
               <Heading as="h2" color="white" size="lg">
                  5 Continentes, infinitas possibilidades.
               </Heading>
               <Text color="gray.100" fontSize="medium" mt="5">
                  Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
               </Text>
            </Box>
            
            { isWideSize && (
               <Flex justify="flex-end">
                  <Image
                     src="/images/airplane.svg"
                     alt="avião"
                     mb={["-130", null, null, "-50"]}
                     transform="rotate(3deg)"
                     w={["300", null, null, "417"]}
                  />
               </Flex>
            ) }
         </SimpleGrid>
      </Box>
   );
}