const UserService = require('../../src/services/user-service')
const db = require('../../src/database')

const dbSucessMock = {
    findByCPF: (cpf) => {
        console.log('Implementação mock de sucesso')
        return true
    }
}

const dbFailedMock = {
    findByCPF: (cpf) => {
        console.log('Implementação mock de falha')
        return false
    }
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
