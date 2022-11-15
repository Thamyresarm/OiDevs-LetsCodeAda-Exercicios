import { Data } from "../../Numero2/src/Data";

export class Voo {
    private _codigo: string;
    private _data: Data;
    private _horario: string;
    private _vagas: number = 100;
    private _assentos: {[i: number]: boolean } = {};

    constructor(codigo: string, data: Data, horario: string) {
        this._codigo = codigo;
        this._data = data
        this._horario = horario;        

        for (let i = 0; i < this._vagas; i++) {
            this._assentos[i + 1] = true;
        }
    }

    get codigo(){
        return this._codigo;
    
    }
    get data(){
        return this._data;
    
    }
    get horario(){
        return this._horario;
    }

    get assentos() {
        return this._assentos;
    }

    set vagas(vagas: number ){
        this._vagas = vagas;
    }

    public getVoo() {
        return this.codigo;
    }

    public proximoLivre() {
        for (let i = 0; i < this._vagas; i++) {
            if(this._assentos[i + 1] === true){
                console.log("Proximo assento livre: "+(i + 1))
                break;
            }
        }
    }

    protected validaAssento(numeroAssento: number): boolean {
        const verificado = this._assentos[numeroAssento];
        return verificado;        
    }

    public verifica(numeroAssento: number): void {
        const isDisponivel = this.validaAssento(numeroAssento);

        if (isDisponivel) {
            console.log('True');
        } else if(isDisponivel === false) {
            console.log('False');
        } else {
            console.log('Poltrona inexistente!');
        }
    }

    public ocupa(numeroAssento: number): void {
        const isDisponivel = this.validaAssento(numeroAssento);

        if (isDisponivel) {
            this._assentos[numeroAssento] = false;
            console.log('Poltrona selecionada com sucesso!');
        } else if(isDisponivel === false) {
            console.log('Poltrona já ocupada!');
        } else {
            console.log('Poltrona inexistente!');
        }
    }

    public vagasDisponiveis(): void{
        let count = 0;
        for (let i = 0; i < this._vagas; i++) {
            if(this._assentos[i + 1] === true){
                count++;                
            }
        }
        console.log(count + " vagas disponíveis")
    }
}

