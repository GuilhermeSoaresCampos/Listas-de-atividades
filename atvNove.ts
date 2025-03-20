/* (15 pontos)
9- Para doar sangue é necessário ter entre 18 e 67 anos e possuir mais de 60Kg. 
Faça um aplicativo que pergunte a idade de uma pessoa e seu peso e diga se ela pode doar sangue ou não, 
caso não diga o(s) motivo(s).
Nome: Guilherme Henrique Soares Campos
*/

let teclado = require (`prompt-sync`)();

let idade: number = parseInt(teclado(`Digite a sua idade: `));
let peso: number = parseInt(teclado(`Digite o seu peso: `));

if (idade > 18 && idade < 67 && peso > 60){
    console.log(`Você pode doar sangue`)
}
else{
    console.log(`Você não poderá doar sangue porque não tem idade/peso adequado`)
};