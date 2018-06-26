/// <reference path="game.ts" />
class StaticGameObject {
    
    protected _div: HTMLElement;
    protected x:number;
    public y:number;
    protected width:number;
    protected height:number;

    public get div(): HTMLElement {
		return this._div;
	}

    constructor(x:number, y:number, w:number, h:number) {
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
}