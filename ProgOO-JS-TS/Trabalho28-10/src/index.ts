// GRUPO 2
// Thamyres Magalhães
// Jullia Silveira
// Marcela Franco
// Márcio Rodrigues
// Júlia Onora 


abstract class Funcionario {
    private _id: number
    private _nome: string
    private idade: string
    private cpf: string
    private cargaHora: string
    private cargo: string
    private formacao: string
    private _remuneracao: number

    static qtdd:number = 0

    constructor(nome: string, idade: string, cpf: string, 
        horario: string, cargo: string, formacao: string, remuneracao: number){
            this._id = Funcionario.qtdd + 1
            this._nome = nome
            this.idade = idade
            this.cpf = cpf
            this.cargaHora = horario
            this.cargo = cargo
            this.formacao = formacao
            this._remuneracao = remuneracao

            Funcionario.qtdd ++
    }

    
    get id(): number{
        return this._id
    }

    get remuneracao():number{
        return this._remuneracao
    }


    get nome(): string{
        return this._nome
    }

    abstract gerarRemuneracao(): number
    
}

class Estagio extends Funcionario{
    private statusForms: string
    private bolsa: number

    constructor(nome: string, idade: string, cpf: string, 
        horario: string, formacao: string, 
        statusForms: string, bolsa: number){
            super(nome, idade, cpf, horario, 'estagiario', formacao, bolsa)
            this.statusForms = statusForms
            this.bolsa = bolsa
    }

    gerarRemuneracao(){
        return this.bolsa
    }
}

class Clt extends Funcionario{
    private salario: number

    constructor(nome: string, idade: string, cpf: string, 
            cargo: string, formacao: string, salario: number){
            super(nome, idade, cpf, '8', cargo, formacao, salario)
            this.salario = salario

    }




    gerarRemuneracao(){
        const inss = this.salario * 0.11
        let irpf

        if (this.salario < 3000){
            irpf = 0
        }

        else if (this.salario >= 3000 && this.salario < 5000){
            irpf = this.salario * 0.075
        }

        else{
            irpf = this.salario * 0.275
        }

        return this.salario - inss - irpf
    }


}


class Funcionarios {
    private funcionarios: Funcionario[] = []

    public adicionaFuncio(funcionario: Funcionario):void{
        if (funcionario.remuneracao > 0){
            this.funcionarios.push(funcionario)
            console.log(`${funcionario.nome} adicionado com sucesso `)
        }

        else{
            console.log(`${funcionario.nome} não foi adicionado`)
        }
        
    }

    public removeFuncio(item: Funcionario):void{
        this.funcionarios.splice(this.funcionarios.indexOf(item), 1)
        console.log(`${item.nome} removido`)
    }

    public show():void{
        console.table(this.funcionarios)
    }

    gerarTodasRemuneracoes(){
        for (let i = 0; i < this.funcionarios.length; i++){
            console.table(this.funcionarios[i].gerarRemuneracao())
        }
    }
    

}

const funcgeral = new Funcionarios()
const func1 = new Clt('Esdras', '34', '1', 'professor', 'TI', -5000)
const func2 = new Estagio('Jullia', '25', '2', '8', 'História', 'cursando', 3000)

funcgeral.adicionaFuncio(func1)
funcgeral.adicionaFuncio(func2)
// funcgeral.removeFuncio(func2)
funcgeral.gerarTodasRemuneracoes()
funcgeral.show()


// console.log(func1.gerarRemuneracao())
// console.log(func2.gerarRemuneracao())