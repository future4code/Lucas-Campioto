// Exercicio 1) 
// RESPOSTA: Ele coloca os números pares dentro de um array e os ímpares dentro de outro array
// Usando o for para percorrer o array. A mensagem impressa será as quantidades de números de 
// todos os arrays

// Exercicio 2)
// RESPOSTA: O código esta atribuindo um array de numeros a outros 2 arrays com as condições
// se os numeros dentro do darray forem MENOR que infinito ele atribui os numeros dentro do array e
// se os numeros forem maiores que ZERO ele atribui os numeros dentro do segundo array. 

// Exercicio 3)
const quantidadeDeNumerosPares = 3
let i = 0
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
// }
// RESPOSTA: o código não funciona e entra em um lopping infinito.



// Exercicio 4A)

function verificaLados(num1,num2,num3){
	if(num1 === num2 && num1 === num3){
		console.log("É um triangulo Equilatero")
	} else if (num1 === num2){
		console.log("É um triangulo Isósceles")
	}else{
		console.log("É um triangulo Escaleno")
	}
}

verificaLados(1,1,1)

// Exercicio 4B)



// Exercicio 5)
let numero1
let numero2

function verifica(numero1, numero2){
	let dif = numero1 - numero2
	 if(numero1 > numero2){
		console.log("O maior é: " + numero1)
	}if(numero2 > numero1){
		console.log("O maior é: " + numero2)
	}if(numero1 % numero2 === 0){
		console.log("é divisivel")
	}if(numero1 % numero2 === 1){
		console.log(numero1 + " não é divisivel por " + numero2)
		
	}
		
	console.log("a diferença entre eles é " + dif)
}

verifica(4, 2)