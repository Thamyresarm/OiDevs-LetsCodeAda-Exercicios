const { cpf: cpfValidator } = require('cpf-cnpj-validator')

module.exports = (cpf) => {
    return cpfValidator.isValid(cpf)
}