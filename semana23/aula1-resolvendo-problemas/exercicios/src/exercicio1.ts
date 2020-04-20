/*
* EXERCICIO 1)
Considere que a gente só possa fazer três operações com string: 
adicionar um caractere a ele, remover um caractere dele ou substituir um caractere por outro. 
Dizemos que uma string é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ 
dessas operações. Escreva um método que determine se uma string é  'one edit' de outra.
*/ 

export const oneEdit = (compare:string, source:string): boolean => {

    let charQuantity = 0;
    for(const char of compare){
        if(source.indexOf(char) !== -1){
            charQuantity++;
        }
    }
    return(
        charQuantity <= source.length +1 &&
        charQuantity >= source.length -1
    );
}