const { crearArchivo } = require('./helpers/multiplicar');
console.clear();

 crearArchivo(argv.base,argv.listar)
    .then(nombreArchivo => console.log(nombreArchivo,'Creado'))
    .catch(err => console.log(err));


// console.log(process.argv);
// console.log(argv);









// console.log(process.argv);
// const [,,arg3] = process.argv;
// const [,base] = arg3.split('=');
// console.log(base);




// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo,'Creado'))
//     .catch(err => console.log(err));
