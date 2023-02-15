const axios = require('axios')

class CharacterService {
    static async get(page = 1) {
        const response = await axios.get(`${process.env.RICK_AND_MORTY_API_URL}/character?page=${page}`)
        console.log(response)
        const chars = response.data.results.map(char => {
            return {
                id: char.id,
                name: char.name,
                status: char.status,
                species: char.species,
                type: char.type,
                gender: char.gender,
            }
        })

        return chars
    }
}

module.exports = CharacterService