/// <reference path="game.ts"/>

class Scene {
    protected game:Game;

    constructor(g:Game){
        this.game = g;
    }

    //Resets the scene
    public resetScreen():void{
        document.body.innerHTML = "";
    }


    public switchScreen(scene:string):void{
        this.game.switchScreen(scene)
    }

    public update():void{

    }

    //adds a html element to the scene
    protected addElement(tag:string, x:number, y:number):HTMLElement{
        let element = document.createElement(tag);
        document.body.appendChild(element);

        let startbuttonX = x;
        let startbuttonY = y;
        element.style.transform = "translate("+startbuttonX+"px, "+startbuttonY+"px)"

       return element;
    }
}