/// <reference path="tree.ts"/>

class Game {

    private activeScene:Scene
    private scenes:any = {
        startScreen:StartScreen,
        endScreen:EndScreen,
        gameScreen:GameScreen,
        wonScreen:WonScreen
    }

    constructor() {
        this.activeScene = new StartScreen(this);

        requestAnimationFrame(() => this.gameLoop());
    }
    
    private gameLoop(){
        this.activeScene.update();
    
        requestAnimationFrame(() => this.gameLoop());        
    }
    
    public switchScreen(scene:string){
        this.activeScene.resetScreen();
        this.activeScene = new this.scenes[scene](this)
    }
} 

