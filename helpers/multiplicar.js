


const fs = require("fs");

const crearTabla = async ( base, hasta, listar ) => {

  let salida = "";

  for( let i = 1; i<=hasta ; i++) {
    salida += `${base} x ${i} = ${base*i}\n`;
  }

  if ( listar ) console.log( salida );

  try{
    const archivo = `./salida/tabla-${base}.txt`;
    fs.writeFileSync( archivo, salida );
    return archivo;
  } catch (err) {
    throw err;
  }


}




module.exports = {
  crearTabla
}