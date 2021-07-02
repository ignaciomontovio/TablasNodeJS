const argv = require('yargs')
            .option('b',{
                alias:'base',
                type:'number',
                description:'numero de tabla',
                demandOption:  true
            })
            .option('l',{
                alias:'listar',
                type:'string',
                description:'listar en consola',
                default: false
            })
            .option('h',{
                alias:'hasta',
                type:'number',
                description:'numero de multiplicaciones',
                demandOption:  true
            })
            .check((argv,options) =>  {
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero';
                }
                return  true;
            })
            .check((argv,options) =>  {
                if(isNaN(argv.h)){
                    throw 'hasta debe ser un numero';
                }
                return  true;
            })
.argv;

module.exports= argv;