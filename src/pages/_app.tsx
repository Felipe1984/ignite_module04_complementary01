import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ContinentProvider } from 'hooks/useContinents';

import { theme } from 'styles/theme';
import 'swiper/scss';
import "swiper/scss/autoplay";
import "swiper/scss/pagination";
import 'swiper/scss/navigation';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme}>
      <ContinentProvider>
        <Component {...pageProps} />
      </ContinentProvider>
    </ChakraProvider>
  );
}

export default MyApp
