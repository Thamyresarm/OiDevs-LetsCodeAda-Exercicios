import { Db } from "../db/db.js"
import datefns from "date-fns"

//Db.create
export async function criarPessoaFisica(dadosPessoaFisica){
    // const data = new Date(dadosPessoaFisica.data_nascimento)
    // const data = datefns.format(dadosPessoaFisica.data_nascimento,"yyyy")
    // console.log(data);
    const pessoa = await Db.create(dadosPessoaFisica,'tabelaPessoaFisica');

    console.log(pessoa);
}

//Db.find
export async function buscarPessoasFisicas(){
    const pessoas = await Db.find(pessoasFisica)
    console.log(pessoa)
}