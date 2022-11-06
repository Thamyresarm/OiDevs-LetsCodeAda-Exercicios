import { Person } from "./Person";

export class Professor extends Person{
    private _discipline: string; 

    constructor(person: Person, discipline: string){
        super(person.name, person.birthdate, person.height);
        this._discipline = discipline;
    }

    get discipline(): string{
        return this._discipline;
    }
}