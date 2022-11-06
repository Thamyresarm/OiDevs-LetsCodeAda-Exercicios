import { Data } from "./Data";

export class Person {
    private _name: string;
    private _birthdate: Data;
    private _height: number;

    constructor(name: string, birthdate: Data, height: number) {
        this._name = name;
        this._birthdate = birthdate;
        this._height = height;
    }

    get name(): string {
        return this._name;
    }

    get birthdate(): Data {
        return this._birthdate;
    }

    get height(): number {
        return this._height;
    }

    private getIdade(birthdate: Data): number | undefined{
        const idade = birthdate.difference(new Data("06/11/2022"));
        return idade; //calculo da data atual - data de nascimento 
    }

    details(): string {
        const idade = this.getIdade(this.birthdate);
        return `${this.name} nasceu em ${this.birthdate.data}, tem ${idade} anos e ${this.height}m de altura.`;
    }

}