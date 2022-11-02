export class Data {
    private _dia: number;
    private _mes: number;
    private _ano: number;
    private data: string;

    constructor(data: string){
        this.data = data;

        this.normalizar();
    }

    normalizar(){
        const [dia, mes, ano] = this.data.split('/');
        this._dia = Number(dia)
        this._mes = Number(mes)
        this._ano = Number(ano)
    }
}
