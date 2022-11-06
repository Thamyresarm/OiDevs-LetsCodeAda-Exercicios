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

    public proximoLivre() {
        for (let i = 0; i < 100; i++) {
            if(this._assentos[i + 1] === true){
                console.log("Proximo assento livre: "+(i + 1))
                break;
            }
        }
    }

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
            console.log('Poltrona inexistente!');
        }
    }

    public vagas(): void{
        let count = 0;
        for (let i = 0; i < 100; i++) {
            if(this._assentos[i + 1] === true){
                count++;                
            }
        }
        console.log(count + " vagas disponíveis")
    }
}

