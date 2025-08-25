import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Heading, Button } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box textAlign="center" py={10}>
      <Heading mb={4}>Hello Vite + Chakra UI 🚀</Heading>
      <Button colorScheme="teal">Click Me</Button>
    </Box>
    </>
  )
}

export default App
