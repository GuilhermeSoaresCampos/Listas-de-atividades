/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata, 
sabendo que PI é um valor constante de 3.14159, 
o programa deve pedir os valores de RAIO e ALTURA, utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: Guilherme Henrique Soares Campos
*/

let teclado = require (`prompt-sync`)();

const pi : number = 3.14159;
let raio: number = 0;
let altura: number = 0; 
let volume: number = 0;

raio = parseInt(teclado(`Digite o valor do raio:`));
altura = parseInt(teclado(`Digite o valor da altura:`));

volume = pi * (raio * raio) * altura; 


console.log(`O volume da lata é: ${volume}`);

