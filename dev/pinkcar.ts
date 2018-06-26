class Pinkcar extends Car{

    constructor(x:number, y:number){
        super(x,y);
        this.speed = Math.random() * 7 + 4;   
        this._div = document.createElement("pinkcar");
        document.body.appendChild(this._div);
    }
}