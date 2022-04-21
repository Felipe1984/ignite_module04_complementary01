import { Heading, Text } from "@chakra-ui/react";

export function TitleHome() {
   return (
      <Heading as="h3" fontSize={["md", null, "2xl"]} px={["2", null, "0"]} fontWeight="normal">
         <Text as="span" display="block" textAlign="center">Vamos nessa?</Text>
         <Text
         as="span"
         display="block"
         textAlign="center"
         >
            Então escolha seu continente
         </Text>
      </Heading>
   );
}