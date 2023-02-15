class CharacterService {
    constructor(clientHttp) {
        this.clientHttp = clientHttp
    }

    async getCharacters(page) {
        const response = await this.clientHttp.get(`${process.env.RICK_AND_MORTY_API_URL}/character?page=${page}`)

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