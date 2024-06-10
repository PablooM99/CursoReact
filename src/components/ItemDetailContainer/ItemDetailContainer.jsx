import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, Button, Spinner, Flex } from '@chakra-ui/react';
import { FaCartPlus } from 'react-icons/fa';
import { products } from '../../products';
import Swal from 'sweetalert2';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchItem = async () => {
      const product = products.find(p => p.id === parseInt(itemId));
      setItem(product);
      setLoading(false);
    };

    fetchItem();
  }, [itemId]);

  const handleIncrement = () => {
    if (quantity < item.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log('Añadir al carrito', item.id, quantity);
    Swal.fire({
      title: 'Producto añadido al carrito',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (!item) {
    return <Text>No se encontró el producto</Text>;
  }

  return (
    <Flex direction="column" align="center" p={5}>
      <Image 
        src={item.image} 
        alt={item.title} 
        boxSize="200px" 
        objectFit="cover"
      />
      <Box p="6" textAlign="center">
        <Text fontWeight="semibold" fontSize="2xl">{item.title}</Text>
        <Text mt="2">{item.description}</Text>
        <Text mt="2" fontSize="lg" color="teal.500">${item.price}</Text>
        <Flex align="center" mt="4" justify="center">
          <Button onClick={handleDecrement} colorScheme="teal" size="sm">-</Button>
          <Text mx="4">{quantity}</Text>
          <Button onClick={handleIncrement} colorScheme="teal" size="sm">+</Button>
        </Flex>
        <Button
          mt="4"
          leftIcon={<FaCartPlus />}
          colorScheme="teal"
          variant="solid"
          onClick={handleAddToCart}
          isDisabled={item.stock === 0}
        >
          Añadir al carrito
        </Button>
      </Box>
    </Flex>
  );
};

export default ItemDetailContainer;
