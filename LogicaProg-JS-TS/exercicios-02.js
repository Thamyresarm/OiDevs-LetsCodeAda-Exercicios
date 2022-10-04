console.log(``)
console.log(`---------------------------------------------------------------------`)
console.log(`#1 - Exercício`)
const message = "SE UMA IMAGEM VALE MAIS QUE MIL PALAVRAS, ENTÃO DIGA ISSO COM UMA IMAGEM"
// Dado a mensagem acima, me forneca as seguintes respostas
//   - Quantidade de caracteres da mensagem.
console.log("Tamanho: " + message.length);
//   - A primeira posição em quem a palavra "MIL" aparece.
console.log("Posição da palavra MIL: " + message.indexOf("MIL"))
//   - Troque a palavra "mil" por "TRÊS MIL"
trocandoMil = message.replace("MIL", "TRÊS MIL");
console.log(trocandoMil);
//   - Imprima na tela a mesma mensagem trocando as palavras "IMAGEM" por "PALAVRA" e "PALAVRAS" por "IMAGENS"
trocandoPalavra = trocandoMil.replaceAll("IMAGEM", "PALAVRA").replaceAll("PALAVRAS", "IMAGENS")
console.log(trocandoPalavra);
//   - Imprima na tela a expressão "ENTÃO DIGA ISSO COM UMA IMAGEM" utilizando função nativa.
expressaoReduzida = message.slice(42);
console.log(expressaoReduzida);
//   - Coloque a mensagem acima toda minúscula
expressaoReduzidaMinuscula = expressaoReduzida.toLowerCase();
console.log(expressaoReduzidaMinuscula);
//   - Imprima a mensagem acima com apenas a primeira letra maiúscula.
console.log(expressaoReduzidaMinuscula.replace(expressaoReduzidaMinuscula[0], expressaoReduzidaMinuscula[0].toUpperCase()));


console.log(``)
console.log(`---------------------------------------------------------------------`)
console.log(`#2 - Exercício`)
const email = "      USUAriO@EmAIL.COM.bR    "
// Um sistema de informação pretende capturar os emails de seus usuários através de um formulário, nós como desenvolvedores de backend precisamos garantir que os e-mails cadastrados sejam inseridos de forma correta em nosso banco de dados, independente se o usuário cadastrou-o com espaços em branco, com letras maiúscula. Diante disso, crie um algoritmo que "limpe" de forma coerente o e-mail acima
console.log(email.trim().toLowerCase());

console.log(``)
console.log(`---------------------------------------------------------------------`)
console.log(`#3 - Exercício`)
const resultadoDaConta = '2' + 3 * 4 + '45'
// Dado a conta acima, reescreva-a garantindo que o resultado seja 59 e não 21245, com está sendo impresso atualmente
const resultadoDaConta2 = Number('2') + 3 * 4 + Number('45');
console.log(resultadoDaConta2);

console.log(``)
console.log(`---------------------------------------------------------------------`)
console.log(`#4 - Exercício`)
const umaString = "Hello Word"
// Dado a string acima, retorne em uma nova const os valores invertidos. Exemplo: "droW olleH"
umaStringVet = umaString.split("");
umaStringVetInvertida = umaStringVet.reverse();
let umaStringInvertida = umaStringVetInvertida.join("");

console.log(umaStringInvertida);

console.log(``)
console.log(`---------------------------------------------------------------------`)
console.log(`#5 - Exercício`)
// Dados as variáveis
let varA = "A"
let varB = "B"
let varC = "C"
//Sobreescreva os valores de cada variável (perceba que ela estão declaradas com let) em que, varA receba o varB, varB receba o valor de varC e varC receba o valor de varA... Não pode colocar os valores manualmente, exemplo: varB = "C".
// Ao escrever o console.log(varA, varB, varC) imprima B, C, A
let aux = varA;
varA = varB;
varB = varC;
varC = aux;
console.log(varA, varB, varC);


console.log(``)
console.log(`---------------------------------------------------------------------`)
console.log(`#6 - Exercício`)
const array = [1, 2, 3, 1, 2, 4, 5, 5, 4, 10, 12, 10, 1, 13, 12, 14]
// Dado o array acima:
// Retorne um novo array que retire os resultados duplicados
const NovoArray = [...new Set(array)];
console.log(NovoArray);

// Retorne a posição do primeiro número 2 
console.log("Primeira Posição 2: " + array.indexOf(2));
// Retorne a posição do último número 2
console.log("Ultima Posição 2: " + array.lastIndexOf(2));
// Crie uma variável que verfique se existe o número 14. Retorne true ou false
console.log("Existe 14 ? " + array.includes(14));
// Crie uma variável que retorne uma string do array com os valores separados por traço, exemplo: 1 - 2 - 3 - 1 - 2 - 4 - 5 - 5 - 4 - 10 - 12 - 10 - 1 - 13 - 12 - 14
let novaString= array.join(" - ");

console.log(novaString);

