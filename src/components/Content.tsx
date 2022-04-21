import { UnorderedList } from "@chakra-ui/react";

import { typeTravelImages } from "utils/listImages";
import { ContentListItem } from "./ContentListItem";

export function Content() {
   
   return (
      <UnorderedList
         display="flex"
         maxW="1120"
         w="100%"
         mx="auto"
         px={["4", "14"]}
         listStyleImg={["url(/images/dot.svg)", null, null, "none"]}
         flexWrap="wrap"
         justifyContent="center"
      >
         {
            typeTravelImages.map(travel => <ContentListItem
               key={travel.id}
               travel={travel}
            />)
         }
      </UnorderedList>
   );
}