#!/bin/bash

# Script para generar el archivo README.md para el proyecto Clothing Store

cat << 'EOF' > README.md
# Clothing Store (React)

Este proyecto es una tienda de ropa en línea creada con **React** y **Vite**. Permite a los usuarios navegar por una colección de ropa, añadir artículos a un carrito de la compra y gestionar el contenido del mismo.

## Características

-   **Catálogo de productos:** Muestra una lista de prendas de vestir con imágenes, nombres, descripciones y precios.
-   **Carrito de la compra:** Los usuarios pueden añadir productos a su carrito de la compra.
-   **Gestión del carrito:**
    -   Ver los productos en el carrito.
    -   Aumentar o disminuir la cantidad de cada producto.
    -   Eliminar productos del carrito.
    -   Vaciar todo el carrito.
    -   Ver el importe total a pagar.

## Tecnologías utilizadas

Este proyecto se ha creado con las siguientes tecnologías:

-   [React](https://react.dev/): Una biblioteca de JavaScript para construir interfaces de usuario.
-   [Vite](https://vitejs.dev/): Una herramienta de compilación que pretende proporcionar una experiencia de desarrollo más rápida y ágil para los proyectos web modernos.

## Plugins de Vite

Actualmente, se utilizan los siguientes plugins oficiales:

-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) utiliza [SWC](https://swc.rs/) para Fast Refresh.

## Primeros pasos

Para poner en marcha una copia local, siga estos sencillos pasos.

### Prerrequisitos

Asegúrate de que tienes `node` y `npm` instalados en tu máquina.

-   npm
    ```sh
    npm install npm@latest -g
    ```

### Instalación

1.  Clona el repositorio
    ```sh
    git clone [https://github.com/tu_usuario/clothing-store.git](https://github.com/tu_usuario/clothing-store.git)
    ```
2.  Instala los paquetes NPM
    ```sh
    npm install
    ```
3.  Ejecuta la aplicación
    ```sh
    npm run dev
    ```

## Scripts disponibles

En el directorio del proyecto, puede ejecutar:

-   `npm run dev`: Inicia la aplicación en modo de desarrollo.
-   `npm run build`: Construye la aplicación para producción en la carpeta `build`.
-   `npm run lint`: Ejecuta el linter para comprobar si hay errores en el código.
-   `npm run preview`: Previsualiza la construcción de producción. [cite: teslabv/react-course/React-Course-7f6d6fd9f57c1c03fbeb
