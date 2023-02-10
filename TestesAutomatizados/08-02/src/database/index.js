const db = {
    '123456': {
        id: 1,
        nome: 'Esdras',
        cpf: '123456',
        email: 'esdras@lets.com'
    }
}

module.exports = {
    findByCPF: (cpf) => {
        return db[cpf] || null
    }, 
    create: ({ nome, cpf, email }) => {
        db[cpf] = {
            id: Math.floor(1000 + Math.random() * 9000),
            nome,
            cpf,
            email
        }

        return { id: db[cpf].id }
    }
}