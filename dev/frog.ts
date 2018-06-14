/// <reference path="chicken.ts" />

class Frog {
    
    private _div: HTMLElement;
    public x:number;
    public y:number;
    private width:number;
    private height:number;
    private speed:number;

    // private chickes:Array<Chicken>;

    public get div(): HTMLElement {
		return this._div;
	}

    constructor(x:number, y:number) {
        this._div = document.createElement("frog");
        document.body.appendChild(this._div);
        
        // this.speed = Math.random() * 4 + 1;
        this.width = 34;
        this.height = 46;
        this.x = x;
        this.y = y;

        this._div.style.transform = "translate("+this.x+"px, "+this.y+"px) rotate(270deg)" 
        // this._div.style.transform = "rotate(270deg)";

        // this.move(event);

        // this.chickes = new Array<Chicken>();

        // dit vlot heeft kippen nodig
        // ...

        // for(let i = 0; i < Math.floor(Math.random() * 4 + 1); i ++){
        //     this.chickes.push(new Chicken(this.x + (100 * i) + 10 , this.y - (this.y) - 86, this))
        // }

        // this._div.addEventListener('keydown', ()=> move(e))

        document.body.addEventListener('keydown', ()=> this.move(event:KeyboardEvent))

    }

    private move(e:KeyboardEvent):void {
        var code = e.keyCode ? e.keyCode : e.which;
            if (code === 38) { //up key
                // this.y = Math.max(, this.x-57)
                this.y -= 57
                this._div.style.transform = "translate("+this.x+"px, "+this.y+"px) rotate(270deg)"
            } else if (code === 40) { //down key
                this.y += 57
                this._div.style.transform = "translate("+this.x+"px, "+this.y+"px) rotate(90deg)"
            } else if(code === 37){  //left key
                this.x = Math.max(100, this.x-10);
                this._div.style.transform = "translate("+this.x+"px, "+this.y+"px) rotate(180deg)"
            } else if(code === 39){  //right key
                this.x = this.x = Math.min(735, this.x+30);
                this._div.style.transform = "translate("+this.x+"px, "+this.y+"px) rotate(0deg)"
            }
    }

    public getRectangle() {
        return this._div.getBoundingClientRect()
    }

    public setBegin(){
        this.x = 400
        this.y = 790
        this._div.style.transform = "translate("+this.x+"px, "+this.y+"px) rotate(270deg)"
    }
    
    // public move():void {
    //     this.x += this.speed;
    //     if(this.x > window.innerWidth) this.x = -450;
    //     this._div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    // }

}