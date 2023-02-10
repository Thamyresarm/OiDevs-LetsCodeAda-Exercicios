const prompt = require('prompt')
const MenuService = require('./src/services/menu-service')
const db = {
    '123456': {
        nome: 'Esdras',
        cpf: '123456',
        email: 'esdras@lets.com'
    }
}

const main = async () => {
    let run = true

    while(run) {
        console.clear()
        console.log('------------ Calculadora IMC ------------')
        console.log('> Escolha uma opção abaixo:')
        console.log('   1. Cadastrar')
        console.log('   2. Ver usuários')
        console.log('   3. Calcular IMC')
        console.log('   4. Sair')

        const { selecione: option } = await prompt.get(['selecione'])

        switch(option) {
            case '1':
                await MenuService.signUp()
                break;
            case '2':
                console.log(db)
                await prompt.get(['Pressione uma tecla para continuar: '])
                break
            case '3':
                const { cpf: userCPF } = await prompt.get(['cpf'])
                console.clear()
                
                if(!db[userCPF]) {
                    console.log('Usuário não encontrado')
                    await prompt.get(['Pressione uma tecla para continuar: '])
                    break
                }

                const { peso, altura } = await prompt.get(['peso', 'altura'])

                const imc = peso / (altura * altura)
                console.clear()

                console.log(imc)
                await prompt.get(['Pressione uma tecla para continuar: '])
                break;
            case '4':
                run = false
                break;
            default:
                console.log('Opção inválida')
                break
        }
    }
}

main()

