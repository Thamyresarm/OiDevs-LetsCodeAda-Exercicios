// import { Data } from "./Classes/Data"
// import { Person } from "./Classes/Person"
// import { Professor } from "./Classes/Professor"
// import { Student } from "./Classes/Student"

// const aluno = new Student(new Person("Leo", new Data("02/07/1993"), 1.80))
// const professor = new Professor(new Person("Thamyres", new Data("24/06/1992"), 1.58), "Matemática")

// console.log(professor.details())
// console.log(professor.discipline);

// console.log(aluno.details())
// aluno.addGrade(5)
// aluno.addGrade(1)
// aluno.calculateAverage()

import prompt from 'prompt'
import { Data } from '../Classes/Data';
import { Person } from '../Classes/Person';
import { Professor } from '../Classes/Professor'
import { Student } from '../Classes/Student'
import { main } from '../index'

export const mainEscola = async function () {
    let principal = true;
    let condition = true;

    while (principal) {
        console.clear()
        console.log(`=============== Selecione uma opção =========================`)
        console.log(`1 - Area da Secretaria`)
        console.log(`2 - Area do Professor`)
        console.log(`3 - Area do Aluno`)
        console.log(`4 - Menu Apps`)
        console.log(`5 - Sair`)
        const response = await prompt.get(['opcao']);

        switch (Number(response.opcao)) {
            case 1:
                condition = true;
                console.clear()
                while (condition) {
                    console.clear()
                    console.log(`=============== Secretaria =========================`)
                    console.log(`1 - Cadastrar Professor`)
                    console.log(`2 - Listar Professores`)
                    console.log(`3 - Cadastrar Aluno`)
                    console.log(`4 - Listar Alunos`)
                    console.log(`5 - Voltar ao menu principal`)
                    console.log(`6 - Sair`)
                    const secretaria = await prompt.get(['option']);

                    if (Number(secretaria.option) === 1) {
                        console.clear()
                        console.log(`=============== Cadastro Professor =========================`)
                        const professor = await prompt.get(['nome', 'nascimento', 'altura', 'disciplina']);
                        professors.push(
                            new Professor(
                                new Person(
                                    professor.nome.toString(),
                                    new Data(professor.nascimento.toString()),
                                    Number(professor.altura)
                                ),
                                professor.disciplina.toString()
                            )
                        )
                        console.log(`Professor(a) ${professor.nome} cadastrado(a) com sucesso!`)

                        console.log(`1 - Continuar`)
                        console.log(`2 - Voltar ao menu Principal`)
                        console.log(`3 - Sair`)
                        const submenu = await prompt.get(['opcao']);

                        switch (Number(submenu.opcao)) {
                            case 1: condition = true;
                                break;

                            case 2: condition = false;
                                break;

                            case 3: principal = false;
                                condition = false;
                                break;
                        }
                    } else if (Number(secretaria.option) === 2) {
                        console.clear()
                        console.log(`=============== Listagem de Professores =========================`)

                        professors.forEach(professor => console.log(professor.details()))

                        console.log(`1 - Continuar`)
                        console.log(`2 - Voltar ao menu Principal`)
                        console.log(`3 - Sair`)
                        const submenu = await prompt.get(['opcao']);

                        switch (Number(submenu.opcao)) {
                            case 1: condition = true;
                                break;

                            case 2: condition = false;
                                break;

                            case 3: principal = false;
                                condition = false;
                                break;
                        }

                    } else if (Number(secretaria.option) === 3) {
                        console.clear()
                        console.log(`=============== Cadastro Aluno =========================`)

                        const student = await prompt.get(['nome', 'nascimento', 'altura']);
                        students.push(
                            new Student(
                                new Person(
                                    student.nome.toString(),
                                    new Data(student.nascimento.toString()),
                                    Number(student.altura)
                                )
                            )
                        )
                        console.log(`Aluno(a) ${student.nome} cadastrado(a) com sucesso!`)


                        console.log(`1 - Continuar`)
                        console.log(`2 - Voltar ao menu Principal`)
                        console.log(`3 - Sair`)
                        const submenu = await prompt.get(['opcao']);

                        switch (Number(submenu.opcao)) {
                            case 1: condition = true;
                                break;

                            case 2: condition = false;
                                break;

                            case 3: principal = false;
                                condition = false;
                                break;
                        }
                    } else if (Number(secretaria.option) === 4) {
                        console.clear()
                        console.log(`=============== Listagem de Alunos =========================`)

                        students.forEach(student => console.log(student.details()))

                        console.log(`1 - Continuar`)
                        console.log(`2 - Voltar ao menu Principal`)
                        console.log(`3 - Sair`)
                        const submenu = await prompt.get(['opcao']);

                        switch (Number(submenu.opcao)) {
                            case 1: condition = true;
                                break;

                            case 2: condition = false;
                                break;

                            case 3: principal = false;
                                condition = false;
                                break;
                        }
                    } else if (Number(secretaria.option) === 5) {
                        condition = false
                    } else if (Number(secretaria.option) === 6) {
                        principal = false
                        condition = false
                    } else {
                        console.log("Digite um valor válido!")
                    }
                }
                break;

            case 2:
                condition = true;
                console.clear()
                console.log(`=============== Digite seu nome para logar =========================`)
                const response = await prompt.get(['professor']);

                if (professors.find(professor => professor.name === response.professor.toString())) {
                    while (condition) {
                        console.clear()
                        console.log(`=============== Bem vindo(a) ${response.professor.toString()} =========================`)
                        console.log(`1 - Adicionar Nota de Aluno`)
                        console.log(`2 - Corrigir Nota de Aluno`)
                        console.log(`3 - Voltar ao Menu Principal`)
                        console.log(`4 - Sair`)
                        const student = await prompt.get(['option']);

                        if (Number(student.option) === 1) {
                            console.clear()
                            console.log("Digite o nome do aluno que deseja adicionar a nota: ")
                            const option = await prompt.get(['aluno']);

                            if (students.find(student => student.name === option.aluno.toString())) {
                                const studentToAddGrades = students.find(student => student.name === option.aluno.toString())
                                const grade = await prompt.get(['grade']);

                                console.log(``)
                                studentToAddGrades?.addGrade(Number(grade.grade));
                                console.log(``)
                                studentToAddGrades?.calculateAverage();

                                console.log(`1 - Continuar`)
                                console.log(`2 - Voltar ao menu Principal`)
                                console.log(`3 - Sair`)
                                const submenu = await prompt.get(['opcao']);

                                switch (Number(submenu.opcao)) {
                                    case 1: condition = true;
                                        break;

                                    case 2: condition = false;
                                        break;

                                    case 3: principal = false;
                                        condition = false;
                                        break;
                                }
                            } else {
                                console.clear()
                                console.log("Aluno(a) não localizado!")

                                console.log(`1 - Continuar`)
                                console.log(`2 - Voltar ao menu Principal`)
                                console.log(`3 - Sair`)
                                const submenu = await prompt.get(['opcao']);

                                switch (Number(submenu.opcao)) {
                                    case 1: condition = true;
                                        break;

                                    case 2: condition = false;
                                        break;

                                    case 3: principal = false;
                                        condition = false;
                                        break;
                                }
                            }
                        } else if (Number(student.option) === 2) {
                            console.clear()
                            console.log("Digite o nome do aluno que deseja visualizar as notas: ")
                            const option = await prompt.get(['aluno']);
                            const studentToSeeGrades = students.find(student => student.name === option.aluno.toString())

                            if (studentToSeeGrades) {
                                console.log("")
                                studentToSeeGrades.getGrades()
                                console.log("")

                                console.log("Digite o index e a nota para inserir a correção: ")
                                const option = await prompt.get(['index', 'nota']);

                                studentToSeeGrades.setGrade(Number(option.index), Number(option.nota))

                                console.log("Nota corrigida com sucesso!")
                                console.log("")
                                studentToSeeGrades.getGrades()

                                console.log(`1 - Continuar`)
                                console.log(`2 - Voltar ao menu Principal`)
                                console.log(`3 - Sair`)
                                const submenu = await prompt.get(['opcao']);

                                switch (Number(submenu.opcao)) {
                                    case 1: condition = true;
                                        break;

                                    case 2: condition = false;
                                        break;

                                    case 3: principal = false;
                                        condition = false;
                                        break;
                                }

                            }
                        } else if (Number(student.option) === 3) {
                            condition = false
                        } else if (Number(student.option) === 4) {
                            principal = false
                            condition = false 
                        } else {
                            console.log("Opção Inválida!")
                        }

                    }
                } else {
                    console.clear()
                    console.log("Acesso inválido! Verifique com a secretaria!")

                    console.log(`1 - Continuar`)
                    console.log(`2 - Voltar ao menu Principal`)
                    console.log(`3 - Sair`)
                    const submenu = await prompt.get(['opcao']);

                    switch (Number(submenu.opcao)) {
                        case 1: condition = true;
                            break;

                        case 2: condition = false;
                            break;

                        case 3: principal = false;
                            condition = false;
                            break;
                    }
                }

                break;

            case 3:
                condition = true;
                console.clear()
                console.log(`=============== Digite seu nome para logar =========================`)
                const login = await prompt.get(['aluno']);

                if (students.find(student => student.name === login.aluno.toString())) {
                    while (condition) {
                        console.clear()
                        console.log(`=============== Bem vindo(a) ${login.aluno.toString()} =========================`)
                        console.log(`1 - Verificar Notas`)
                        console.log(`2 - Verificar Média`)
                        console.log(`3 - Voltar ao Menu Principal`)
                        console.log(`4 - Sair`)
                        const student = await prompt.get(['option']);

                        const studentsGrades = students.find(student => student.name === login.aluno.toString())

                        if (Number(student.option) === 1) {
                            console.clear()
                            studentsGrades?.getGrades();

                            console.log(`1 - Continuar`)
                            console.log(`2 - Voltar ao menu Principal`)
                            console.log(`3 - Sair`)
                            const submenu = await prompt.get(['opcao']);

                            switch (Number(submenu.opcao)) {
                                case 1: condition = true;
                                    break;

                                case 2: condition = false;
                                    break;

                                case 3: principal = false;
                                    condition = false;
                                    break;
                            }
                        } else if (Number(student.option) === 2) {
                            console.clear()
                            studentsGrades?.calculateAverage();

                            console.log(`1 - Continuar`)
                            console.log(`2 - Voltar ao menu Principal`)
                            console.log(`3 - Sair`)
                            const submenu = await prompt.get(['opcao']);

                            switch (Number(submenu.opcao)) {
                                case 1: condition = true;
                                    break;

                                case 2: condition = false;
                                    break;

                                case 3: principal = false;
                                    condition = false;
                                    break;
                            }
                        } else if (Number(student.option) === 3) {
                            condition = false
                        } else if (Number(student.option) === 4) {
                            principal = false
                            condition = false  
                        } else {
                            console.log("Opção Inválida!")
                        }
                    }
                } else {
                    console.clear()
                    console.log("Acesso inválido! Verifique com a secretaria!")

                    console.log(`1 - Continuar`)
                    console.log(`2 - Voltar ao menu Principal`)
                    console.log(`3 - Sair`)
                    const submenu = await prompt.get(['opcao']);

                    switch (Number(submenu.opcao)) {
                        case 1: condition = true;
                            break;

                        case 2: condition = false;
                            break;

                        case 3: principal = false;
                            condition = false;
                            break;
                    }
                }
                break;

            case 4: 
                main()
            case 5: principal = false;
                break;

            default:
                console.log("Digite uma opção válida!")
        }
    }
}

let professors: Professor[] = [];
let students: Student[] = [];

//mainEscola()