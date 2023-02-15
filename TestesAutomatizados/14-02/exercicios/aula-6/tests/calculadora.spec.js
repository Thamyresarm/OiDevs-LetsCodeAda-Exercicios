const Calculadora = require('../src/calculadora')

describe('Testes da classe calculadora', () => {
    it('Should return 3', () => {
        const soma = Calculadora.soma(1,2);
        expect(soma).toBe(3);
    });

    it('Shoud return 4', () => {
        const sub = Calculadora.subtrai(5,1);
        expect(sub).toBe(4);
    });

    it('Shoud return 10', () => {
        const mult = Calculadora.mutiplica(2,5);
        expect(mult).toBe(10);
    });

    it('Shoud return 2', () => {
        const div = Calculadora.divide(10,5);
        expect(div).toBe(2);
    });

    it('Denominador shouldnt be 0', () => {
        // try {
            Calculadora.divide(10,0);            
        // } catch (error) {
        //     console.log(error);
        //    expect(error)            
        // }
    })
});