const curso = require('./cursos');


function showCursos() {
	console.log(curso.cursos.excel);
	setTimeout(function() {
		console.log(curso.cursos.node);
	}, 2000)
	setTimeout(function() {
		console.log(curso.cursos.caligrafia);
	}, 4000)
	setTimeout(function() {
		const interactivo = require('./interactivo');
	}, 5000)

};
	
showCursos();

