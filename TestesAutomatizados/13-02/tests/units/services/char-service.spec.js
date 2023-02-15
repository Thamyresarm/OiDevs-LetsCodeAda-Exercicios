require('dotenv').config()
const axios = require('axios')
const CharacterService = require('../../../src/services/char-service')

const characterMock = require('../../mocks/rick-and-morty-character-api.json')
const rickSanchesMock = require('../../mocks/char-mock.json')

const charApi = async () => {
    return {
        data: characterMock
    }
}

describe('Character Service', () => {
    it('Deve retornar uma lista de personagens', async () => {
        jest.spyOn(axios, 'get').mockImplementationOnce(charApi)
        
        const page = 1
        const personagens = await CharacterService.get(page)
        
        expect(personagens[0]).toHaveProperty('id')
        expect(personagens[0]).toMatchObject(rickSanchesMock)
    })
})