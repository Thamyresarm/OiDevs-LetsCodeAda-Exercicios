const prompt = require('prompt-sync')();

valor = parseInt(prompt("Digite o valor de compra do produto: "))

if(valor < 20 ){
    valor += (valor * 0.45)
} else {
    valor += (valor * 0.30)
}

console.log(`O valor de venda é ${valor}`)