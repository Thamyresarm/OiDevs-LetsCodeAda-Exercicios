import { Db } from "./db.js"

const dados = {
    nome: "Thamyres",
    idade: 25
}

async function criarCliente(dados) {
    const data = await Db.create(dados, "tabelaPessoaFisica")
    console.log(data)
}

async function buscarClientes() {
    const data = await Db.find("tabelaPessoaFisica")
    console.log('=================================')
    console.log(data)
}


 criarCliente(dados)
 buscarClientes()

// console.log(await buscarClientes())

// Promisse com .then .catch

// function criarCliente(dados) {
//     Db.create(dados, "tabelaPessoaFisica")
//         .then((data) => {console.log(data)})
// }

// criarCliente(dados)