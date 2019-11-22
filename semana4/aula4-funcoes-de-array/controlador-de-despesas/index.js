
const arrayDespesas = []
let valorDespesasDigitado = document.getElementById("valor").value
let descricaoDespesasDigitado = document.getElementById("descricao").value
let tipoDespesasDigitado = document.getElementById("tipo").value


class despesas {
	constructor(valorDespesasDigitado, descricaoDespesasDigitado){
		this.valor = valorDespesasDigitado
		this.descricao = descricaoDespesasDigitado
	}
}

function novaInstancia(){

		novaDespesa = new despesas(valor.value, descricao.value)
		arrayDespesas.push(novaDespesa)
		console.log(arrayDespesas)
  
}



function validaCampos(){
	let valorDespesas = document.getElementById("valor").value
	let descricaoDespesas = document.getElementById("descricao").value
	
	if(valorDespesas === "" && descricaoDespesas === ""){
		alert("CAMPOS EM BRANCO!! Digite alguma informação para salvar")
	} else {

	}

}


function insereDespesas(){
	let valorDespesasDigitado = document.getElementById("valor").value
	let descricaoDespesasDigitado = document.getElementById("descricao").value
	let tipoDespesasDigitado = document.getElementById("tipo").value


	listaDespesas.innerHTML += "<div class='borda'>"+
							"<p>" + "Valor: " + valorDespesasDigitado + "<p>"+
							"<p>" + "Tipo: " + tipoDespesasDigitado + "</p>"+
							"<p>" + "Descrição: " + descricaoDespesasDigitado +  "</p>"+
							"</div>"
}






function limpaCampos(){

	let valorDespesas = document.getElementById("valor").value = ""
	let descricaoDespesas = document.getElementById("descricao").value = ""
	let tipo = document.getElementById("tipo").value = ""
	let tipoDetalhado = document.getElementById("tipoDetalhadas").value = ""
	let valorMinimo = document.getElementById("valorMinimo").value = ""
	let valoMaximo = document.getElementById("valorMaximo").value = ""

}
