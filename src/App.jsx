import React from "react";
import Popup from "./components/Popup";
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
      <Popup />
    </ChakraProvider>
  );
}

export default App;
