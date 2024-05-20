import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { 
    Box, 
    Flex, 
    Button, 
    Drawer, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerCloseButton, 
    DrawerHeader, 
    DrawerBody, 
    DrawerFooter, 
    } from '@chakra-ui/react'

const CartWidget = () => {

  return (
    <Box m={2}>
      <FaShoppingCart />
      
    </Box>
  )
}

export default CartWidget
