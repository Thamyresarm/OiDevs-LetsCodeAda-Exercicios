const db = require('../database')
class UserService {
    static signUp({ nome, cpf, email }) {
        return db.create({
            nome,
            cpf,
            email
        })
    }

    static userExists(cpf) {
        const user = db.findByCPF(cpf)
        if(!user) {
            return false
        }

        return true
    }
}

module.exports = UserService