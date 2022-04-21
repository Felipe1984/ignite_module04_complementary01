import { NextApiRequest, NextApiResponse } from "next";
import { excerpt } from "helpers/continentsData";

export default function continents(req: NextApiRequest, res: NextApiResponse) {
   if (req.method === 'GET') {
      return res.json([ ...excerpt ])
   } 
   
   return res.status(405).end('Method not Allowed.')
}