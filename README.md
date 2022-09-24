# Backend-server-ts

Backend-server-ts es un servidor desarrollado con Typescript, el cual contiene un entorno de desarrollo que posteriormente transpila a Javascript en la carpeta ./dist. El servidor se inicializa haciendo correr el archivo ./dist/app.js con node.js, para eso cuenta con su script correspondiente el cual se detalla más adelante.

## Instalación:


- Clonar el repositorio:

```
    git clone https://github.com/joshuacba08/Backend-server-ts.git
    cd Backend-server
```

- Instala todas las dependencias:

```
    $ npm install
```

- Inicializa el servidor:

```
    $ npm run start
```

## Rutas de la API

- Devuelve todos los productos: **GET** /api/products
- Devuelve un producto random: **GET** /api/products/random

## Rutas del server

- Muestra una vista para elegir *"ver productos"* o *"Agregar producto"*: **GET** "/"
- Muestra un formulario para agregar productos y una tabla con los últimos productos añadidos en tiempo real: **GET** "/products/add"
- Muestra una lista de todos los productos disponibles: **GET** "/products"
