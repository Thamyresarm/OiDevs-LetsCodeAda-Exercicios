const { cpf: cpfValidator } = require('cpf-cnpj-validator')

class CpfValidator {
    static isValid(cpf) {
        return cpfValidator.isValid(cpf)
    }
}

module.exports = CpfValidator