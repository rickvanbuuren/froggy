/// <reference path="scene.ts"/>

class EndScreen extends Scene{
    
    constructor(game:Game){
        super(game);       
        this.setUpEndScreen() 
    }

    private setUpEndScreen(){

        let backgroundImage = this.addElement("gameoverBackground", 300, 150)

        let button = this.addElement("buttonBack", 420, 500)

        button.addEventListener('click', (e:MouseEvent)=> this.switchScreen("startScreen"))
    }
}