/// <reference path="scene.ts" />

class StartScreen extends Scene{
    constructor(game:Game){
        super(game);
        this.setUpStartScreen();        
    }

    private setUpStartScreen(){

        let backgroundImage = this.addElement("menuBackground", 300, 150)

        let button = this.addElement("buttonPlay", 420, 500)

        button.addEventListener('click', (e:MouseEvent)=> this.switchScreen("gameScreen"))
    }
}