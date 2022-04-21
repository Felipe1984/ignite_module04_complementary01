import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
   colors: {
      yellow: {
         "400": "#FFBA08",
      },
      gray: {
         "900": "#1D1D1D",
         "500": "#47585B",
         "300": "#999999",
         "100": "#DADADA",
         "50": "#F5F8FA"
      }
   },
   fonts: {
      heading: 'Poppins',
      body: 'Poppins',
   },
   styles: {
      global: {
         body: {
            bg: 'white',
            color: 'gray.500'
         },
         '.swiper-button-prev::after, .swiper-button-next::after': {
            color: 'yellow.400',
         },
         '.swiper-pagination-bullet.swiper-pagination-bullet-active': {
            bg: 'yellow.400',
         },
         '.swiper-pagination-bullet': {
            w: '4',
            h: '4',
            bg: 'gray.300',
            opacity: 1
         },
      }
   }
});