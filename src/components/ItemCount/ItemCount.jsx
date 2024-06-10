import React, { useState } from 'react';
import { Box, Button, HStack, Text } from '@chakra-ui/react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Box>
      <HStack maxW="320px" mt="4">
        <Button onClick={handleDecrement} colorScheme="teal"> - </Button>
        <Text>{count}</Text>
        <Button onClick={handleIncrement} colorScheme="teal"> + </Button>
      </HStack>
      <Button
        mt="4"
        colorScheme="teal"
        onClick={() => onAdd(count)}
        isDisabled={stock === 0}
      >
        Añadir al carrito
      </Button>
    </Box>
  );
};

export default ItemCount;
