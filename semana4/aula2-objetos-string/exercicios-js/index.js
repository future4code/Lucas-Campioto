// Exercicio 1)

// RESPOSTA: O código faz calculos de investimento. Para cada tipo de investimento escolhido
// é feito o calculo de uma porcentagem diferente. A saída será 165 , "TIPO DE INVESTIMENTO INFORMADO INCORRETO"

// Exercicio 2)

// RESPOSTA: Objetos são estruturas que nos permite colocar mais de uma informação de diferentes
// tipos. São as caracteristicas de um objeto. Array são conjuntos de valores que são armazenados
// na variável. Utilizamos objetos quando queremos guardar caracteristicas do objeto. Array usamos 
// quando queremos guardar valores em grande quantidade.

// Exercicio 3)
// NÃO CONSEGUI ENTENDER MUITO BEM O ENUNCIADO E FIQUEI TRAVADO NO EXERCÍCIO E RESOLVI PULAR PARA
// OS PRÓXIMOS

//Exercicio 4)

let pessoa = {
	nome: 'Lucas',
	idade: 25,
	email: 'l_campioto@hotmail.com',
	endereco: 'Av. jão, 250'
}

console.log(pessoa)

function anominizarPessoa(){
	pessoa
	pessoa.nome = 'ANONIMO'
}

const anonimo = anominizarPessoa();
console.log(pessoa)

// Exercicio 5)

const filme = {
	titulo: 'Avengers: Endgame',
	ano: 2019,
	diretor: 'Anthony Russo',
	atores: ['Robert Downey Jr', 'Scarlett Johansson ', 'Tom Holland']
}

console.log("Venha Assistir o filme, " + filme.titulo + " de ANO: " + filme.ano + 
		" dirigido por " + filme.diretor + " estrelado por " + 
		filme.atores[0] + " , " + filme.atores[1] + " e " + filme.atores[2])