console.log(``)
console.log(`---------------------------------------------------------------------`)
console.log(`#7 - Exercício`)
const arr1 = ["Fev", "Mar", "Abr", "Mai", "Jun"]
const arr2 = ["Jul", "Ago", "Set", "Out", "Nov"]
// Concatene os arrays acima em um novo array
let arr3 = arr1.concat(...arr2);
// Insira na última posição do novo array a string "Dez"
arr3.push("Dez");
// Insira na primeira posição do novo array a string "Jan"
arr3.unshift("Jan");
// Crie uma variável que mostre o tamanho do novo array.
tamArr3 = arr3.length;
console.log(arr3);
console.log(tamArr3);

console.log(``)
console.log(`---------------------------------------------------------------------`)
console.log(`#8 - Exercício`)
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// Dado o array acima, utilizando o laço de repetição (for ou while)
// Crie um novo array que receba os valores pares
const numeros2 = [];
for(let i = 0; i< numeros.length; i++){
   if(numeros[i] % 2 === 0) {
      numeros2.push(numeros[i]);
   }  
}
console.log(numeros2);
// Crie um novo array que receba os valores ímpares
const numeros3 = [];
for(let i = 0; i< numeros.length; i++){
   if(numeros[i] % 2 !== 0) {
      numeros3.push(numeros[i]);
   }  
}
console.log(numeros3);
// Mostre aos usuários quantos números pares e quantos números ímpares existem nesses dois novos arrays.
console.log("Numeros pares: " + numeros2.length + " Numeros Impares: " + numeros3.length);
// Crie um novo array que receba os números multiplicados por 3.
const numeros4 = [];
for(let i = 0; i< numeros.length; i++){
      numeros4.push(numeros[i]*3);
}
console.log(numeros4);

console.log(``)
console.log(`---------------------------------------------------------------------`)
console.log(`#9 - Exercício`)
// Utilizado o laço de repetição (for ou while)
// Crie uma variável que receba um número e imprima na tela sua tabuada
// Resultado esperado:
/**
   variável * 1 = resultado
   variável * 2 = resultado
   variável * 3 = resultado
   variável * 4 = resultado
   variável * 5 = resultado
   variável * 6 = resultado
   variável * 7 = resultado
   variável * 8 = resultado
   variável * 9 = resultado
   variável * 10 = resultado
 */
const variavel = 5;
for(let i = 0; i< numeros.length; i++){
   console.log(variavel + "x" + i + " = " + (variavel*i));
}

console.log(``)
console.log(`---------------------------------------------------------------------`)
console.log(`#10 - Exercício`)
// Implemente uma função que receba uma string e informe ao usuário se é um palíndromo ou não. Certifique-se que o usuário pode escrever letras maiúsculas, trate essa questão.
// Palíndromo = Frase ou palavra que se pode ler, indiferentemente, da esquerda para direita ou vice-versa”
// Exemplos de palíndromos: mirim, radar, ralar, reger, socos, sós, osso, Ana, radar, Renner
let palavra = "AMOR";
palavra = palavra.toLowerCase();
palavra = palavra.split("");
let palindromo = [];
palindromo.push(...palavra);

palindromo = palindromo.reverse();

let palavra2 = "";
let palindromo2 = "";

palavra.forEach(element => {
   palavra2 += element;
});

palindromo.forEach(element => {
   palindromo2 += element;
});
console.log(palavra2)
console.log(palindromo2)
if(palavra2 === palindromo2){
   console.log("é um palindromo!")
} else {
   console.log("não é um palindromo!")
}

console.log(``)
console.log(`---------------------------------------------------------------------`)
console.log(`#11 - Exercício`)
calculaTodos(1, 5) // retorna a soma de 1 + 2 + 3 + 4 + 5 é 15
// Implemente a função acima que recebe dois números e retorne a soma dos números passados nos parâmetros, garanta que o número passado no primeiro parâmetro seja menor que o número do segundo parâmetro, mostre erro ao usuário caso essa condição seja verdadeira.

function calculaTodos(num1, num2){
   let soma = 0;
   if(num2 < num1 ){
      console.log("Primeiro numero deve ser menos que o segundo");
   } else {
      for(let i = 1; i <= num2; i++ ){
         soma += i; 
      }
   }
   console.log(soma);
}
console.log(``)
console.log(`---------------------------------------------------------------------`)
console.log(`#12 - Exercício`)
removaDoArray([10, 20, 30, 40], 20) // Deve remover 20 e retornar [10, 30, 40]
// Implemente a função acima que recebe um array no primero parâmetro, e um número no segundo parâmetro.
// Deve remover "20" e retornar [10,30,40], Caso o segundo parâmetro não exista no array do primeiro parâmetro, informe ao usuário.

function removaDoArray(arr, num){
   if(arr.includes(num)){
      const index = arr.indexOf(num);
      arr.splice(index,1);
      console.log(arr);
   }else {
      console.log("Não existe " + num + " no array")
   }
}

