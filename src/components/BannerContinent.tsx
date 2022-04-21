import { Flex, Text } from "@chakra-ui/react";
import { useContinents } from "hooks/useContinents";

export function BannerContinent() {
   const { continent } = useContinents();

   return (
      <Flex
         justify="flex-start"
         align="flex-end"
         maxW="1920px"
         w="100%"
         h="500px"
         bgImage={`url('${continent.current.content.image}')`}
         bgSize="cover"
         bgPosition="center"
      >
         <Text
            as="span"
            display="inline-block" 
            mb="14"
            ml="36"
            color="white"
            fontSize="2xl"
            fontWeight="bold"
         >
            {continent.current.name}
         </Text>
      </Flex>
   );
}