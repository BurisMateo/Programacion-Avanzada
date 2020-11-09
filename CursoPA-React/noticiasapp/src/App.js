import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'

function App() {
  //definir la categoria y noticias
  const [ categoria, guardarCategoria] = useState('');
  const [ noticias, guardarNoticias] = useState([]);

  useEffect( () => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=8863f0b0c14a45ad8689d48fb7bf98d3`
      
      const respuesta = await fetch(url);
      const noticias = await respuesta.json()

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])

  return (
    <>
      <Header
        titulo= 'Buscador de Noticias'
      />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
      
        <ListadoNoticias 
          noticias={noticias}
        />


      </div>
    </>
  );
}

export default App;
