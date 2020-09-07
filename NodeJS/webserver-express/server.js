const express = require('express');
const app = express();

//Creamos una variable de entorno para que pueda escucharlo, que es una variable de entorno global
const port = process.env.PORT || 3000

const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));


//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    
    res.render('home', {
        nombre: 'Mateo',
        anio: new Date().getFullYear()
    })
});

app.get('/about', (req, res) =>{
    res.render('about', {
        nombre: 'Mateo',
        anio: new Date().getFullYear()
    });
});

app.listen(port);
console.log(`Server escuchando en http://localhost:${port}/`);