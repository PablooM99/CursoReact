// NavBar.jsx
import React from 'react';
import { Box, Flex, Link, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useCart } from '../../context/CartContext';

const NavBar = () => {
  const { totalItems } = useCart();

  return (
    <Box bg="teal.500" p="4">
      <Flex justifyContent="space-between" alignItems="center">
        <Link as={RouterLink} to="/" p="2" color="white">Inicio</Link>
        <Flex justify="center" flex="1">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="teal">
              Categorías
            </MenuButton>
            <MenuList>
              <MenuItem as={RouterLink} to="/category/remeras">Remeras</MenuItem>
              <MenuItem as={RouterLink} to="/category/pantalones">Pantalones</MenuItem>
              <MenuItem as={RouterLink} to="/category/buzos">Buzos</MenuItem>
              <MenuItem as={RouterLink} to="/category/zapatillas">Zapatillas</MenuItem>
              <MenuItem as={RouterLink} to="/category/camperas">Camperas</MenuItem>
              <MenuItem as={RouterLink} to="/category/relojes">Relojes</MenuItem>
              <MenuItem as={RouterLink} to="/category/hombres">Hombres</MenuItem>
              <MenuItem as={RouterLink} to="/category/mujeres">Mujeres</MenuItem>
              </MenuList>
          </Menu>
        </Flex>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/cart" color="white" display="flex" alignItems="center">
            <FaShoppingCart />
            {totalItems > 0 && <Box as="span" ml="1">{totalItems}</Box>}
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
