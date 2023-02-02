const Calculadora = require('./calculadora')

describe('Calculator tests', () => {
    test('Should return 4', () => {
        const sum = Calculadora.soma(2, 2)
        expect(sum).toBe(4)
    })

    test('should throw if 0 is provided', () => {
        const sum = Calculadora.dividir(0, 2)
        expect(sum).toBe('Operação inválida')
    })
})