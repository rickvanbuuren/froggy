class GameScreen extends Scene{
    
    private trees:Array<Tree>;
    private secondTreeLine:Array<Tree>;
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

    private backgrounsMusic:any = new Howl({
        src: "./sounds/FroggerFix.mp3",
        loop: true,
        volume: 0.8
    });


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

        this.backgrounsMusic.play();

        for(let i = 0; i < 3; i++){
            this.lives.push(new LiveUI(100 + (i * 45), 850))
        }

        let count = 0;
        let previousSpeed = 0;
        for(let i = 0; i < 10; i++){
            let x = -377;
            let y = 165 + (57 * count)
            let speed = Math.random() * 4 + 1;

            if(i%2==0){
                x = 0;
                previousSpeed = speed
            }
            if(i%2==1){
                count++
            }
            this.trees.push(new Tree(x,y, previousSpeed));
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

        if(this.frog.y == 163){
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
            this.backgrounsMusic.stop();
            this.switchScreen("endScreen")
        }
    }
}