"use strict"
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base, listar=false, limit) => {
	try{
		let salida = '';
		let consola = '';

		for(let i=0; i<=limit; i++){
			if(i===limit){
				salida += `${base} X ${i} = ${base*i}`;
				consola += `${colors.blue(base)} ${colors.yellow('X')} ${colors.blue(i)} = ${colors.cyan(base*i)}`;
			}else{
				salida += `${base} X ${i} = ${base*i}\n`;
				consola += `${colors.blue(base)} ${colors.yellow('X')} ${colors.blue(i)} = ${colors.cyan(base*i)}\n`;
			}
			
		}

		if (listar) {
			console.log("=========================".green);
			console.log("        Tabla 	"+colors.green(base));
			console.log("=========================".green);
			console.log(consola)
		}

		fs.writeFileSync(`./salida/tabal-${base}.txt`, salida);

		return `tabla-${base}.txt`;

	}catch(err){
		throw err;
	}
}



const crearArchivo1 = (base) => {
	return new Promise((resolve, reject) => {
		console.log("=========================");
		console.log("        Tabla 	"+base);
		console.log("=========================");

		let salida = '';

		for(let i=0; i<=10; i++){
			if(i===10){
				salida += `${base} x ${i} = ${base*i}`;
			}else{
				salida += `${base} x ${i} = ${base*i}\n`;
			}
			
		}
		console.log(salida);
		fs.writeFile(`tabal-${base}.txt`, salida, (err) => {
			if (err){
				reject(err)
			}
	
			resolve(`tabla-${base}.txt`);

		});
	})
}

module.exports = {
	crearArchivo,
	crearArchivo1
}