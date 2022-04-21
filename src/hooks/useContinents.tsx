import { createContext, Dispatch, MutableRefObject, ReactNode, SetStateAction, useContext, useEffect, useRef, useState } from "react";

interface Continent    {
   id: string;
   name: string;
   excerpt: {
      image: string;
      text: string;
   },
}

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

interface ContinentContext {
   continents: MutableRefObject<Continent[]>;
   continent: MutableRefObject<ContinentData>;
}

interface ContinentProviderProps {
   children: ReactNode;
}



const ContinentContext = createContext({} as ContinentContext);

export const ContinentProvider = ({ children }: ContinentProviderProps) => {
   const continents = useRef<Continent[]>([])
   const continent = useRef({} as ContinentData)

   return (
      <ContinentContext.Provider value={{ continent, continents }}>
         { children }
      </ContinentContext.Provider>
   );
}

export const useContinents = () => {
   const context = useContext(ContinentContext);

   return context;
}