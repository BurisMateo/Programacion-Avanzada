/*const getImagenPromesa = () => {
    const promesa = new Promise( ( resolve, reject) => {
        resolve('https://www.asdasd.com')
    })

    return promesa;
}

getImagenPromesa().then(console.log)
*/

const getImagen = async() => {
    const apiKey = '5OdkwafvSSwHpSvupJeMxlS8TVYEREwW';
    const respuesta = await fetch(`http://api.giphy.com/v1/stickers/random?api_key=${apiKey}`);
    const {data} = await respuesta.json();
    
    console.log(data);

    const {url} = data.images.original;
    
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img)
}

getImagen();