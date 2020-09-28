import React, {Fragment, useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Producto from './component/Producto';
import Carrito from './component/Carrito';

function App() {
  //Crear listado de productos
  const [productos, guardarProductos] = useState([
    {id: 1, nombre: 'Remera de Star Wars', precio: 300},
    {id: 2, nombre: 'Remera de Chewbacca', precio: 400},
    {id: 3, nombre: 'Remera de Mandalorian', precio: 550},
    {id: 4, nombre: 'Remera de Leia', precio: 250},
  ]);

  //State para un carrito
  const [carrito, agregarProducto] = useState([]);

  //Obtener fecha
  const fecha = new Date().getFullYear()
  
  return (
    <Fragment>
      <Header 
        titulo='Tienda Virtual'
      />

      <h1>Lista de Remeras</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id} 
          producto={producto}
          productos={productos}
          carrito = {carrito}
          agregarProducto = {agregarProducto}
        />
      ))};

      <Carrito
        carrito = {carrito}
        agregarProducto = {agregarProducto}
      />

      <Footer 
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
