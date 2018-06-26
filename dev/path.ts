/// <reference path="game.ts" />

class Path extends StaticGameObject {
    
    constructor(x:number, y:number, w:number, h:number) {
        super(x,y,w,h)
        this._div = document.createElement("path");
        document.body.appendChild(this._div);
         
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;

        this._div.style.transform = "translate("+this.x+"px, "+this.y+"px)" 
    }

}