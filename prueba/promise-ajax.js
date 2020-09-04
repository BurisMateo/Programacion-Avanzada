const descargarUsuarios = cantidad => new Promise((res, rej) => {
    //pasar la cantidad a la API
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`

    //llamado a ajax
    const xhr = new XMLHttpRequest();

    //abrir conexion
    xhr.open('GET', api, true);

    //on load
    xhr.onload = () => {
        if(xhr.status == 200){
            res(JSON.parse(xhr.responseText).results)
        }else{
            rej(Error(xhr.statusText));
        }
    }

//end
xhr.send()
});

descargarUsuarios(10).then(
    miembros => imprimirHTML(miembros),
    error => console.error(
        new Error('Hubo un Error')
    )
)

function imprimirHTML(usuarios){
    let html = '';
    usuarios.forEach(usuario => {
        html += `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                Pais: ${usuario.nat}
                Imagen:
                    <img src="${usuario.picture.medium}"></img>
            </li>
        `;
    })
    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
};