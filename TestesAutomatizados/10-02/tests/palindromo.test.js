const { verificaPalindromo, InvalidTypeError } = require('../src/palindromo')

describe('Teste verificaPalindromo', () => {
    it('Deve retornar true se um palindromo válido é passado', () => {
        const resultado = verificaPalindromo('arara')

        expect(resultado).toBe(true)
    })

    it('Deve retornar false se um palindromo inválido é passado', () => {
        const resultado = verificaPalindromo('palavra')

        expect(resultado).toBe(false)
    })

    it('Deve retornar false se uma string vazia é passada', () => {
        try {
            verificaPalindromo('')            
        } catch (error) {
            console.log(error)
            expect(error).toBeInstanceOf(InvalidTypeError)
            expect(error.message).toBe('O argumento deve ser uma string válida')
        }
    })

    // it('Deve retornar false se null é passado', () => {
    //     const resultado = verificaPalindromo(null)

    //     expect(resultado).toBe(false)
    // })

    // it('Deve retornar false se undefined é passado', () => {
    //     const resultado = verificaPalindromo(undefined)

    //     expect(resultado).toBe(false)
    // })

    // it('Deve retornar false se um number é passado', () => {
    //     const resultado = verificaPalindromo(1)

    //     expect(resultado).toBe(false)
    // })

    // it('Deve retornar false se um object é passado', () => {
    //     const resultado = verificaPalindromo({})

    //     expect(resultado).toBe(false)
    // })

    // it('Deve retornar false se um object é passado', () => {
    //     const resultado = verificaPalindromo('Arara')

    //     expect(resultado).toBe(true)
    // })
})