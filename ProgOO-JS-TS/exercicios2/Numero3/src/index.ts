class Voo {
    private codigo: string;
    private data: string;
    private horario: string;
    private _assentos: object[] = [];

    constructor (codigo: string, data: string, horario: string){
    this.codigo = codigo;
    this.data = data
    this.horario = horario;
        
    for(let i = 0; i < 100; i++){
        this._assentos[i] = {"position": (i + 1), "status": "Livre"};
    }

    } 

    get assentos() {
        return this._assentos.forEach(element => console.log(element));
    }

    public getVoo(){
        return this.codigo;
    }

    public proximoLivre(){

    }

    public verifica(numeroAssento: number):void{
        // const verificado = this._assentos.find((assento) => assento.position === numeroAssento);
        // console.log(verificado);
    //     if(verificado)
    //         console.log(verificado.status);
    //     else
    //         console.log("Assento inválido!");
     }

    public ocupa(numeroAssento: number):void {
        // const ocupar = this._assentos.find(assento => assento.position === numeroAssento);
        // this.verifica(numeroAssento);
        // if(this._assentos.)
        // ocupar.status = "Ocupado!"
    }

    public vagas(){

    }
}

const voo006 = new Voo("006", "24/06/1992", "18:06");

voo006.assentos;
console.log("Voo: " + voo006.getVoo());
//voo006.verifica(5);