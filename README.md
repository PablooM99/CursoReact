# MP Indumentarias - eCommerce

Bienvenido al proyecto MP Indumentarias, un eCommerce de indumentaria para hombres y mujeres construido con React, Vite, Firebase y Chakra UI. Este proyecto permite a los usuarios buscar y filtrar productos, agregar productos al carrito y realizar compras con la actualización automática del stock.

## Características

- **Búsqueda y filtrado de productos:** Los usuarios pueden buscar productos y filtrar por categorías.
- **Carrito de compras:** Los usuarios pueden agregar productos al carrito, ver la cantidad total de items y el precio total, y eliminar productos del carrito.
- **Checkout:** Los usuarios pueden finalizar la compra proporcionando sus datos personales.
- **Actualización de stock:** El stock de los productos se actualiza automáticamente en Firebase al realizar una compra.
- **Alertas de SweetAlert:** Se muestran alertas de confirmación y error para mejorar la experiencia del usuario.
- **Responsivo:** El diseño es responsivo y se adapta a diferentes tamaños de pantalla.

## Tecnologías Utilizadas

- **React:** Biblioteca para construir interfaces de usuario.
- **Vite:** Herramienta de desarrollo rápida y ligera.
- **Firebase:** Base de datos en tiempo real para almacenar productos y gestionar el stock.
- **Chakra UI:** Biblioteca de componentes de React para el diseño de la interfaz de usuario.
- **SweetAlert:** Biblioteca para mostrar alertas bonitas y personalizables.

## Instalación y Ejecución

1. **Clonar el repositorio:**


- **git clone** https://github.com/tuusuario/mp-indumentarias.git
cd mp-indumentarias

## Instalar dependencias:

npm install

## Configurar Firebase:

Crea un archivo firebase.js en el directorio src y configura tu proyecto de Firebase:

- **javascript**

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
Iniciar el servidor de desarrollo:



npm run dev
Abrir el navegador:

Abre tu navegador y navega a http://localhost:5173 para ver la aplicación en funcionamiento.

## Estructura del Proyecto

- **Copiar código**
mp-indumentarias/
├── public/
├── src/
│   ├── components/
│   │   ├── CartWidget/
│   │   │   └── CartWidget.jsx
│   │   ├── Item/
│   │   │   └── Item.jsx
│   │   ├── ItemCount/
│   │   │   └── ItemCount.jsx
│   │   ├── ItemDetailContainer/
│   │   │   └── ItemDetailContainer.jsx
│   │   ├── ItemList/
│   │   │   └── ItemList.jsx
│   │   ├── ItemListContainer/
│   │   │   └── ItemListContainer.jsx
│   │   ├── NavBar/
│   │   │   └── NavBar.jsx
│   │   ├── Checkout/
│   │   │   └── Checkout.jsx
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   ├── contexts/
│   │   ├── CartContext.jsx
│   ├── firebase/
│   │   └── firebase.js
│   ├── pages/
│   │   ├── Cart.jsx
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── package.json
├── README.md
├── vite.config.js

## Contribuir

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

Haz un fork del proyecto.
Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
Realiza los cambios necesarios y haz commit (git commit -am 'Agregar nueva característica').
Haz push a la rama (git push origin feature/nueva-caracteristica).
Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia M. Consulta el archivo LICENSE para más detalles.

## Contacto

Para cualquier consulta o sugerencia, puedes contactarme a través de mi portafolio.

¡Gracias por visitar MP Indumentarias!


