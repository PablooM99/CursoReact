import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <CSSReset />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
