
const arrayDePost = []



let tituloDigitado = document.getElementById("titulo").value
let autorDigitado = document.getElementById("autor").value
let mensagemDigitado = document.getElementById("mensagem").value

function inserePost(){

let titulo = document.getElementById("titulo").value
let autor = document.getElementById("autor").value
let mensagem = document.getElementById("mensagem").value
posts.innerHTML += "<div class='borda'>"+
							"<h3>" + "Titulo: " + titulo + "</h3>"+
							"<p>" + "Autor: " + autor + "</p>"+
							"<p>"  + mensagem + "</p>"+
							"</div>"

}

class post {
	constructor(tituloDigitado, autorDigitado, mensagemDigitado){
		this.titulo = tituloDigitado
		this.autor = autorDigitado
		this.mensagem = mensagemDigitado
	}



}

function novaInstancia(){
		novoPost = new post(titulo.value, autor.value, mensagem.value)
		arrayDePost.push(novoPost)
		console.log(arrayDePost)

	}

function limpaCampos(){
	let tituloDigitado = document.getElementById("titulo").value = ""
	let autorDigitado = document.getElementById("autor").value = ""
	let mensagemDigitado = document.getElementById("mensagem").value = ""
}


