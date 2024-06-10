import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <ChakraProvider>
      <Router>
        <NavBar onSearch={setSearch} />
        <Routes>
          <Route path="/" element={<ItemListContainer search={search} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer search={search} />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
};

export default App;
