/// <reference path="game.ts" />

class UIelement {
    protected _div:HTMLElement;
    protected x:number;
    protected y:number;
    protected width:number;
    protected height:number;

    public get div(): HTMLElement {
		return this._div;
	}

    constructor(x:number, y:number) { 
        this.width = 58;
        this.height = 50;
        this.x = x;
        this.y = y;
    }
}   