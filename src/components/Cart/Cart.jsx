import React from 'react';
import { Box, Button, Flex, Text, Image } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { Link, Link as RouterLink } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={5}>Carrito de Compras</Text>
      {cart.length === 0 ? (
        <Flex direction="column" justify="center" align="center" height="200px">
          <Text mb={3}>No hay productos en el carrito</Text>
          <Button as={RouterLink} to="/" colorScheme="teal">
            Ver productos
          </Button>
        </Flex>
      ) : (
        <>
          {cart.map(({ product, quantity }) => (
            <Flex key={product.id} justify="space-between" align="center" mb={5} borderWidth="1px" borderRadius="lg" p={3} bg="orange.50">
              <Image src={product.image} boxSize="100px" objectFit="cover" alt={product.title} />
              <Box ml={5} flex="2">
                <Text fontSize="xl">{product.title}</Text>
                <Text>Cantidad: {quantity}</Text>
              </Box>
              <Box flex="1" textAlign="center">
                <Text>Precio unitario: ${product.price}</Text>
              </Box>
              <Box flex="1" textAlign="center">
                <Text>Subtotal: ${product.price * quantity}</Text>
              </Box>
              <Button onClick={() => removeFromCart(product.id)} colorScheme="red" size="sm">
                <FaTrash />
              </Button>
            </Flex>
          ))}
          <Box mt={5} textAlign="center">
            <Text fontSize="xl">Total: ${totalPrice}</Text>
            <Button onClick={clearCart} colorScheme="red" mt={3} mr={3}>Vaciar Carrito</Button>
            <Button as={RouterLink} to="/checkout" colorScheme="teal" mt={3}>Finalizar Compra</Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;
