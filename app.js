const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs.js');
console.clear();

 crearArchivo(argv.base,argv.listar,argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.red,'Creado'))
    .catch(err => console.log(err));
