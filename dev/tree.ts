/// <reference path="game.ts" />

class Tree {
    
    private _div: HTMLElement;
    public x:number;
    public y:number;
    private width:number;
    private height:number;
    public speed:number;


    public get div(): HTMLElement {
		return this._div;
	}

    constructor(x:number, y:number) {
        this._div = document.createElement("tree");
        document.body.appendChild(this._div);
        
        this.speed = Math.random() * 4 + 1;
        this.width = 277;
        this.height = 50;
        this.x = x;
        this.y = y;
    }
    
    public move():void {
        this.x += this.speed;
        if(this.x > 772) this.x = -450;
        this._div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

    public getRectangle() {
        return this._div.getBoundingClientRect()
    }

}   