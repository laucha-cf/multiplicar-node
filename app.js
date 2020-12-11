const argv = require(`./config/yargs`).argv;
const colours = require(`colors`);

const { crearArchivo, listarTabla } = require(`./multiplicar/multiplicar`);

//
//
//

//Recibe el comando yargs en la posicion 0
let comando = argv._[0];


//Dependiendo del comando...
switch (comando) {
    case `listar`:
        console.log(`listar`);
        listarTabla(argv.base, argv.limite);
        break;
    case `crear`:
        console.log(`crear`);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => { console.log(`Archivo ${archivo} creado!`.green); })
            .catch(err => { console.log(err); })
        break;
    default:
        console.log(`Comando no reconocido`);
}

//console.log(argv);


/*let parametro = argv[2];
let base = parametro.split(`=`)[1];

console.log(base);*/