import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Portfolio from './components/PortFolio/Portfolio'
function App() {
  return (
    <ChakraProvider>
      <Portfolio />
    </ChakraProvider>
  )
}

export default App

