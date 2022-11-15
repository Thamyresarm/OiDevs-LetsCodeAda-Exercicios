import { Voo } from "../../Numero3/src/Voo";

export class VooFumantes extends Voo{
    private vagasFumantes: number;
    private indiceFumante: number = 0;
    
    constructor(voo: Voo, newVagas: number, vagasFumantes: number){
        super(voo.codigo, voo.data, voo.horario)
        this.vagas = newVagas;
        this.vagasFumantes = vagasFumantes;

        this.indiceFumante =  newVagas - vagasFumantes + 1;
    }

    get maxVagas(): number {
        return super.vagas;
    }

    cadeiraFumantes(): void{
        for (let i = this.indiceFumante; i < this.vagas; i++) {
            console.log(i + ": " + this.assentos[i])            
        }
    }

    tipoAssento(numeroAssento): void{
        const validado = this.validaAssento(numeroAssento);

        if (validado || validado === false) {
            if(numeroAssento < this.indiceFumante){
                console.log("N");
            } else {
                console.log("F");
            }
        } else {
            console.log('Poltrona inexistente!');
        }
    }
}