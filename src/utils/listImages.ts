const baseUrl = "/images/"

interface TypeTravelImagesData {
   id: string;
   image: string;
   text: string;
}

export const typeTravelImages: TypeTravelImagesData[] = [
   { id: "1", image: `${baseUrl}cocktail.svg`, text: "vida noturna" },
   { id: "2", image: `${baseUrl}surf.svg`, text: "praia" },
   { id: "3", image: `${baseUrl}building.svg`, text: "moderno" },
   { id: "4", image: `${baseUrl}museum.svg`, text: "clássico" },
   { id: "5", image: `${baseUrl}earth.svg`, text: "e mais..."},
]