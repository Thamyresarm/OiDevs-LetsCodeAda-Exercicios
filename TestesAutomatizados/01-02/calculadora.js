class Calculadora {
    static soma(a, b) {
        return a + b
    }

    static dividir(a, b) {
        if(a === 0) {
            return 'Operação inválida'
        }
        
        return a / b
    }
}

module.exports = Calculadora