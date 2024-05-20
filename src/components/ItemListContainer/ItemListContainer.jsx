import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'

const ItemListContainer = ({title}) => {
  return (
    <Flex justify={'center'} align={'center'} m={4}>
        <Heading>{title}</Heading>
    </Flex>
  )
}

export default ItemListContainer
