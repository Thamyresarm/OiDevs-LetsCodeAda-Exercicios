import { Person } from './Person';

export class Agenda {
    private agenda: Person[] = [];

    addPerson(person: Person): void {
        if(this.agenda.length < 10){
            this.agenda.push(person);

            console.log("Pessoa Adicionada com sucesso!")
        } else {
            console.log("Agenda lotada! Remova algum item para poder adicionar! ")
        }
        console.log(person.name + " adicionado(a) com sucesso!");
    }

    removePerson(name: string): void {
        const personIndex = this.agenda.findIndex(item => item.name === name);

        this.agenda.splice(personIndex, 1);

        console.log(name + " removido(a) com sucesso!");
    }

    findPerson(name: string): void {
        const personIndex = this.agenda.findIndex(item => item.name === name);

        console.log(name + " está no index: " + personIndex);
    }

    showAgenda(): void {
        if (this.agenda.length === 0) {
            console.log("Agenda vazia!")
        } else {
            this.agenda.forEach((person, index) =>
                console.log(`${index}: ${person.details()}`)
            );
        }
    }

    showPerson(index: number): void {
        const person = this.agenda[index];

        console.log(person.details());
    }
}