import React, { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find(item => item.product.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => item.product.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
      ));
    } else {
      setCart([...cart, { product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.product.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    setCart(cart.map(item => item.product.id === productId
      ? { ...item, quantity }
      : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  useEffect(() => {
    const fetchProducts = async () => {
      const q = query(collection(db, 'products'), where('stock', '>', 0));
      const querySnapshot = await getDocs(q);
      const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      // No necesitamos establecer los productos aquí, ya que el carrito se maneja por separado
    };

    fetchProducts();
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};