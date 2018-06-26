class Whitecar extends Car{

    constructor(x:number, y:number){
        super(x,y);   
        this._div = document.createElement("whitecar");
        document.body.appendChild(this._div);
    }
}