console.log(``) 
console.log(`---------------------------------------------------------------------`) 
console.log(`#1 - Exercício`) 
// Crie uma variÃ¡vel nome e substitua o texto abaixo com o valor da variÃ¡vel, faÃ§a a substituiÃ§Ã£o com pelo menos duas formas, com vÃ­rgula, com o operador + ou com template string (``)

const nome = "Thamyres"

 console.log(nome, " nasceu em 1992");
 console.log("Em 2022" + nome + " começou a programar");
 console.log(`Em 2010 ${nome} ingressou na faculdade`);
 console.log(`Em 2022 como programador, ${nome} conquistou seu primeiro emprego`);

 console.log(`---------------------------------------------------------------------`) 
 console.log(`#2 - Exercício`) 
// - Declare uma const meuAnodeNascimento que recebe o ano de seu nascimento Ex: 2001
const meuAnodeNascimento = 1992
// - Declare uma const anoAtual que recebe o ano atual Ex: 2022
const anoAtual = 2022
// - Exiba as constantes meuAnodeNascimento e anoAtual uma ao lado da outra no console.log()
console.log(`Nascimento: ${meuAnodeNascimento} Ano Atual: ${anoAtual}`)
// - Declare uma variÃ¡vel chamada minhaIdade que recebe anoAtual subtraÃ­do a meuAnodeNascimento. Imprima o valor no console. (NÃ£o digite o valore da varÃ­avel minhaIdade de forma manual)
const minhaIdade = anoAtual - meuAnodeNascimento
console.log(`Minha Idade: ${minhaIdade} anos`)
// - Declare uma variÃ¡vel chamada numeroCinco, que recebe 5 e:
const numeroCinco = 5
      // - Descomente o console.log abaixo na terceira linha, Os nÃºmeros nÃ£o devem ser digitados manualmente;
      // 1) Substitua a palavra "valor1" pelo anoAtual somado Ã  5;
const valor1 = anoAtual + numeroCinco
      // 2) Substitua a palavra "valor2" pela minhaIdade somada Ã  5;
const valor2 = minhaIdade + numeroCinco
      // 3)
console.log(`Em ${valor1}, estarei com ${valor2} anos.`)

console.log(`---------------------------------------------------------------------`) 
console.log(`#3 - Exercício`) 
/* 
  Aqui no Brasil a temperatura Ã© medida em Celsius. PorÃ©m, vocÃª foi contratado para uma empresa americana para trabalhar com programaÃ§Ã£o JavaScript e agora deverÃ¡ utilizar Fahrenheit no seu novo lar. Crie uma calculadora que faÃ§a essa conversÃ£o e escreva no terminal a seguinte mensagem.*/

  const celsius = 28
  const fahrenheit = celsius * 1.8 + 32

  //RETORNO:
  console.log(`A temperatura de ${celsius}°C é igual a Fahrenheit: ${fahrenheit}°F`)
  
/*  OBS:
  1) FÃ³rmula para o cÃ¡lculo ||  Â°F = Â°C x 9 Ã· 5 + 32
  2) Para ver se seu algoritmo estÃ¡ correto, utilize o site https://www.metric-conversions.org/pt-br/temperatura/celsius-em-fahrenheit.htm
*/

console.log(`---------------------------------------------------------------------`) 
console.log(`#4 - Exercício`) 
//Crie uma calculadora de IMC que imprima a frase abaixo. Onde tem **___** substitua por variÃ¡veis.

const pessoa = "Thamyres"
const idade = 30
const peso = 68.5
const altura = 1.58
const imc = peso / (altura*altura)
const nascimento = 1992
  
//RETORNO ESPERADO: 
  console.log(`${pessoa} tem ${idade} anos, pesa ${peso} kg
tem ${altura} de altura e seu IMC é de ${imc.toLocaleString('pt-br', {minimumFractionDigits: 2})}
${pessoa} nasceu em ${nascimento}`)
  
/* OBS:
    1 - Crie variÃ¡veis(let/const) para nome, idade, peso, altura, imc e ano de nascimento
    2 - Para o resultado de altura utiliza em metros, exemplo: 1.63 | 1.85 | 1.76 e etc...
    3 - O cÃ¡lculo do IMC Ã© peso / (alturaEmMetros * alturaEmMetros)
*/

console.log(`---------------------------------------------------------------------`) 
console.log(`#5 - Exercício`) 

 // Hoje em dia no Brasil os combustÃ­veis estÃ£o bem caros, diante disso, precisamos desenvolver um novo sistema para os carros em que o usuÃ¡rio digita o valor que ele tem em mÃ£os para o abastecimento em um app e o computador de bordo diz a ele quantos litros ele vai colocar de combustÃ­vel e quantos KM ele poderÃ¡ percorrer com esse combustÃ­vel, queremos que o usuÃ¡rio tenha a informaÃ§Ã£o por tipo de combustÃ­vel, para que ele possa tomar a melhor decisÃ£o de qual combustÃ­vel escolher.

 const valor = 100.00
 const litrosGasolina = valor / 5.966
 const litrosAlcool = valor / 4.632
 const kmGasolina = litrosGasolina * 10.2
 const kmAlcool = litrosAlcool * 9.8

 // Escreva no console:
console.log(`COLOCANDO R$${valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} é possível:
GASOLINA: Percorrer ${kmGasolina.toLocaleString('pt-br', {minimumFractionDigits: 2})}KM e colocar ${litrosGasolina.toLocaleString('pt-br', {minimumFractionDigits: 2})} litros
ÁLCOOL: Percorrer ${kmAlcool.toLocaleString('pt-br', {minimumFractionDigits: 2})}KM e colocar ${litrosAlcool.toLocaleString('pt-br', {minimumFractionDigits: 2})} litros`)

 /* OBS:
   - Carros andam 10.2KM com gasolina
   - Carros andam 9.8KM com alcool
   - Os valores por litro atuais nos postos estÃ£o:  
        - GASOLINA = R$5.966
        - ÃLCOOL   = R$4.632
*/
console.log(`---------------------------------------------------------------------`) 
console.log(``) 