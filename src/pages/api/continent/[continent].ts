import { continentsContent } from "helpers/continentsData";
import { NextApiRequest, NextApiResponse } from "next";
import { Controller } from "swiper";

// interface ContinentData {
//    id: string;
//    name: string;
//    content: {
//       image: string;
//       text: string;
//       countries: string;
//       languages: string;
//    },
//    citiesPlus: {
//       name: string;
//       country: string;
//       image: string;
//       flag: string;
//    }[]
// }

export default function handleContinent(req: NextApiRequest, res: NextApiResponse) {
   if(req.method === 'GET') {
      try {
         const { query: { continent: continentId } } = req;
         const continentData = continentsContent.find(
            continent => continent.id === continentId
         )
   
         return res.json({ ...continentData })
      } catch {
         return res.status(404)
      }
   }

   return res.status(405).end('Method not allowed.')
}