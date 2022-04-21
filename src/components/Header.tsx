import { Flex, Box, Image, Link as ChLink, Grid, GridItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

export function Header() {
   const { asPath } = useRouter()

   return (
      <Grid
         as="header"
         templateColumns="repeat(4, 1fr)"
         h="100"
         w="100%"
         maxW="1920px"
         px="20"
      >
         <GridItem
            w="8"
            display="flex"
            justifyContent="center"
            alignItems="center"
         >
            {
               asPath !== '/' && (
                  <Link href="/" passHref>
                     <ChLink>
                        <Image src="/images/return_button.svg" alt="voltar para home" />
                     </ChLink>
                  </Link>
               )
            }
         </GridItem>
         <GridItem d="flex" colSpan={2} alignItems="center" justifyContent="center">
            <Image src="/images/logo.svg" alt="logo" />
         </GridItem>
         <GridItem w="8"></GridItem>
      </Grid>
   );
}