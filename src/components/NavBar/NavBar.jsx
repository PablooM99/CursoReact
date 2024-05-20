import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
    Button,
    Flex,
    Heading,
    Image,
  } from '@chakra-ui/react'
  import { FaChevronDown } from 'react-icons/fa'

const NavBar = () => {
  return (
    <Flex h={'10vh'} w={'100%'} justify={'space-between'} align={'center'} backgroundColor={'#55868c'}>
        <Heading fontSize={'xl'} m={2}><Image src='src\assets\images\logo.webp' alt='Logo' w={'3rem'} h={'3rem'} /></Heading>
        <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Menú
            </MenuButton>
            <MenuList backgroundColor={'black'}>
                <MenuItem backgroundColor={'black'} color={'white'} _hover={{bg: '#666'}}>Remeras</MenuItem>
                <MenuItem backgroundColor={'black'} color={'white'} _hover={{bg: '#666'}}>Pantalones</MenuItem>
                <MenuItem backgroundColor={'black'} color={'white'} _hover={{bg: '#666'}}>Buzos</MenuItem>
                <MenuItem backgroundColor={'black'} color={'white'} _hover={{bg: '#666'}}>Zapatillas</MenuItem>
                <MenuItem backgroundColor={'black'} color={'white'} _hover={{bg: '#666'}}>Relojes</MenuItem>
            </MenuList>
        </Menu>
        <CartWidget />
    </Flex>
  )
}

export default NavBar
