const argv = require('yargs')
.option('b', {
	alias: 'base',
	type: 'number',
	demandOption: true,
	describe: 'Me permite crear la tabla de esa base'
})
.option('l', {
	alias: 'listar',
	type: 'boolean',
	default: false,
	describe: 'Muestra la tabla en consola'
})
.option('i', {
	alias: 'limit',
	type: 'number',
	default: 10,
	describe: 'Me permite calcular hasta donde va la tabla'
})
.check((argv, options) =>{
	if(isNaN(argv.b)){
		throw "La base tiene que ser númerica";
	}
	return true;
})
.argv;

module.exports = argv;