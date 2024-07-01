import { Flex, Box, Text, Link  } from '@chakra-ui/react'
import React from 'react'
import { FaInstagram, FaFacebook, } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Flex w={'100%'} h={'30vh'} backgroundColor={'#666'} color={'#fff'} bottom={'0'} justifyContent={'center'}>
        <Box>
            <Text fontSize={'xx-large'}>Redes Sociales</Text>
            <Flex justify={'space-around'} marginTop={'30px'} fontSize={'xx-large'} bottom={'0'}>
                
                <Link href='https://instagram.com' isExternal marginRight={'50px'}><FaInstagram /></Link>
                <Link href='https://facebook.com' isExternal marginRight={'50px'}><FaFacebook /></Link>
                <Link href='https://x.com' isExternal><FaSquareXTwitter /></Link>
                
            </Flex>
            
        </Box>
    </Flex>
  )
}

export default Footer
