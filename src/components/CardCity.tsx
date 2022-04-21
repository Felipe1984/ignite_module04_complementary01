import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";

interface CardCityProps {
   flag: string;
   image: string;
   name: string;
   country: string;
}

export function CardCity({ country, flag, image, name }: CardCityProps) {
   return (
      <Flex direction="column" w="64" borderRadius="4" mx="6" mb="12">
         {/* <Image src={image} alt={name} borderTopRadius="4"/> */}
         <Box
            backgroundImage={image}
            backgroundSize="cover"
            backgroundPosition="center"
            h="173"
            borderTopRadius="4"
         />
         <Flex
            h="28"
            w="64"justify="space-around"
            borderBottom="1px solid rgba(255, 186, 8, 0.5)"
            borderLeft="1px solid rgba(255, 186, 8, 0.5)"
            borderRight="1px solid rgba(255, 186, 8, 0.5)"
            borderBottomRadius="4"
         >
            <Flex
               direction="column"
               justifyContent="space-between"
            >
               <Text mt="6">{name}</Text>
               <Text mb="6">{country}</Text>
            </Flex>
            <Flex justify="center" align="center">
               <Avatar
                  src={flag}
                  name={country}
               />
            </Flex>
         </Flex>
      </Flex>
   );
}