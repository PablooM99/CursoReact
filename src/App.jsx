import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ProductContainer from './components/ProductContainer/ProductContainer'
import Footer from './components/Footer/Footer'

function App() {
 return( 
<ChakraProvider>
    
    <NavBar 
    
    />

    <ItemListContainer
        title = 'Indumentarias MP'
    />

    <ProductContainer

    />

    <Footer 
    
    />

</ChakraProvider>
 )
};

export default App