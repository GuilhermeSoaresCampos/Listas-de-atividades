/* (10 pontos)
7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
Nome Aluno:Guilherme Henrique Soares Campos
*/

let teclado = require (`prompt-sync`)();
let total: number = 0;

console.log(`+==============+`);
console.log(`+== Sistema de maçã ==+`);
console.log(`+==== quantidade de maçã menor ===+`);
console.log(`+= que 12 o valor é R$ 0,30 =+`);
console.log(`+==== quantidade de maçã maior ===+`);
console.log(`+=== ou igual a 12 ===+`);
console.log(`+=== o valor é R$ 0,25 ===+`);
console.log(`+==============+`);


let maca: number = parseInt(teclado(`Digite a quantidade de maçãs desejadas:`));

if (maca <12) {
    total = maca * 0.30;

}
else if (maca >= 12) {
    total = maca * 0.25;
}
else{
    console.log(`Algo deu errado!`)
}

console.log(`A quantidade de ${maca} o preço pago é R$ ${total}`);