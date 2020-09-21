import React, { Component } from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {
    const {nombre, precio, id} = producto;

    //Agregar remeras al carrito
    const seleccionarProducto = () => {
        const producto = productos.filter(producto => producto.id==id)[0];
        console.log(producto);
    }

    return(
        <div>
        <h1>{nombre}</h1>
        <h2>{precio}</h2>
        <button type="button" onClick={ () => seleccionarProducto()}>
            Comprar
        </button>
        </div>
    )
}

export default Producto;