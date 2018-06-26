class GameScreen extends Scene{
    
    private trees:Array<Tree>;
    private roads:Array<Road>;
    private cars:Array<Car>;
    private lives:Array<UIelement>;

    private frog:Frog;
    private path:Path;
    private water:Water;
    private dead:Dead;
    private top:Top
    private border:ScreenBorder
    private fps:number;
    private gameover:Boolean;

    constructor(game:Game){
        super(game)
        this.gameover = false;

        this.trees = new Array<Tree>();
        this.roads = new Array<Road>();
        this.cars = new Array<Car>();
        this.lives = new Array<UIelement>();

        this.water = new Water(100, 105, 672, 342);
        this.top = new Top(100, 105, 672, 57);

        this.fps = 60;

        for(let i = 0; i < 3; i++){
            this.lives.push(new LiveUI(100 + (i * 45), 850))
        }

        for(let i = 0; i < 5; i++){
            this.trees.push(new Tree(0,165 + (57 * i)));
        }

        this.path = new Path(100, 445, 672, 57);
        for(let i = 0; i < 4; i++){
            this.roads.push(new Road(100, 445 + 57 + 57 + (57 * i), 672, 57));
        }
        this.path = new Path(100, 784, 672, 57);

        for(let i = 0; i < 3; i++){
            this.cars.push(new Pinkcar(50, 445 + 60 + (57 * i)));
        }
        
        for(let i = 0; i < 2; i++){
            this.cars.push(new Whitecar(100, 445 + 60 + 57 + 57 + 57 + (57 * i)));
        }

        this.frog = new Frog(400, 790);

        this.border = new ScreenBorder(-177,0);
        this.border = new ScreenBorder(772, 0);
    }

    public update(){
        let hitswater = this.checkCollision(this.water.getRectangle(), this.frog.getRectangle())
        
        if(hitswater){
            let die = true
            for(let t of this.trees){
                let hitstree = this.checkCollision(t.getRectangle(), this.frog.getRectangle())
            
                if(hitstree){
                    this.frog.x += t.speed;
                    this.frog.div.style.transform = "translate("+this.frog.x+"px, "+this.frog.y+"px) rotate(270deg)";
                    die = false;
                    break;
                }
            }

            if(die){
                this.dead = new Dead(this.frog.x, this.frog.y);
                this.frog.setBegin();
                this.removeFromArray();
            }    
        }

        for(let t of this.trees){
            t.move();
        }
         
        for(let c of this.cars){
            c.move();

            if(this.checkCollision(c.getRectangle(), this.frog.getRectangle())){
                this.dead = new Dead(this.frog.x, this.frog.y);
                this.frog.setBegin();
                
                this.removeFromArray();
            }    
        }

        if(this.frog.y < 160){
            this.switchScreen("wonScreen")
        }
    }
    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }

    private removeFromArray() {
        if (typeof this.lives !== 'undefined' && this.lives.length > 0) {
            document.body.removeChild(this.lives[this.lives.length-1].div)
            this.lives.pop();
        }else{
            this.gameover = true;
            if(this.gameover){
                this.gameOver();
                this.gameover = false;
                return
            }
        }       
    }

    private gameOver():void{
        if(this.lives.length == 0){
            this.switchScreen("endScreen")
        }
    }
}