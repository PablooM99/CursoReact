import React from 'react';
import { Box, Flex, Link, Input, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { ChevronDownIcon } from '@chakra-ui/icons';

const NavBar = ({ onSearch }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

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
              <MenuItem onClick={() => handleCategoryClick('remeras')}>Remeras</MenuItem>
              <MenuItem onClick={() => handleCategoryClick('pantalones')}>Pantalones</MenuItem>
              <MenuItem onClick={() => handleCategoryClick('buzos')}>Buzos</MenuItem>
              <MenuItem onClick={() => handleCategoryClick('zapatillas')}>Zapatillas</MenuItem>
              <MenuItem onClick={() => handleCategoryClick('camperas')}>Camperas</MenuItem>
              <MenuItem onClick={() => handleCategoryClick('accesorios')}>Accesorios</MenuItem>
              <MenuItem onClick={() => handleCategoryClick('hombres')}>Hombres</MenuItem>
              <MenuItem onClick={() => handleCategoryClick('mujeres')}>Mujeres</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex alignItems="center">
          <Input
            placeholder="Buscar productos"
            onChange={(e) => onSearch(e.target.value)}
            mr="4"
            color="black"
          />
          <FaShoppingCart color="white" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
