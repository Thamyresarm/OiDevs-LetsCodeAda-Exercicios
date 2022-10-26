"use strict";
class Animal {
    constructor(especie, grupo) {
        this.especie = especie;
        this.grupo = grupo;
        this.idade = 0;
    }
}
const cachorro = new Animal('Cachorro', 'Mamifero');
console.log(cachorro);
