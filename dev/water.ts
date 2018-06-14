/// <reference path="chicken.ts" />

class Water {
    
    private _div: HTMLElement;
    private x:number;
    public y:number;
    private width:number;
    private height:number;

    public get div(): HTMLElement {
		return this._div;
	}

    constructor(x:number, y:number) {
        this._div = document.createElement("water");
        document.body.appendChild(this._div);
         
        // this.speed = Math.random() * 4 + 1;
        this.width = 672;
        this.height = 342;
        this.x = x;
        this.y = y;

        this._div.style.transform = "translate("+this.x+"px, "+this.y+"px)" 

    }
    public getRectangle() {
        return this._div.getBoundingClientRect()
    }

}