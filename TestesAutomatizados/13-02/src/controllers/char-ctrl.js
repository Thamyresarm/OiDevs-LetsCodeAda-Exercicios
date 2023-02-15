const CharacterService = require('../services/char-service')

class CharacterController {
    static async list(req, res) {
        const { page } = req.query

        const characters = await CharacterService.get(page)
        
        res.status(200).json(characters)
    }
}

module.exports = CharacterController