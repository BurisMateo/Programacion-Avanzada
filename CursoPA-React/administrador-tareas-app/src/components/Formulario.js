import React, {useState} from 'react';
import uuid from 'react-uuid';

const Formulario = ({crearTarea}) => {
    
    //Crear State de Tareas
    const [tarea, actualizarTarea] = useState({
        nombretarea: '',
        tipotarea: '',
        fecha: '',
        hora: '',
        detalle: ''
    });

    const [ error, actualizarError] = useState(false)

    //Funcion que se ejecuta cada vez que el usuario escribe en el input
    const actualizarState = e => {
        actualizarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    };

    //Extraer los valores
    const { nombretarea, tipotarea, fecha, hora, detalle} = tarea;

    //Cuando el usuario presione agregar tarea
    const submitTarea = e => {
        e.preventDefault();
        
        //Validar
        if(nombretarea.trim() === "" || tipotarea.trim() === "" || fecha.trim() === "" || hora.trim() === "" || detalle.trim() === ""){
            actualizarError(true);
            return;
        }

        //Eliminar mensaje
        actualizarError(false);

        //Asignar un ID
        tarea.id = uuid();
        console.log(tarea); 

        //Crear la tarea
        crearTarea(tarea);

        //Reinicar el form
        actualizarTarea({
            nombretarea: '',
            tipotarea: '',
            fecha: '',
            hora: '',
            detalle: ''
        });
    }

    return ( 
        <>
            <h2>Crear Tareas</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form onSubmit={submitTarea}>

                <label>Nombre de Tarea</label>
                <input 
                    type="text"
                    name="nombretarea"
                    className="u-full-width"
                    placeholder="Nombre de la Tarea"
                    onChange={actualizarState}
                    value={nombretarea}
                />
                <label>Tipo de Tarea</label>
                <input 
                    type="text"
                    name="tipotarea"
                    className="u-full-width"
                    placeholder="Tipo de la Tarea"
                    onChange={actualizarState}
                    value={tipotarea}
                />
                
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Detalle de la Tarea</label>
                <textarea
                    className="u-full-width"
                    name="detalle"
                    onChange={actualizarState}
                    value={detalle}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Tarea</button>
            </form>
        </>
     );
}
 
export default Formulario;