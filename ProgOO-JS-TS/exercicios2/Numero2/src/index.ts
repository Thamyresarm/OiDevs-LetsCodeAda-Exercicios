class Data {
    private _data: Date;

    constructor(data: Date){
        this._data = data;
    }

    get data(){
        return this._data;
    }
}

const data1 = new Data(24-06-1992)
