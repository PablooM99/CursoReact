// ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Spinner } from '@chakra-ui/react';
import ItemList from '../ItemList/ItemList';
import { products } from '../../products';

const ItemListContainer = ({ search }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setItems(products);

      let filtered = products;

      if (categoryId) {
        filtered = filtered.filter(item => 
          Array.isArray(item.categories) && item.categories.includes(categoryId)
        );
      }

      if (search) {
        filtered = filtered.filter(item => 
          item.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      setFilteredItems(filtered);
      setLoading(false);
    };

    fetchData();
  }, [categoryId, search]);

  return (
    <Box>
      {loading ? <Spinner size="xl" /> : <ItemList items={filteredItems} />}
    </Box>
  );
};

export default ItemListContainer;
