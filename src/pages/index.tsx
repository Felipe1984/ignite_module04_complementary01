import { Banner } from 'components/Banner';
import { Content } from 'components/Content';
import { Header } from 'components/Header';
import Head from 'next/head';
import { Divider, Stack } from '@chakra-ui/react';
import { TitleHome } from 'components/TitleHome';
import { Carousel } from 'components/Carousel';
import { GetStaticProps } from 'next';
import { useContinents } from 'hooks/useContinents';

interface HomeProps {
  continents: {
    id: string;
    name: string;
    excerpt: {
       image: string;
       text: string;
    },
  }[]
}

export default function Home({ continents: dataContinents }: HomeProps) {

  const { continents } = useContinents();
  continents.current = [ ...dataContinents ]

  return (
    <>
      <Head>
        <title>World trip</title>
      </Head>
      <Header />
      <Stack spacing={["8", null, null, "20"]} align="center" mb="10">
        <Banner />
        <Content />
        <Divider w="24" color="gray.900" borderWidth="thin" borderColor="gray.900"/>
        <TitleHome />

        <Carousel />
      </Stack>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const continents = await fetch("http://localhost:3000/api/continents")
    .then(res => res.json())

  return {
    props: {
      continents
    }
  }
}