//required
const fs = require(`fs`);
const colours = require(`colors`);
//const fs = require(`express`);
//const fs = require(`../`);

let listarTabla = (base, limite = 10) => {

    console.log(`Tabla de ${base} hasta ${limite}`.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${ base * i }`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero!`.red);
            return;
        }

        let data = `Tabla del ${base}\n`;
        let fileName = `tabla-${base}-al-${limite}`;

        for (let i = 1; i <= limite; i++) {
            data += (` ${base} * ${i} = ${ base * i } \n`);
        }

        fs.writeFile(`tablas/${fileName}`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(fileName);

            console.log(`El archivo ${fileName} ha sido creado!`.green);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}