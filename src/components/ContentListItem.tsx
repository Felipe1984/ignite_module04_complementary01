import { Image, ListItem, useBreakpointValue } from "@chakra-ui/react";

interface ContentListItemProps {
   travel: {
      id: string;
      image: string;
      text: string;
   }
}

export function ContentListItem({ travel }: ContentListItemProps) {
   const isWideSize = useBreakpointValue({ sm: false, lg: true })

   return (
      <ListItem
         key={travel.id}
         display={["list-item", null, null, "flex"]}
         flexDirection="column"
         w={["50%", null, "33%", "20%"]}
         h="auto"
         mx="auto"
         justifyContent="center"
         alignItems="center"
         listStylePos="inside"
         textAlign={[
            +travel.id % 2 === 0 ? 'right' : 
               travel.id === '5' ? 'center' : 'left',
            null,
            travel.id === '1' || travel.id === '4' ? 'left' :
               travel.id === '2' ? 'center' : 'right'
         ]}
      >
         { isWideSize && (
            <Image
               src={travel.image}
               alt={travel.text}
               htmlWidth="85"
               htmlHeight="85"
               mb="auto"
            />
         ) }
         {travel.text}
      </ListItem>
   );
}