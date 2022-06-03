import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const LeftMenu = () => {
  return (
    <Box bg={useColorModeValue("#FFFFFF","#16191C")} width="81px" style={{position:"absolute", top:"0", bottom:"0",left:"0"}}>

    </Box>
  )
}

export default LeftMenu