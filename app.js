
const { crearTabla } = require("./helpers/multiplicar");

const argv = require( "./config/yargs.js" );

const color = require( "colors" );



console.clear()

// console.log(argv)


crearTabla( parseInt( argv.base ), argv.hasta, argv.listar )
    .then( archivo => console.log( archivo.blue.underline, "creado".green ) )
    .catch( err => console.log( err ) );

    