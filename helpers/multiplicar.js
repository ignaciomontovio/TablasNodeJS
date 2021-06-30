const fs = require ('fs');

const crearArchivo = async (base = 5,listar) => { 
        try{

        let salida = '';
        for(let i=1;i<11;i++){
            salida += `${base} X ${i} = ${base*i}\n`;
        }
        if(listar)
        {
            console.log('=======================');
            console.log(`    Tabla del: ${base}`);
            console.log('=======================');
            console.log(salida);
        }
        fs.writeFileSync(`tabla-${base}.txt`,salida);
        return `tabla-${base}.txt`;
        }catch(err){
            throw err;
        }
}
module.exports = {
    crearArchivo
}