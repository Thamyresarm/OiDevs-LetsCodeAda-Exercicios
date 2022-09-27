const prompt = require('prompt-sync')();

media = parseFloat(prompt("Digite sua média: "))

if(media >= 9 ){
    console.log("Parabéns - você está na lista de alunos destaque do curso!")
} else {
    console.log("Desculpe, você não entrou na lista de alunos destaque")
}

