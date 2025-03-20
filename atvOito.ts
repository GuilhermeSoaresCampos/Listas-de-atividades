/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é Acutângulo, 
Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que 90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno: Guilherme Henrique Soares Campos
*/

let teclado = require (`prompt-sync`)()

let angulo: number = 0

angulo = parseInt(teclado(`Digite o ângulo do triângulo: `));

if (angulo > 90){
    console.log(`O triâgulo é um triângulo Obtusângulo`);
}
else if (angulo == 90){
    console.log(`O triângulo é um triângulo Retângulo`);
}
else if (angulo < 90){
    console.log(`O triângulo é um triângulo Acutângulo`);
};