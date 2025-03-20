/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.  
Nome Aluno:Guilherme Henrique Soares Campos
*/

let teclado = require (`prompt-sync`)();

let letra: string = teclado(`Digite uma letra do alfabeto:`);



if(letra == `A`|| letra == `E`|| letra == `I`|| letra == `O`|| letra == `U`){
console.log(`A letra ${letra} é uma vogal`);
    }
    else{
        console.log(`A letra ${letra} é uma consoante`)
    };
