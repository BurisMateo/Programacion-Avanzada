//Destructuracion de Objetos

const aprendiendoJS = {
    version: {
        nueva: 'ES6+',
        anterior: 'ES5'
    },
    
    framework:['React', 'VueJS', 'Angular']
}

console.log(aprendiendoJS);

//Destructuracion anterior
// let version = aprendiendoJS.version;
// console.log(version);

//Destructuracion forma nueva
let {version, framework} = aprendiendoJS;
console.log(version);
console.log(framework);