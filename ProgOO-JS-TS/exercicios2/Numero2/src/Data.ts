export class Data {
    private _dia: number = 1;
    private _mes: number = 1;
    private _ano: number = 1;
    private data: string;

    constructor(data: string) {
        this.data = data;
        this.normalizar(data);
    }

    private normalizar(data: string): void {
        const [dia, mes, ano] = data.split('/');
        this._ano = this.validaAno(Number(ano));
        this._mes = this.validaMes(Number(mes));
        this._dia = this.validaDia(Number(dia), this._mes);        
    }
    
    get dia(): number{
        return this._dia;
    }
    
    get mes(): number{
        return this._mes;
    }
    
    get ano(): number{
        return this._ano;
    }

    compara(data: Data): boolean{
        if(this.dia === data.dia && this.mes === data.mes && this.ano === data.ano){
            return true;
        }else {
            return false;
        }
    }
    
    private validaDia(dia: number, mes: number): number {
        if(dia > 0 && dia < 31){
            switch(mes){
                case 1: if(dia > 0 && dia <= 31) return dia;
                case 2: if(dia > 0 && dia <= 29) return dia;
                case 3: if(dia > 0 && dia <= 31) return dia;
                case 4: if(dia > 0 && dia <= 30) return dia;
                case 5: if(dia > 0 && dia <= 31) return dia;
                case 6: if(dia > 0 && dia <= 30) return dia;
                case 7: if(dia > 0 && dia <= 31) return dia;
                case 8: if(dia > 0 && dia <= 31) return dia;
                case 9: if(dia > 0 && dia <= 30) return dia;
                case 10: if(dia > 0 && dia <= 31) return dia;
                case 11: if(dia > 0 && dia <= 30) return dia;
                case 12: if(dia > 0 && dia <= 31) return dia;
                default: 
                    return 1;
            }
        } else {
            return 1;
        }
    }

    private validaMes(mes: number): number{
        if(mes < 1 || mes > 12){
            return 1;
        } else {
            return mes;
        }
    }

    private validaAno(ano: number): number{
        if(ano <= 0 || ano > 2022){
            return 1;
        } else {
            return ano;
        }
    }
}


// const data1 = new Data("24/06/1993")
// const data2 = new Data("24/06/1992")
// console.log(data1.dia)
// console.log(data1.mes)
// console.log(data1.ano)
// console.log(data1.compara(data2))