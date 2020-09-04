//Establece this usando call

function saludar(){
    console.log(`Hola soy ${this.name} ${this.lastName}`);
};

const mateo = {
    name: 'Mateo',
    lastName: 'Buris'
}

saludar.call(mateo);

function caminar(metros, direccion){
    console.log(`${this.name} camina ${metros} metros hacia ${direccion}`);
}

caminar.call(mateo, 400, "Sur");

//Establecer this usando apply y pasar argumentos a la funcion

//caminar.apply(mateo, [800, 'Noroeste']);

const valores = [800 , 'Noroeste']
caminar.apply(mateo, valores);

//Establecer this en una funcion usando bind

const daniel = { name: 'Daniel', lastName: 'Sanchez'};
const danielSaluda = saludar.bind(daniel);
danielSaluda();

const danielCamina = caminar.bind(daniel);
danielCamina(1000, 'Este');