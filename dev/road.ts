/// <reference path="game.ts" />

class Road extends StaticGameObject {
    
    constructor(x:number, y:number, w:number, h:number) {
        super(x,y,w,h);
        this._div = document.createElement("road_1");
        document.body.appendChild(this._div);
         
        this.width = w;//672
        this.height = h;//57
        this.x = x;
        this.y = y;

        this._div.style.transform = "translate("+this.x+"px, "+this.y+"px)" 
    }

}