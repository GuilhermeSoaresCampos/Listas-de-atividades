/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o programa informe qual é o número maior, 
com a seguinte frase: `O número maior é ${variavel} e o número menor é ${variavel}`, 
se ser iguais uma frase:  ` Os números ${variavel} e ${variavel} são iguais`.
Nome: Guilherme Henrique Soares Campos
*/

let teclado = require (`prompt-sync`)()

let a: number = parseFloat(teclado(`Digite um número: `));
let b: number = parseFloat(teclado(`Digite outro número: `));

if (a > b){
    console.log(`O número maior é ${a} e o número menor é ${b}`);
}
else if (a < b){
    console.log(`O número maior é ${b} e o número menor é ${a}`);
}
else if (a == b){
    console.log(`Os números ${a} e ${b} são iguais`);
};