# Backend-server-ts

Backend-server-ts es un servidor desarrollado con Typescript, el cual contiene un entorno de desarrollo que posteriormente transpila a Javascript en la carpeta ./dist. El servidor se inicializa haciendo correr el archivo ./dist/app.js con node.js, para eso cuenta con su script correspondiente el cual se detalla más adelante.

## Scripts:
- Instala todas las dependencias:
```
    $ npm install
```

- Inicializa el servidor:
```
    $ npm run start
```

## Rutas

- Devuelve todos los productos: /api/products 
- Devuelve un producto random: /api/products/random