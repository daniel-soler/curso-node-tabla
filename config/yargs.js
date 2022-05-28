const argv = require("yargs")
                  .option( "b", {
                    alias: "base",
                    type: "number",
                    demandOption: true,
                    describe: "Es la base de la tabla de multiplicar"
                  } )
                  .check( arg => { 
                    if ( isNaN(arg.base) ) throw "Base no es un número";
                    else  return true;
                   } )
                  .option( "h", {
                    alias: "hasta",
                    type: "number",
                    default: 10,
                    describe: "Es el número máximo por el que multiplicar"
                  } )
                  .check( arg => { 
                    if ( isNaN(arg.hasta) ) throw "Hasta no es un número";
                    else  return true;
                   } )
                  .option( "l", {
                    alias: "listar",
                    type: "boolean",
                    default: false,
                    describe: "Muestra la tabla en consola"
                  } )
                  .argv;

module.exports = argv;