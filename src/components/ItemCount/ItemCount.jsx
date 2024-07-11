import React from 'react';
import { Flex, Button, Text } from '@chakra-ui/react';
import Swal from 'sweetalert2';

const ItemCount = ({ stock, quantity, setQuantity }) => {
  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    } else {
      Swal.fire({
        title: 'Cantidad excedida',
        text: 'No puedes agregar más cantidad de la disponible en stock',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Flex align="center" mt="4" justify="center">
      <Button onClick={handleDecrement} colorScheme="teal" size="sm">-</Button>
      <Text mx="4">{quantity}</Text>
      <Button onClick={handleIncrement} colorScheme="teal" size="sm">+</Button>
    </Flex>
  );
};

export default ItemCount;
