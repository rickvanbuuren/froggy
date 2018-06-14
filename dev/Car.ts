/// <reference path="chicken.ts" />

class Car {
    
    private _div: HTMLElement;
    private x:number;
    public y:number;
    private width:number;
    private height:number;
    private speed:number;

    // private chickes:Array<Chicken>;

    public get div(): HTMLElement {
		return this._div;
	}

    constructor(x:number, y:number) {
        this._div = document.createElement("car");
        document.body.appendChild(this._div);
        
        this.speed = Math.random() * 4 + 1;
        this.width = 58;
        this.height = 50;
        this.x = x;
        this.y = y;

        // this.chickes = new Array<Chicken>();

        // dit vlot heeft kippen nodig
        // ...

        // for(let i = 0; i < Math.floor(Math.random() * 4 + 1); i ++){
        //     this.chickes.push(new Chicken(this.x + (100 * i) + 10 , this.y - (this.y) - 86, this))
        // }
    }
    
    public move():void {
        this.x += this.speed;
        if(this.x > window.innerWidth) this.x = -50;
        this._div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

    public getRectangle() {
        return this._div.getBoundingClientRect()
    }

}   