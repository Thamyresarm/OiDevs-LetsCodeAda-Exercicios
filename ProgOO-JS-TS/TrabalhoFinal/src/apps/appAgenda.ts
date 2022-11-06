// import { Person } from './Classes/Person';
// import { Agenda } from './Classes/Agenda';
// import { Data } from './Classes/Data';

// const agenda = new Agenda();
// agenda.showAgenda()

// const person = new Person("Thamyres", new Data("24/06/1992"), 1.58);
// agenda.addPerson(person);
// agenda.showAgenda();

// agenda.addPerson(new Person("Leo", new Data("02/07/1993"), 1.80))
// agenda.showAgenda();

// agenda.findPerson("Thamyres");
// agenda.showPerson(1);

// agenda.removePerson("Leo");
// agenda.showAgenda();

import prompt from 'prompt'
import { main } from '..';
import { Agenda } from '../Classes/Agenda';
import { Data } from '../Classes/Data';
import { Person } from '../Classes/Person';

export const mainAgenda = async function () {
    let principal = true;
    let submenu;
    let newPerson;

    while (principal) {
        console.clear()
        console.log(`=============== Selecione uma opção =========================`)
        console.log(`1 - Adicionar Pessoa`)
        console.log(`2 - Remover Pessoa`)
        console.log(`3 - Visualizar Agenda`)
        console.log(`4 - Localizar Pessoa pelo nome`)
        console.log(`5 - Visualizar Pessoa no index`)
        console.log(`6 - Menu Apps`)
        console.log(`7 - Sair`)
        const response = await prompt.get(['opcao']);


        switch (Number(response.opcao)) {

            case 1:
                console.clear()
                console.log(`=============== Digite os dados da Pessoa =========================`)
                newPerson = await prompt.get(['nome', 'data', 'altura']);
                const person = new Person(
                    newPerson.nome.toString(),
                    new Data(newPerson.data.toString()),
                    Number(newPerson.altura))

                agenda.addPerson(person);

                console.log(`1 - Continuar`)
                console.log(`2 - Sair`)
                submenu = await prompt.get(['opcao']);

                switch (Number(submenu.opcao)) {
                    case 1: principal = true;
                        break;

                    case 2: principal = false;
                        break;
                }
                break;

            case 2:
                console.clear()
                console.log(`=============== Digite o nome da Pessoa =========================`)
                newPerson = await prompt.get(['nome']);

                agenda.removePerson(newPerson.nome.toString());

                console.log(`1 - Continuar`)
                console.log(`2 - Sair`)
                submenu = await prompt.get(['opcao']);

                switch (Number(submenu.opcao)) {
                    case 1: principal = true;
                        break;

                    case 2: principal = false;
                        break;
                }
                break;

            case 3:
                console.clear()
                console.log(`=============== AGENDA =========================`)
                agenda.showAgenda();

                console.log(`1 - Continuar`)
                console.log(`2 - Sair`)
                submenu = await prompt.get(['opcao']);

                switch (Number(submenu.opcao)) {
                    case 1: principal = true;
                        break;

                    case 2: principal = false;
                        break;
                }
                break;

            case 4:
                console.clear()
                console.log(`=============== Digite o nome da Pessoa =========================`)
                newPerson = await prompt.get(['nome']);
                agenda.findPerson(newPerson.nome.toString());

                console.log(`1 - Continuar`)
                console.log(`2 - Sair`)
                submenu = await prompt.get(['opcao']);

                switch (Number(submenu.opcao)) {
                    case 1: principal = true;
                        break;

                    case 2: principal = false;
                        break;
                }
                break;

            case 5:
                console.clear()
                console.log(`=============== Digite o index da Pessoa =========================`)
                newPerson = await prompt.get(['index']);

                agenda.showPerson(Number(newPerson.index));

                console.log(`1 - Continuar`)
                console.log(`2 - Sair`)
                submenu = await prompt.get(['opcao']);

                switch (Number(submenu.opcao)) {
                    case 1: principal = true;
                        break;

                    case 2: principal = false;
                        break;
                }
                break;

            case 6: 
                main();
            case 7: principal = false;
                break;

            default:
                console.log("Digite uma opção válida!")
        }
    }
}

const agenda = new Agenda();
//mainAgenda()