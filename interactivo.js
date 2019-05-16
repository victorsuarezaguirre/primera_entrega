
const inquirer = require("inquirer");
const curso = require('./cursos');



inquirer
  .prompt([
  	{ type: 'confirm',
	  name: 'interes',
	  message: 'Deseas estudiar uno de estos cursos?',
	},
  ])
  .then(answers => {
  	if(answers.interes == true) {
  		inquirer
	  		.prompt([
	  			{
			      type: 'rawlist',
			      name: 'curso',
			      message: 'que curso te gustaria escoger',
			      choices: ['excel', 'node', 'caligrafia'],
			    },
	  		])
  			.then(respuesta => {
  				console.log('Para inscribirte al modulo de ' + respuesta.curso + ' es necesario que llenes los siguientes datos');
				inquirer
					.prompt([
		  			{
				      type: 'input',
				      name: 'nombre',
				      message: 'Nombre completo:',
				      default: 'Nombre y Apellidos'
				    },
				    {
				      type: 'input',
				      name: 'cedula',
				      message: 'Numero de cedula:',
				      default: 'Numero de cedula'
				    },
		  		])
		  		.then(inscripcion => {
						if (respuesta.curso == 'excel') {
							console.log('Felicitaciones ' + inscripcion.nombre + ' has quedado inscrito al curso de: ' + '\n' + 
												'ID: ' + curso.cursos.excel.id + '\n' + 
												'Nombre del curso: ' + curso.cursos.excel.nombre + '\n' +
												'Intensidad horaria: ' + curso.cursos.excel.duracion + '\n' +
												'Costo del curso: ' + curso.cursos.excel.valor + '\n' + 
												'quedaste inscrito con los siguientes datos: ' + '\n' +
												'Nombre: ' + inscripcion.nombre + '\n' + 
												'Cedula: ' + inscripcion.cedula)
						} else if (respuesta.curso == 'node') {
								console.log('Felicitaciones ' + inscripcion.nombre + ' has quedado inscrito al curso de: ' + '\n' + 
													'ID: ' + curso.cursos.node.id + '\n' + 
													'Nombre del curso: ' + curso.cursos.node.nombre + '\n' +
													'Intensidad horaria: ' + curso.cursos.node.duracion + '\n' +
													'Costo del curso: ' + curso.cursos.node.valor + '\n' + 
													'quedaste inscrito con los siguientes datos: ' + '\n' +
													'Nombre: ' + inscripcion.nombre + '\n' + 
													'Cedula: ' + inscripcion.cedula)
						} else if (respuesta.curso == 'caligrafia') {
								console.log('Felicitaciones ' + inscripcion.nombre + ' has quedado inscrito al curso de: ' + '\n' + 
													'ID: ' + curso.cursos.caligrafia.id + '\n' + 
													'Nombre del curso: ' + curso.cursos.caligrafia.nombre + '\n' +
													'Intensidad horaria: ' + curso.cursos.caligrafia.duracion + '\n' +
													'Costo del curso: ' + curso.cursos.caligrafia.valor + '\n' + 
													'quedaste inscrito con los siguientes datos: ' + '\n' +
													'Nombre: ' + inscripcion.nombre + '\n' + 
													'Cedula: ' + inscripcion.cedula)
						}
		  		})
  			})
  	}
  });

