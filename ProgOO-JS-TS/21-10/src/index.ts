class Animal {
    public especie: string
    public grupo: string
    public idade: number

    constructor(especie: string, grupo: string){
        this.especie = especie
        this.grupo = grupo
        this.idade = 0
    }
}

const cachorro = new Animal('Cachorro', 'Mamifero')
console.log(cachorro)