//exercicio 1
let num1 = 5
let num2 = 7

if(num1 > num2){
    console.log("Primeiro numero é maior que o segundo")
} else{
    console.log("Primeiro numero é menor que o segundo")
}

if(num1 < num2){
    console.log("Segundo numero é maior que o segundo")
} else{
    console.log("Segundo numero é menor que o segundo")
}

//Exercicio 2

let listaA = [1,2,3,4]
let listaB = [1,2,3,4,5,6,7,8]
let maior
let menor
let diferenca

if(listaA.length > listaB.length){
     maior = "Lista A "
     menor = "Lista B "
     diferenca = listaA.length - listaB.length;
} else {
     maior = "Lista B "
     menor = "Lista A "
     diferenca = listaB.length - listaA.length;
}


console.log(maior + "é maior que " + menor)
console.log(maior + "tem " + diferenca + " elementos a mais que " + menor)

//Exercicio 3

let amiga1 = "Tayane"
let amiga2 = "Alessandra"
let nomeMaior
let nomeMenor

if(amiga1.length > amiga2.length){
     nomeMaior = amiga1
     nomeMenor = amiga2
} else {
    nomeMaior = amiga2
    nomeMenor = amiga1
}

console.log(nomeMaior + " tem o nome maior que " + nomeMenor)

//Exercicio 4

let jessica = 15
let pamela = 21

if(jessica > 18){
   console.log("Você é maior de idade Jessica")
}

if(pamela > 18){
    console.log("Você é maior de idade Pamela")
}

//Exercicio 5

let usuario = {
    nome: 'Thamyres',
    idade: '30',
    nacionalidade: 'Brasileira'
}

switch(usuario.nacionalidade){
    case 'Brasileira': console.log("Brasileira")
    break

    case 'Italiana': console.log("Italiana")
    break

    case 'Estadunidense': console.log("Estadunidense")
    break
}

// Exercicio 6

usuario1 = {
    nome: 'Jessica',
    age: 15
 }

 usuario2 = {
    nome: 'Pamela',
    age: 21
 }

 if(usuario1.age > 18){
    console.log("Você é maior de idade Jessica")
 }
 
 if(usuario2.age > 18){
     console.log("Você é maior de idade Pamela")
 }

 //Exercicio 7

 if (false)
 if (null)
 if (undefined)
 if (0)
 if (NaN)
 if ('')
 if (document.all)

 //Exercicio 8

 if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)