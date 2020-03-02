const arrayDeNumeros: number[] = [1,2,3,4,5,6,7,8,9,10]

type resposta = {
    montanteNumeros: number,
    numerosImpares: number,
    somaDosNumeros: number,
}

function verifyArray(array: number[]): resposta{
    let soma: number = 0
    let todosNumerosImpares: number = 0

    array.forEach( item => {
        soma += item

        if(item % 2 !== 0){
            todosNumerosImpares += 1
        }
    })
    
    const result:resposta = {
        montanteNumeros: array.length,
        numerosImpares: todosNumerosImpares,
        somaDosNumeros: soma,
    }

    return result
}

console.log(verifyArray(arrayDeNumeros))