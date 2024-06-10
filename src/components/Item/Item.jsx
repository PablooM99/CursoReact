import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import { FaCartPlus } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} m={5}>
      <Image 
        src={item.image} 
        alt={item.title} 
        boxSize="200px" 
        objectFit="cover" 
        mx="auto"
      />
      <Box p="6">
        <Text fontWeight="semibold" fontSize="xl" textAlign="center">
          {item.title}
        </Text>
        <Text mt="2" textAlign="center">${item.price}</Text>
        <Button
          mt="4"
          size="sm" 
          colorScheme="teal"
          variant="solid"
          as={RouterLink}
          to={`/item/${item.id}`}
          display="block"
          mx="auto"
          textAlign="center"
        >
          Ver detalles
        </Button>
      </Box>
    </Box>
  );
};

export default Item;
