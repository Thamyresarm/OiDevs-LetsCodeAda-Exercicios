const UserService = require('../../src/services/user-service')
const db = require('../../src/database')
const { faker } = require('@faker-js/faker')

const dbSucessMock = {
    findByCPF: (cpf) => {
        console.log('Implementação mock de sucesso')
        return true
    },
    create: ({nome, cpf, email}) =>{
        return { id: 1 }
    } 
 }

const dbFailedMock = {
    findByCPF: (cpf) => {
        console.log('Implementação mock de falha')
        return false
    }
}

const userMock = {
    nome: faker.name.firstName(),
    cpf: cpfValidator.generate(),
    email: faker.internet.email()
}

describe('User Service tests', () => {
    test('Should returns true if user exists (Original Implementation)', () => {
        const userExits = UserService.userExists('123456')
        expect(userExits).toBe(true)
    })
    
    test('Should returns true if user exists', () => {
        jest.spyOn(db, 'findByCPF').mockImplementationOnce(dbSucessMock.findByCPF)

        const userExits = UserService.userExists('12345678910')
        expect(userExits).toBe(true)
    })

    test('Should returns false if user not exists', () => {
        jest.spyOn(db, 'findByCPF').mockImplementationOnce(dbFailedMock.findByCPF)

        const userExits = UserService.userExists('12345678911')
        console.log(userExits)
        expect(userExits).toBe(false)
    })

    test('Should returns false if no cpf is provided', () => {
        jest.spyOn(db, 'findByCPF').mockImplementationOnce(dbFailedMock.findByCPF)

        const userExits = UserService.userExists()
        
        expect(userExits).toBe(false)
    })
})

describe('[User Service] signUp', () => {
    it('Should return an id for a new created user', () => {
        jest.spyOn(db, 'create').mockImplementationOnce(dbSucessMock.create)

        const createUser = UserService.signUp(userMock)

        expect(createUser).toMatchObject({ id: 1 })
    })
})