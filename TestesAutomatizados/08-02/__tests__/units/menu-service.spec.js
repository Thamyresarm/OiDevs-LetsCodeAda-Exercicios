const { faker } = require('@faker-js/faker')
const { cpf: cpfGenerator } = require('cpf-cnpj-validator')
const MenuService = require('../../src/services/menu-service')
const CpfValidator = require('../../src/utils/cpf-validator')
const UserService = require('../../src/services/user-service')

jest.mock('prompt', () => ({
    get: () => {
        return {
            nome: 'Esdras',
            email: 'esdras@teste.com',
            cpf: '60593097041'
        }
    }
}))

const cpfValidatorMock = () => true
const userExistsMock = () => false
const signUpMock = () => ({ id: 1 })


describe('[Menu Service] SignUp', () => {
    it('Should register a new user', async () => {
        const cpfValidatorSpy = jest.spyOn(CpfValidator, 'isValid').mockImplementationOnce(cpfValidatorMock)
        const userExistsSpy = jest.spyOn(UserService, 'userExists').mockImplementationOnce(userExistsMock)
        const signUpSpy = jest.spyOn(UserService, 'signUp').mockImplementationOnce(signUpMock)

        const res = await MenuService.signUp()

        expect(cpfValidatorSpy).toHaveBeenCalled()
        expect(cpfValidatorSpy).toHaveBeenCalledWith('60593097041')
        expect(userExistsSpy).toHaveBeenCalledWith('60593097041')
        expect(signUpSpy).toReturnWith({ id: 1 })
    })

    it('Should register a new user', async () => {
        const cpfValidatorSpy = jest.spyOn(CpfValidator, 'isValid').mockImplementationOnce(() => false)
       
        const res = await MenuService.signUp()

        expect(cpfValidatorSpy).toHaveBeenCalled()
        expect(cpfValidatorSpy).toHaveBeenCalledWith('60593097041')
    })

    it('Should register a new user', async () => {
        const cpfValidatorSpy = jest.spyOn(CpfValidator, 'isValid').mockImplementationOnce((cpfValidatorMock))
        const userExistsSpy = jest.spyOn(UserService, 'userExists').mockImplementationOnce(() => true)

        const res = await MenuService.signUp()

        expect(cpfValidatorSpy).toHaveBeenCalled()
        expect(cpfValidatorSpy).toHaveBeenCalledWith('60593097041')
        expect(userExistsSpy).toHaveBeenCalledWith('60593097041')
    })
})