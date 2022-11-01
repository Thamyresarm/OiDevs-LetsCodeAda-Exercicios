class Voo {
    private codigo: string;
    private data: string;
    private horario: string;
    private _assentos: {[index: string]: number | boolean}[] = [];

    constructor (codigo: string, data: string, horario: string){
    this.codigo = codigo;
    this.data = data
    this.horario = horario;
        
    for(let i = 0; i < 100; i++){
        this._assentos[i] = {'position': (i + 1), 'status': true};
    }

    } 

    get assentos() {
        return this._assentos.forEach(element => console.log(element));
    }

    public getVoo(){
        return this.codigo;
    }

    public proximoLivre(){
        const verificado = this._assentos.find((assento) => assento.status === true);

        if(verificado){
            return console.log(verificado.position);
        }
    }

    public verifica(numeroAssento: number): void{
        const verificado = this._assentos.find((assento) => assento.position === numeroAssento);
         if (verificado) {
            if(verificado.status === true){
                return console.log('Poltrona Livre!');
            }
            else {
                return console.log('Poltrona Ocupada!');
            }

         } else {
            return console.log('Poltrona Inexistente!');
         }
     }

    public ocupa(numeroAssento: number):void {
        const isDisponivel = this._assentos.find(assento => assento.position === numeroAssento);
        
        if(isDisponivel){
            isDisponivel.status = false;
            console.log('Poltrona selecionada com sucesso!');
        } else {
            console.log('Poltrona já ocupada!');
        }        
    }

    public vagas(){
        //const verificado = this._assentos.reduce((previous, current) => );
    }
}

const voo006 = new Voo("006", "24/06/1992", "18:06");

voo006.assentos;
console.log("Voo: " + voo006.getVoo());
voo006.verifica(5);
voo006.ocupa(5);
voo006.verifica(5);
voo006.ocupa(1);
voo006.ocupa(2);
voo006.proximoLivre();