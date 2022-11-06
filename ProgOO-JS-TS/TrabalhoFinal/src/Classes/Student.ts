import { Person } from "./Person";

export class Student extends Person{
    private _grades: number[] = [];

    constructor(person: Person){
        super(person.name, person.birthdate, person.height)
    }   

    setGrade(index: number, nota: number): void{
        this._grades[index] = nota;
    }

    getGrades(): void{
        if(this._grades.length > 0){
            this._grades.forEach((grade, index) => console.table(index +": " + grade));
        } else {
            console.log("Aluno sem notas")
        }
    }

    addGrade(grade: number): void{
        this._grades.push(grade);

        console.log("Nota adicionada com sucesso!");
        
    }

    calculateAverage(): void{
        const total = this._grades.reduce((previous, current) => previous + current,0) 
        console.log("A média das Notas é " + total / this._grades.length);
    }
}
