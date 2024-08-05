import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import Landing from "./Pages/Landing";
// import SectionOne from "./Pages/Landing/SectionOne";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Landing />
    </ChakraProvider>
  );
}

export default App;
