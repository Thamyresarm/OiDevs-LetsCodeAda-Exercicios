//Exexicio 1

const nomes = ["Thamyres","Deborah","Bia","Bruna","Tay","Jamy"]

nomes.pop()

console.log(nomes)

// Exercicio 2

let notas = [7,5,10]

somatorio = notas[0] + notas[1] + notas[2]

media = somatorio / notas.length

console.log(media)

// Exercicio 3

const usuarios = [ 
	{ nome: 'Thiago', idade: 16 },
	{ nome: 'Jade', idade: 25 },
	{ nome: 'Patrícia', idade: 22 },
	{ nome: 'Carlos', idade: 52 },
]

usuarios.pop()

console.log(usuarios)

usuarios.push({ nome: 'Thamyres', idade: 30 })

console.log(usuarios)

//Exercicio 4

let lista1 = [1, 2, [9,8,7]]

let lista2 = [{nome: "Thamyres", apelido: "Thata"},
            {nome: "Ana", apelido: "apelido"}]

let usuario = {nome: "Thamyres",
endereco: {rua: "Av Brasil",
          numero: 3000 }}            

let lista3 = {vetor1: [1,2,3],
              vetor2: [4,5,6]}       

// Exercicio 5

//Exemplo 1 barra barra

/* Exemplo 2 barra ascteristico - ascteristico barra */

// Exercicio 6 

let lista = [7,8,5,10]

console.log(lista[lista.length-1])

// Exercicio 7

let usuario2 = {fotos: [{nome: "Foto1", data:"01/01/2001"},
                        {nome: "Foto2", data:"01/01/2002"},
                        {nome: "Foto3", data:"01/01/2003"}]
                    }
console.log(usuario2.fotos.length)

console.log(usuario2)

fotos2 = [{nome: "Foto9", data: "01/01/2009"},
          {nome: "Foto10", data: "01/01/2010"}]          

usuario2.fotos = fotos2;

console.log(usuario2)