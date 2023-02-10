const prompt = require('prompt')
const UserService = require('./user-service')
const CpfValidator = require('../utils/cpf-validator')

class MenuService {
    static async signUp() {
        const { nome, cpf, email } = await prompt.get(['nome', 'cpf', 'email'])
        
        if(!CpfValidator.isValid(cpf)) {
            console.log('CPF Inválido')
            return prompt.get(['Pressione uma tecla para continuar: '])
        }
        
        const userExists = UserService.userExists(cpf)

        if(userExists) {
            console.log('Usuário já cadastrado...')
            return prompt.get(['Pressione uma tecla para continuar: '])
        }

        UserService.signUp({
            nome,
            cpf,
            email
        })

        console.clear()
        console.log('* Usuário cadastrado com sucesso')
        return prompt.get(['Pressione uma tecla para continuar: '])
    }
}

module.exports = MenuService