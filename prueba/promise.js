//Promesas
//Resolve => ejecuta el llamado al Promise cuando el llamado es correcto
//Reject => cuando hubo un error

const aplicanDescuento = new Promise((resolve, reject) => {
    setTimeout( () => {
        let descuento = true;

        if(descuento) {
            resolve('Descuento aplicado')
        } else{
            reject('No se pudo aplicar el descuento')
        }
    }, 3000)
});

aplicanDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
})

//console.log(aplicanDescuento);