console.log(``)
console.log(`---------------------------------------------------------------------`)
console.log(`#13 - Exercício`)
const notas = [7.5, 8, 3.7]
// Dado as notas acima, utilizando o laço de repetição for, mostre os seguintes valores em novas variáveis:
let media = 0;
let somatorio = 0; 
let maior = notas[0];
let menor = notas[0]; 
for(let i= 0; i < notas.length; i++ ){
   somatorio += notas[i];
   if(maior < notas[i]){
      maior = notas[i];
   } 

   if (menor > notas[i]){
      menor = notas[i];
   }
}
// - Calcule a média de todas as notas
media = (somatorio/notas.length);
console.log(media);
// - A maior nota
console.log(maior);
// - A menor nota
console.log(menor);
// - Escreva uma condição que, se a média for maior ou igual a 6.5, escreva "Aluno aprovado", caso a condição não seja verdadeira, escreva "Aluno reprovado"
if(media >= 6.5){
   console.log("Aluno Aprovado");   
}else {
   console.log("Aluno reprovado");
}

console.log(``)
console.log(`---------------------------------------------------------------------`)
console.log(`#14 - Exercício`)
repitaString('ola', 4) // returns 'olaolaolaola
// implemente a função acima que simplesmente repita a string dado um número de vezes
// Se inserir dados de tipos incorretos como, "number" no primeiro parâmetro ou "string" no segundo parâmetro, a função retorne a mensagem de erro ao usuário

function repitaString(palavra, num){
   let retorno = "";
   if(typeof(palavra) !== "string" || typeof(num) !== "number"){
      console.log("Tipo de entradas invalidas");
   } else {
      for(let i = 0; i < num; i++ ){
         retorno += palavra;
      }
   }
   console.log(retorno);
}

console.log(``)
console.log(`---------------------------------------------------------------------`)
console.log(`#15 - Exercício`)
// Precisamos fazer o controle de acesso de entrada de clientes de um teatro, para isso temos que criar um sistema que atenda os seguintes requisitos:
// 1) Crianças com menos de 2 anos não podem entrar, mesmo que acompanhadas dos pais
// 2) Crianças com 12 anos só podem entrar acompanhadas dos pais
// 3) Pessoas acima de 60 anos ganham desconto.

// Dado os requisitos acima, crie uma função que receba dois parâmetros, 
// 1º Parâmetro recebe a idade
// 2º Parâmetro recebe um boolean que informa se está com os pais ou não

//Modelos de respostas:
 acessoTeatro(2, true) // "Pessoas com menos de 2 anos não podem entrar no Teatro"
 acessoTeatro(11, true) // "Entrada Liberada"
 acessoTeatro(11, false) // "Menores de 12 anos não podem entrar no Teatro"
 acessoTeatro(11) // "Menores de 12 anos não podem entrar no Teatro"
 acessoTeatro(65) // "Entrada liberada, desconto fornecido"
 acessoTeatro(21) // "Entrada liberada"

function acessoTeatro(num, bool){
      if (num <= 2){
         console.log("Pessoas com menos de 2 anos não podem entrar no Teatro");
      }else {
         if(num < 12){
            if(bool === true){
               console.log("Entrada Liberada");
            }else{
               console.log("Menores de 12 anos não podem entrar no Teatro desacompanhadas");
            }
         }else if(num > 60){
            console.log("Entrada liberada, desconto fornecido");
         } 
      }
}

console.log(``)
console.log(`---------------------------------------------------------------------`)
console.log(`#16 - Exercício`)
const empresas = [
   { nome: "Empresa A", ramo: "financeiro", anoFundacacao: 1995 },
   { nome: "Empresa B", ramo: "alimentício", anoFundacacao: 2000 },
   { nome: "Empresa C", ramo: "financeiro", anoFundacacao: 2005 },
   { nome: "Empresa D", ramo: "educação", anoFundacacao: 1998 },
   { nome: "Empresa E", ramo: "alimentício", anoFundacacao: 1985 },
   { nome: "Empresa F", ramo: "financeiro", anoFundacacao: 1981 },
   { nome: "Empresa G", ramo: "tecnologia", anoFundacacao: 2006 },
   { nome: "Empresa H", ramo: "educação", anoFundacacao: 1986 },
   { nome: "Empresa I", ramo: "tecnologia", anoFundacacao: 1990 },
]
// Dado o array de objetos acima
// Filtre em um novo array apenas as empresas do ramo "financeiro"
const fin = empresas.filter(emp => emp.ramo == "financeiro");
console.log(fin);
// Filtre em um novo array apenas as empresas do ramo "educação" e "tecnologia"
const edutec = empresas.filter(emp => emp.ramo === "educação" || emp.ramo === "tecnologia");
console.log(edutec);
// Filtre em um novo array apenas as empresas que foram fundadas nos anos 80 e 90
const fundados = empresas.filter(emp => emp.anoFundacacao >= 1980 && emp.anoFundacacao < 2000 );
console.log(fundados);
// Filtre em um novo array as empresas que foram fundadas entre 1998 e 2005
const fundados2 = empresas.filter(emp => emp.anoFundacacao >= 1998 && emp.anoFundacacao <= 2005 );
console.log(fundados2);
// Filtre em um novo array a soma de todos os anos de fundação de todas as empresas

console.log(``)
console.log(`---------------------------------------------------------------------`)
console.log(`#17 - Exercício`)
   // Esse último exercício vamos fazer um sistema completo, vou elaborar com mais calma e envio a vocês até quarta-feira


