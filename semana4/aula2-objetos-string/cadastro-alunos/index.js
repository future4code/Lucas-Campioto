
function cadastrar(){
	let nome = document.getElementById("nome").value;
	let idade = document.getElementById("idade").value;
	let email = document.getElementById("email").value;
	

	cadastros.innerHTML += "<div class='borda'>"+
							"<p>" + "Nome: " + nome + "</p>"+
							"<p>" + "Idade: " + idade + "</p>"+
							"<p>" + "Email: " + email + "</p>"+
							"</div>"

	
}

function limpaCampos(){
	let nome = document.getElementById("nome").value = '';
	let idade = document.getElementById("idade").value = '';
	let email = document.getElementById("email").value = '';
}