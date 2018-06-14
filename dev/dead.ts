/// <reference path="chicken.ts" />

class Dead {
    
    private _div: HTMLElement;
    private x:number;
    public y:number;
    private width:number;
    private height:number;

    public get div(): HTMLElement {
		return this._div;
	}

    constructor(x:number, y:number) {
        this._div = document.createElement("dead");
        document.body.appendChild(this._div);
         
        // this.speed = Math.random() * 4 + 1;
        this.width = 50;
        this.height = 50;
        this.x = x;
        this.y = y;

        this._div.style.transform = "translate("+this.x+"px, "+this.y+"px) "
        
        

    }

}