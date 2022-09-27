const prompt = require('prompt-sync')();

temp = parseFloat(prompt("Digite a temperatura: "))

if(temp >= 26 ){
    atividade = "Natação"
} else if(15 <= temp && temp < 26){
    atividade = "Tênis"    
}  else if(5 <= temp && temp < 15){
    atividade = "Golfe"    
} else {
    atividade = "Esqui"
}

console.log(`${atividade} é a atividade sujerida para a temperatura ${temp}°C`)

