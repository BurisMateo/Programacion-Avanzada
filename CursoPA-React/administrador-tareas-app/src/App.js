import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Tarea from './components/Tarea';

function App() {
  
  //tareas en el local storage
  let tareasIniciales = localStorage.getItem('tareas')
  if(!tareasIniciales) {
    tareasIniciales = []
  }

  const [ tareas, guardarTareas ] = useState(tareasIniciales)

  //useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    if(tareasIniciales){
      localStorage.setItem('tareas', JSON.stringify(tareas))
    }else {
      localStorage.setItem('tareas', JSON.stringify([]))
    }
  }, [tareas]);

  //Funcion que tome las tareas actuales y agreguela nueva
  const crearTarea = tarea => {
    guardarTareas([
      ...tareas,
      tarea
    ]);
  };

  //Funcion para eliminar una tarea
  const eliminarTarea = id => {
    const nuevaTarea = tareas.filter(tarea => tarea.id !== id)
    guardarTareas(nuevaTarea)
  };
  
  //Mensaje condicional
  const titulo = tareas.length === 0 ? 'No hay tareas' : 'Administra tus tareas'

  return (
    <>
    <h1>Administrador de Tareas</h1>

    <div className="container">
      <div className="row">
        <div className="oone-half column">
          <Formulario
            crearTarea={crearTarea}
          />
        </div>
        <div className="oone-half comlumn">
          <h2>{titulo}</h2>
          {
            tareas.map(tarea => (
              <Tarea 
                key={tarea.id}
                tarea={tarea}
                eliminarTarea={eliminarTarea}
              />
            ))
          }
        </div>
      </div>
    </div>

    </>
  );
}

export default App;
