import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Item from '../Item/Item';

const ItemList = ({ items }) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="40px">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </SimpleGrid>
  );
};

export default ItemList;
