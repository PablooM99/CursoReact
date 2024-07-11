# MP Indumentarias - eCommerce

## Logo

![image](/CursoReactJS/src/assets/images/logo.webp)

## vista previa

### Descripción

Bienvenido al proyecto MP Indumentarias, un eCommerce de indumentaria para hombres y mujeres construido con React, Vite, Firebase y Chakra UI. Este proyecto permite a los usuarios buscar y filtrar productos, agregar productos al carrito y realizar compras con la actualización automática del stock.

## Características

- **Búsqueda y filtrado de productos:** Los usuarios pueden buscar productos y filtrar por categorías.
- **Carrito de compras:** Los usuarios pueden agregar productos al carrito, ver la cantidad total de items y el precio total, y eliminar productos del carrito.
- **Checkout:** Los usuarios pueden finalizar la compra proporcionando sus datos personales.
- **Actualización de stock:** El stock de los productos se actualiza automáticamente en Firebase al realizar una compra.
- **Alertas de SweetAlert:** Se muestran alertas de confirmación y error para mejorar la experiencia del usuario.
- **Responsivo:** El diseño es responsivo y se adapta a diferentes tamaños de pantalla.

## Dependencias:

  chakra-ui/icons
  chakra-ui/react
  emotion/react
  emotion/styled
  firebase
  framer-motion
  react
  react-dom
  react-icons
  react-router-dom
  sweetalert2

## Instalación:
#### List
- clonar repositorio
  - git clone https://github.com/PablooM99/CursoReact
- Moverte a la carpeta del proyecto
  - cd CursoReact
- Instalar las dependencias
  - npm install
- compilamos
  - npm run dev


## Estructura del Proyecto

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

#### NavBar

Boton inicio de la pagina
Menú de categorías
Carrito

#### Body

Listado de productos
Detalle de producto

#### Navegación

Enrutamiento entre las diferentes vistas

#### Carrito

Vista del carrito de compras

#### Checkout

Formulario para completar los datos del usuario

#### Footer

Pié de pagina con las redes sociales del eCommerce
## Contacto

Para cualquier consulta o sugerencia, puedes contactarme a través de mi portafolio.

¡Gracias por visitar MP Indumentarias!


