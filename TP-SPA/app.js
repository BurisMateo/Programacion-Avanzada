const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/assets'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) =>{
    res.render('home');
});

app.get('/home', (req, res) =>{
    res.render('home');
});

app.get('/about', (req, res) =>{
    res.render('about');
});

app.get('/blog', (req, res) =>{
    res.render('blog');
});

app.get('/blog-post', (req, res) =>{
    res.render('blog-post');
});

app.get('/contact', (req, res) =>{
    res.render('contact');
});

app.get('/design-styles', (req, res) =>{
    res.render('design-styles');
});

app.get('/documentation', (req, res) =>{
    res.render('documentation');
});

app.get('/portfolio', (req, res) =>{
    res.render('portfolio');
});

app.get('/portfolio-alt', (req, res) =>{
    res.render('portfolio-alt');
});

app.get('/portfolio-hover', (req, res) =>{
    res.render('portfolio-hover');
});

app.get('/portfolio-item', (req, res) =>{
    res.render('portfolio-item');
});

app.get('/portfolio-masonry', (req, res) =>{
    res.render('portfolio-masonry');
});

app.get('/portfolio-raw', (req, res) =>{
    res.render('portfolio-raw');
});

app.listen(port);
console.log(`Server escuchando en http://localhost:${port}/`);