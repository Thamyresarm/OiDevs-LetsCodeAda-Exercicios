import { Data } from "../../Numero2/src/Data";

export class Voo {
    private codigo: string;
    private data: Data;
    private horario: string;
    private _assentos: {[i: number]: boolean } = {};

    constructor(codigo: string, data: Data, horario: string) {
        this.codigo = codigo;
        this.data = data
        this.horario = horario;

        for (let i = 0; i < 100; i++) {
            this._assentos[i + 1] = true;
        }
    }

    get assentos() {
        return this._assentos;
    }

    public getVoo() {
        return this.codigo;
    }

    // public proximoLivre() {
    //     const verificado = this._assentos.=== true;

    //     if (verificado) {
    //         return console.log(verificado);
    //     }
    // }

    public verifica(numeroAssento: number): boolean {
        const verificado = this._assentos[numeroAssento];
        return verificado;
    }

    public ocupa(numeroAssento: number): void {
        const isDisponivel = this.verifica(numeroAssento);

        if (isDisponivel) {
            this._assentos[numeroAssento] = false;
            console.log('Poltrona selecionada com sucesso!');
        } else if(isDisponivel === false) {
            console.log('Poltrona já ocupada!');
        } else {
            throw new Error('Poltrona inexistente!');
        }
    }

    public vagas() {
        //const verificado = this._assentos.reduce((previous, current) => );
    }
}

