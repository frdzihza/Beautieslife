import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <Box p={0}>
      <Flex
        maxW={"1438px"}
        h={112}
        mx={"auto"}
        alignItems={"center"}
        px={4}
        py={1}
        top="0"
        left="0"
        right="0"
      >
        <Image src="./images/Logo.png" maxW={"190px"} h={"40px"} ml={"10"} />
        <Spacer />
        <Flex gap={10} mr={10}>
          <Text mt={5} fontSize={14} fontWeight={"600"}>
            Fasilitas
          </Text>
          <Text mt={5} fontSize={14} fontWeight={"600"}>
            Beautyprenuer
          </Text>
          <Text mt={5} fontSize={14} fontWeight={"600"}>
            Brand Partner
          </Text>
          <Button
            backgroundColor={"#EE9591"}
            mt={3}
            color={"white"}
            w={"90px"}
            h={"36px"}
          >
            Registrasi
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
