/// <reference path="game.ts" />

class Dead {
    
    private _div: HTMLElement;
    private x:number;
    public y:number;
    private width:number;
    private height:number;

    private sound:any = new Howl({
        src: "./sounds/sound-frogger-squash.wav",
        loop: false,
        volume: 1.0
    });


    public get div(): HTMLElement {
		return this._div;
	}

    constructor(x:number, y:number) {
        this._div = document.createElement("dead");
        document.body.appendChild(this._div);
         
        this.width = 50;
        this.height = 50;
        this.x = x;
        this.y = y;

        this._div.style.transform = "translate("+this.x+"px, "+this.y+"px) "

        this.sound.play();
    }

}