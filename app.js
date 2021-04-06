"use strict"

const {crearArchivo1, crearArchivo} = require('./helpers/multiplicar.js')
const argv = require('./config/yargs')


console.clear();


crearArchivo(argv.b, argv.l, argv.i)
	.then(nombreArchivo => console.log(nombreArchivo, "creada"))
	.catch(err => console.log(err));