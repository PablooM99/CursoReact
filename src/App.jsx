import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer/Footer'

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <ChakraProvider>
      <CartProvider>
        <Router>
          <NavBar onSearch={setSearch} />
          <Routes>
            <Route path="/" element={<ItemListContainer search={search} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer search={search} />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </ChakraProvider>
  );
};

export default App;
