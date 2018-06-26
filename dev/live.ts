/// <reference path="UIelement.ts" />

class LiveUI extends UIelement{

    constructor(x:number, y:number){
        super(x,y);   
        this._div = document.createElement("frog");
        document.body.appendChild(this._div);

        this._div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }
}

