//Spread Operator

let lenguajes = [ 'JS', 'PHP', 'Python'];
let librerias = ['React', 'VueJS', 'Django'];

//unir los arreglos en uno solo

// let combinacion = lenguajes.concat(librerias);
let combinacion = [... lenguajes, ... librerias];
console.log(combinacion);

let [ultimo] = [... lenguajes].reverse();
console.log(ultimo);