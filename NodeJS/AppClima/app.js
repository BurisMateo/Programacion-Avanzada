const { default: Axios } = require('axios');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        descripcion: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

const instance = Axios.create({
    baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Colón',
    header: {'x-rapidapi-key':'547c1c907bmsh3d1a717b24345afp12df25jsn4af2ce88b8fb'}
});

instance.get()
    .then( resp => {
        console.log(resp.data2);
    })
    .catch( err => {
        console.log('Error!!', err);
    });

    