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
            .check((argv,options) =>  {
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero';
                }
                return  true;
            })
.argv;