/// <reference path="scene.ts" />

class WonScreen extends Scene{
    constructor(game:Game){
        super(game);
        this.setUpStartScreen();        
    }

    private setUpStartScreen(){

        let backgroundImage = this.addElement("wonBackground", 300, 150)

        let button = this.addElement("buttonBack", 420, 500)

        button.addEventListener('click', (e:MouseEvent)=> this.switchScreen("startScreen"))
    }
}