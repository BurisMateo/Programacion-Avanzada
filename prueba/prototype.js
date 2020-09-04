/*
//Objeto comun
const zelda = {
    name: 'Zelda'
}

zelda.saludar = function(){
    console.log(`Hola soy ${this.name}`);
}
zelda.saludar();

const link = {
    name: 'Link'
}

link.saludar = function(){
    console.log(`Hola soy ${this.name}`);
}
link.saludar();
*/

const heroMethods = {
    saludar: function(){
        console.log(`Hola soy ${this.name}`);
    }
}

function Hero(name){
    const hero = Object.create(Hero.prototype);
    hero.name = name;
    return hero
}

Hero.prototype.saludar = function(){
    console.log(`Soy superhero ${this.name}`)
}

const zelda = Hero("Zelda")
zelda.saludar();

const link = Hero('Link')
link.saludar();