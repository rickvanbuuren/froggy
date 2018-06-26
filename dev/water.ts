/// <reference path="chicken.ts" />

class Water extends StaticGameObject {
    
    constructor(x:number, y:number, w:number, h:number) {
        super(x,y,w,h);
        this._div = document.createElement("water");
        document.body.appendChild(this._div);
         
        this.width = w;//672 
        this.height = h;//342
        this.x = x;
        this.y = y;

        this._div.style.transform = "translate("+this.x+"px, "+this.y+"px)" 
    }
    public getRectangle() {
        return this._div.getBoundingClientRect()
    }
}