const dadosPessoas = [ ['Ana', 'Paulo', 'Márcia', 'Pedro', 'Beatriz'], 
                       [1.70, 1.72, 1.62, 1.90, 1.53],
                       [80, 90, 61, 84, 49] 
                    ]

let somaAltura = 0
let somaPeso = 0
let mediaAltura = 0
let mediaPeso = 0
let imc = 0 
let maiorAltura = dadosPessoas[1][0]
let menorAltura = dadosPessoas[1][0]
let maiorPeso = dadosPessoas[2][0]
let menorPeso = dadosPessoas[2][0]
let maiorImc = 0 
let menorImc = 999
let pessoaMaior
let pessoaMenor
let pessoaPesada
let pessoaLeve
let pessoaMaiorImc
let pessoaMenorImc

for (let i = 0; i < dadosPessoas[0].length; i++){

    somaAltura += dadosPessoas[1][i]
    somaPeso += dadosPessoas[2][i]

    if(maiorAltura < dadosPessoas[1][i]){
        pessoaMaior = dadosPessoas[0][i]
        maiorAltura = dadosPessoas[1][i]
    }

    if(menorAltura > dadosPessoas[1][i]){
        pessoaMenor = dadosPessoas[0][i]
        menorAltura = dadosPessoas[1][i]
    }

    if(maiorPeso < dadosPessoas[2][i]){
        pessoaPesada = dadosPessoas[0][i]
        maiorPeso = dadosPessoas[2][i]
    }

    if(menorPeso > dadosPessoas[2][i]){
        pessoaLeve = dadosPessoas[0][i]
        menorPeso = dadosPessoas[2][i]
    }
}

  mediaAltura = somaAltura/dadosPessoas[0].length
  mediaPeso = somaPeso/dadosPessoas[0].length
  console.log("")
  console.log(`a. A média de altura é ${mediaAltura}`)
  console.log("")

  console.log(`b. A média de Peso é ${mediaPeso}`)
  console.log("")

  console.log(`c.`)
  for (let i = 0; i < dadosPessoas[0].length; i++){
    imc = dadosPessoas[2][i] / (dadosPessoas[1][i] * dadosPessoas[1][i])
    console.log(`    Nome: ${dadosPessoas[0][i]} IMC: ${imc}`)

    if(maiorImc < imc){
        pessoaMaiorImc = dadosPessoas[0][i]
        maiorImc = imc
    }

    if(menorImc > imc){
        pessoaMenorImc = dadosPessoas[0][i]
        menorImc = imc
    }

  }
  console.log("")
  console.log(`d. ${pessoaMaior} é a maior pessoa com ${maiorAltura} de altura.`)
  console.log("")

  console.log(`e. ${pessoaMenor} é a menor pessoa com ${menorAltura} de altura.`)
  console.log("")

  console.log(`f. ${pessoaPesada} é a pessoa mais Pesada com ${maiorPeso} Kg.`)
  console.log("")

  console.log(`g. ${pessoaLeve} é a pessoa mais leve com ${menorPeso} Kg.`)
  console.log("")

  console.log(`h. ${pessoaMaiorImc} é a pessoa com o maior IMC e é de ${maiorImc}.`)
  console.log("")

  console.log(`i. ${pessoaMenorImc} é a pessoa com o menor IMC e é de ${menorImc}.`)
  console.log("")
