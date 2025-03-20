/* (10 pontos)
10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    "Telefonou para a vítima?"
    "Esteve no local do crime?"
    "Mora perto da vítima?"
    "Devia para a vítima?"
    "Já trabalhou com a vítima?" 
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
Se a pessoa responder positivamente a 2 questões ela deve ser classificada/exibida como "Suspeita", 
entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
Aluno: Guilherme Henrique Soares Campos
*/

let teclado = require (`prompt-sync`)()

let resposta: number = 0;

console.log(`responda apenas com Sim ou Não`);

let pergunta: string = teclado(`Telefonou para a vítima? R: `);

if (pergunta == `Sim` || pergunta == `sim` || pergunta == `s`){
    resposta++
};

pergunta = teclado(`Esteve no local do crime? R: `);

if (pergunta == `Sim` || pergunta == `sim` || pergunta == `s`){
    resposta++
};

pergunta = teclado(`Mora perto da vítima? R: `);

if (pergunta == `Sim` || pergunta == `sim` || pergunta == `s`){
    resposta++
};

pergunta = teclado(`Devia para a vítima? R: `);

if (pergunta == `Sim` || pergunta == `sim` || pergunta == `s`){
    resposta++
};

pergunta = teclado(`Já trabalhou com a vítima? R: `);

if (pergunta == `Sim` || pergunta == `sim` || pergunta == `s`){
    resposta++
};

if (resposta == 5){
    console.log(`Declarado como Assassino`);
}
else if (resposta == 4 || resposta == 3){
    console.log(`Declarado como Cúmplice`);
}
else if (resposta == 2){
    console.log(`Declarado como Suspeito`);
}
else{
    console.log(`Declarado como Inocente`);
};

console.log(resposta)