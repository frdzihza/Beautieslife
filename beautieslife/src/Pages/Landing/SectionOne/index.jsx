import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function SectionOne() {
  return (
    <Box mt={18}>
      <Flex maxW={"1440px"} h={"701px"} mx={"auto"}>
        <Box>
          <Image src="./images/Kotak.png" w={"108px"} h={"32px"} />
          <Text fontSize={"70px"} fontWeight={"700"}>
            Pasti berat kalo lari sendirian.
          </Text>
          <Text fontSize={"16px"} className="roboto-thin">
            Setiap hal pasti butuh hal lain untuk membersamai. Begitupun dengan
            bisnis, Beautieslfie.id hadir untuk membersamai kalian untuk menjadi
            Beautypreneur. Siapapun kamu!!
          </Text>
        </Box>
        <Image src="./images/Hero.png" w={"636px"} h={"540px"} />
      </Flex>
    </Box>
  );
}

export default SectionOne;
