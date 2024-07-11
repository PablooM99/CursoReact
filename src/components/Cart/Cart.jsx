import React from 'react';
import { useCart } from '../../context/CartContext';
import { Box, Button, Flex, Image, Text, IconButton } from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/fa';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, totalPrice, clearCart, removeFromCart, updateCartQuantity } = useCart();

  const handleIncrement = (item) => {
    if (item.quantity < item.product.stock) {
      updateCartQuantity(item.product.id, item.quantity + 1);
    } else {
      Swal.fire({
        title: 'Stock insuficiente',
        text: 'No puedes agregar más cantidad de la disponible en stock',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateCartQuantity(item.product.id, item.quantity - 1);
    }
  };

  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={5}>Carrito de Compras</Text>
      {cart.length === 0 ? (
        <Box textAlign="center">
          <Text mb={5}>El carrito está vacío</Text>
          <Button as={Link} to="/" colorScheme="teal">
            Ver productos
          </Button>
        </Box>
      ) : (
        <>
          {cart.map(item => (
            <Flex key={item.product.id} mb={5} alignItems="center">
              {item.product.image && (
                <Image src={item.product.image} boxSize="100px" objectFit="cover" mr={5} />
              )}
              <Box flex="1">
                <Text fontWeight="bold">{item.product.title}</Text>
                {item.product.price && (
                  <>
                    <Text>Precio unitario: ${item.product.price}</Text>
                    <Text>Subtotal: ${item.product.price * item.quantity}</Text>
                  </>
                )}
                <Flex alignItems="center">
                  <IconButton
                    icon={<IoMdRemove />}
                    size="sm"
                    onClick={() => handleDecrement(item)}
                    isDisabled={item.quantity === 1}
                  />
                  <Text mx={3}>{item.quantity}</Text>
                  <IconButton
                    icon={<IoMdAdd />}
                    size="sm"
                    onClick={() => handleIncrement(item)}
                    isDisabled={item.quantity === item.product.stock}
                  />
                </Flex>
              </Box>
              <IconButton
                icon={<FaTrashAlt />}
                size="sm"
                onClick={() => removeFromCart(item.product.id)}
                ml={5}
              />
            </Flex>
          ))}
          <Box mt={5} textAlign="center">
            <Text fontSize="xl">Total: ${totalPrice}</Text>
            <Button colorScheme="red" onClick={clearCart} mt={3} mr={3}>
              Vaciar Carrito
            </Button>
            <Button as={Link} to="/checkout" colorScheme="teal" mt={3}>
              Confirmar Compra
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;
