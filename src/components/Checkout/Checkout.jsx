import React, { useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Input, Textarea, Text } from '@chakra-ui/react';
import { useCart } from '../../context/CartContext';
import { db } from '../../config/firebase';
import { collection, addDoc, doc, updateDoc, writeBatch } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = 'El nombre es requerido';
    if (!formData.email) newErrors.email = 'El email es requerido';
    if (formData.email !== formData.confirmEmail) newErrors.confirmEmail = 'Los emails no coinciden';
    if (!formData.phone) newErrors.phone = 'El teléfono es requerido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const updateStock = async () => {
    const batch = writeBatch(db);

    cart.forEach(({ product, quantity }) => {
      const productRef = doc(db, 'products', product.id);
      batch.update(productRef, { stock: product.stock - quantity });
    });

    await batch.commit();
  };

  const getOrder = async () => {
    if (cart.length === 0) {
      Swal.fire({
        title: 'El carrito está vacío',
        icon: 'warning',
        confirmButtonText: 'Ver productos'
      }).then(() => {
        navigate('/');
      });
      return;
    }

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const order = {
      buyer: { ...formData },
      items: cart,
      total: totalPrice,
      date: new Date()
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      await updateStock();
      Swal.fire({
        title: 'Orden creada con éxito',
        html: `
          <p>Nombre: ${formData.name}</p>
          <p>Email: ${formData.email}</p>
          <p>Teléfono: ${formData.phone}</p>
          <p>Mensaje: ${formData.message}</p>
          <p>Orden Nro: ${docRef.id}</p>
          <p>Muchas gracias por su compra.</p>
        `,
        icon: 'success',
        confirmButtonText: 'Ver productos'
      }).then(() => {
        navigate('/');
      });
      clearCart();
      setFormData({
        name: '',
        email: '',
        confirmEmail: '',
        phone: '',
        message: ''
      });
    } catch (e) {
      console.error('Error al crear la orden: ', e);
      Swal.fire('Hubo un error al crear la orden', '', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex justify="center" align="center" height="100vh">
      <Box width="40%" p={5} boxShadow="lg" borderRadius="md">
        <Text fontSize="2xl" mb={5} textAlign="center">Checkout</Text>
        <FormControl isInvalid={errors.name} mb={3}>
          <FormLabel>Nombre</FormLabel>
          <Input placeholder="Pepe Coronel" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <Text color="red.500">{errors.name}</Text>}
        </FormControl>
        <FormControl isInvalid={errors.email} mb={3}>
          <FormLabel>Email</FormLabel>
          <Input placeholder="pepecoronel@gmail.com" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <Text color="red.500">{errors.email}</Text>}
        </FormControl>
        <FormControl isInvalid={errors.confirmEmail} mb={3}>
          <FormLabel>Confirmar Email</FormLabel>
          <Input placeholder="pepecoronel@gmail.com" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} />
          {errors.confirmEmail && <Text color="red.500">{errors.confirmEmail}</Text>}
        </FormControl>
        <FormControl isInvalid={errors.phone} mb={3}>
          <FormLabel>Teléfono</FormLabel>
          <Input placeholder="2235112233" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <Text color="red.500">{errors.phone}</Text>}
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Mensaje</FormLabel>
          <Textarea placeholder="Solicito factura A con estos datos..." name="message" value={formData.message} onChange={handleChange} />
        </FormControl>
        <Button colorScheme="teal" onClick={getOrder} isLoading={loading} width="100%">
          Finalizar Compra
        </Button>
      </Box>
    </Flex>
  );
};

export default Checkout;
