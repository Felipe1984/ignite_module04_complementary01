import { Box, Flex, Heading, Link as ChLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Controller, Autoplay } from 'swiper';
import { useContinents } from "hooks/useContinents";

import style from './styles.module.scss';

export function Carousel() {

   const { continents } = useContinents();
   console.log(continents.current);

   return (
      <Box h="450" w="100%" maxW="1920px">
         <Swiper
         modules={[Pagination, Controller, Navigation, Autoplay]}
         spaceBetween={50}
         slidesPerView={1}
         speed={400}
         pagination={{
            clickable: true
         }}
         autoplay={{
            delay: 12000,
            disableOnInteraction: false,
         }}
         navigation={true}
         className={style.slideContainer}
         >
            {
               continents.current.map(continent => (
                  <SwiperSlide key={continent.id}>
                     <Link href={`/continent/${continent.id}`} passHref>
                        <ChLink
                           textDecor="none"
                           _hover={{
                              textDecor: "none",
                           }}
                        >
                           <Flex
                              bgImage={`url(${continent.excerpt.image})`}
                              bgSize="cover"
                              bgPos="center"
                              h="450"
                              flexDir="column"
                              align="center"
                              justify="center"
                              color="white"
                              textShadow="0 0 7px black"
                              transition="filter, 0.2s"
                              _hover={{
                                 filter: "brightness(0.8)"
                              }}
                           >
                              <Heading fontSize={["24", null, "48"]} fontWeight="bold">
                                 {continent.name}
                              </Heading>
                              <Text fontSize={["14", null, "24"]} fontWeight="bold">
                                 {continent.excerpt.text}
                              </Text>
                           </Flex>
                        </ChLink>
                     </Link>
                  </SwiperSlide>
               ))
            }
         </Swiper>
      </Box>
   );
}