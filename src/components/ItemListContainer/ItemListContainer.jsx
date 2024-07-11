import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Spinner } from '@chakra-ui/react';
import ItemList from '../ItemList/ItemList';
import { db } from '../../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ search }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const collectionRef = collection(db, 'products');
    let queryRef;

    if (categoryId) {
      queryRef = query(collectionRef, where('categories', 'array-contains', categoryId));
    } else {
      queryRef = collectionRef;
    }

    const querySnapshot = await getDocs(queryRef);
    const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));


    setItems(products);

    let filtered = products;

    if (search) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredItems(filtered);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, [categoryId, search]);

  return (
    <Box>
      {loading ? <Spinner size="xl" /> : <ItemList items={filteredItems} />}
    </Box>
  );
};

export default ItemListContainer;
