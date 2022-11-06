import prompt from "prompt"
import { mainAgenda } from "./apps/appAgenda";
import { mainEscola } from "./apps/appEscola";

export const main = async function () {
    let condition = true;

 while (condition) {
    console.clear();
    console.log(`=============== Selecione uma opção =========================`)
    console.log(`1 - App Agenda`)
    console.log(`2 - App Escola`)
    console.log(`3 - Sair`)

    const response = await prompt.get(['opcao']);

    if(Number(response.opcao) === 1){
        condition = false;
        mainAgenda();
    }else if(Number(response.opcao) === 2){
        condition = false;
        mainEscola();
    } else if(Number(response.opcao) === 3){
        condition = false;
    }else {
        console.log("Digite uma opção válida!")
    }
 }
}

main()