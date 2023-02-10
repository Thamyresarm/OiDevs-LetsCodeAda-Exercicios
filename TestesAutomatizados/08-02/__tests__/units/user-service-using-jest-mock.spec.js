const UserService = require('../../src/services/user-service')
const db = require('../../src/database')

jest.mock('../../src/database', () => ({
    findByCPF: () => true
}))

describe('[User Service] userExists', () => {
    it('Should returns true if user exists', () => {

        const userExits = UserService.userExists('12345678910')
        expect(userExits).toBe(true)
    })
})
