import { Stack } from "@chakra-ui/react";
import { BannerContinent } from "components/BannerContinent";
import { CitiesPlus } from "components/CitiesPlus";
import { ContentContitnent } from "components/ContentContinent";
import { Header } from "components/Header";
import { useContinents } from "hooks/useContinents";
import { GetStaticPaths, GetStaticProps } from "next";

interface ContinentData {
   id: string;
   name: string;
   content: {
      image: string;
      text: string;
      countries: string;
      languages: string;
   },
   citiesPlus: {
      name: string;
      country: string;
      image: string;
      flag: string;
   }[]
}

interface ContinentProps {
   continent: ContinentData
}

export default function Continent({ continent: continentData }: ContinentProps) {
   const { continent } = useContinents();

   continent.current = continentData;

   return (
      <>
         <Header />
         <Stack spacing="20" justify="center" align="center">
            <BannerContinent />
            <ContentContitnent />
            <CitiesPlus />
         </Stack>
      </>
   );
}

export const getStaticPaths: GetStaticPaths = async () => {

   return {
      paths: [],
      fallback: 'blocking'
   }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

   const { continent: path } = params as { continent: string };
   console.log(`CONTINENT: ${path}`)

   const continent = (await fetch(`http://localhost:3000/api/continent/${path}`)
      .then(res => res.json())) as ContinentData

   return {
      props: {
         continent
      }
   }
}