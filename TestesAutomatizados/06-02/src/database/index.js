const db = {
    '123456': {
        nome: 'Esdras',
        cpf: '123456',
        email: 'esdras@lets.com'
    }
}

module.exports = {
    findByCPF: (cpf) => {
        console.log('Implementação Original')
        return db[cpf] || null
    }, 
    create: ({ nome, cpf, email }) => {
        db[cpf] = {
            nome,
            cpf,
            email
        }
    }
}