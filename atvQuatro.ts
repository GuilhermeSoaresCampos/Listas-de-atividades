/* (5 pontos)

4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno:Guilherme Henrique Soares Campos
*/

let teclado = require (`prompt-sync`)();

let n1: number = 0;
let n2: number = 0;
let n3: number = 0;

let variavelMaior : number = 0;
let variavelMeio : number = 0;
let variavelMenor : number = 0; 

n1 = parseInt(teclado(`Digite o valor do número 1:`))
n2 = parseInt(teclado(`Digite o valor do número 2:`))
n3 = parseInt(teclado(`Digite o valor do número 3:`))

if (n1 > n2 && n1 > n3){
    variavelMaior = n1;
    if(n2 > n3) {
        variavelMeio = n2;
        variavelMenor = n3;
    }
else if (n3 > n2){
    variavelMeio = n3;
    variavelMenor = n2;
}
}

if (n2 > n1 && n2 > n3){
    variavelMaior = n2;
    if(n1 > n3){
        variavelMeio = n1;
        variavelMenor = n3;
    }
    else if (n3 > n1){
        variavelMeio = n3;
        variavelMenor = n1;
    }
}

if (n3 > n1 && n3 > n2){
    variavelMaior = n3;
    if(n1 > n2){
        variavelMeio = n1;
        variavelMenor = n2;
    }
    else if (n2 > n1){
        variavelMeio = n2;
        variavelMenor = n1;
    }
}
console.log(`Os números em ordem crescente são ${variavelMenor} , ${variavelMeio} , ${variavelMaior}`);