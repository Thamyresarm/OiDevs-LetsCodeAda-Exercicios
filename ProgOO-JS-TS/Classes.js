class Pessoa {
    constructor(nome, idade, graduacao){
        this.nome = nome
        this.idade = idade
        this.graduacao = graduacao
    }

    apresentacao(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e sou formada em ${this.graduacao}`)
    }

    funcao(){
        console.log("Ainda não tenho função")
    }
}

class DesenvolvedorPython extends Pessoa{
    funcao(){
        console.log("Sou desenvolvedor(a) Python")
    }
}

class DesenvolvedorJavascript extends Pessoa{
    constructor(nome, idade, graduacao){
        super(nome, idade, graduacao)
    }
    funcao(){
        console.log("Sou desenvolvedor(a) Javascript")
    }
}

const pessoa1 = new Pessoa("Pessoa1", 25, "Analise de Sistemas")
const pessoa2 = new DesenvolvedorJavascript("Pessoa2", 30, "Ciência da Computação")
const pessoa3 = new DesenvolvedorPython("Pessoa3", 35, "Tecnologia da Informação")

pessoa1.apresentacao()
pessoa2.apresentacao()
pessoa3.apresentacao()

pessoa1.funcao()
pessoa2.funcao()
pessoa3.funcao()