


function adcTarefa(){
	let diaSemana = document.getElementById("diaDaSemana").value;
	let novaTarefa = document.getElementById("novaTarefa").value;
	let segunda = document.getElementById("segunda");
	let terca = document.getElementById("terca");
	let quarta = document.getElementById("quarta");
	let quinta = document.getElementById("quinta");
	let sexta = document.getElementById("sexta");
	let sabado = document.getElementById("sabado");
	let domingo = document.getElementById("domingo");

	if(diaSemana == "segunda"){
		segunda.innerHTML += "<li>" + novaTarefa + "</li>";	
	}else if(diaSemana == "terca"){
		terca.innerHTML += "<li>" + novaTarefa + "</li>";	
	}else if(diaSemana == "quarta"){
		quarta.innerHTML += "<li>" + novaTarefa + "</li>";	
	}else if(diaSemana == "quinta"){
		quinta.innerHTML += "<li>" + novaTarefa + "</li>";	
	}else if(diaSemana == "sexta"){
		sexta.innerHTML += "<li>" + novaTarefa + "</li>";	
	}else if(diaSemana == "sabado"){
		sabado.innerHTML += "<li>" + novaTarefa + "</li>";	
	}else if(diaSemana == "domingo"){
		domingo.innerHTML += "<li>" + novaTarefa + "</li>";	
	}
	
}

function limpaTexto(){
	let novaTarefa = document.getElementById("novaTarefa").value = '';
}