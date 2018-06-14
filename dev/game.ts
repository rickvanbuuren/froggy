/// <reference path="tree2.ts"/>

class Game {
    
    private trees:Array<Tree>;
    private roads:Array<Road>;
    private cars:Array<Car>;

    private frog:Frog;
    private path:Path;
    private water:Water;
    private dead:Dead
    private top:Top

    private fps:number;

    // private stop = false;
    // private frameCount = 0;
    // private $results = $("#results");
    // private fps, fpsInterval, startTime, now, then, elapsed;

    // private bullets:Array<Bullet>;
    // private score:Number;
    // private lives:Number;
    // private time:Number;

    //private orientate:Number;
    
 
    constructor() {
        this.trees = new Array<Tree>();
        this.roads = new Array<Road>();
        this.cars = new Array<Car>();

        this.water = new Water(100, 105);
        this.top = new Top(100, 105);

        this.fps = 60;

        // plaats Trees in de array
        for(let i = 0; i < 5; i++){
            this.trees.push(new Tree(0,165 + (57 * i)));
            // console.log(this.trees[i].y);
            // console.log(Math.floor((Math.random() * window.innerHeight) + 1));
        }

        this.path = new Path(100, 445);
        for(let i = 0; i < 4; i++){
            this.roads.push(new Road(100, 445 + 57 + 57 + (57 * i)));
        }
        this.path = new Path(100, 784);
        
        for(let i = 0; i < 5; i++){
            this.cars.push(new Car(100, 445 + 60 + (57 * i)));
        }

        this.frog = new Frog(400, 790);

        requestAnimationFrame(() => this.gameLoop());
    }
    
    private gameLoop(){

        let hitswater = this.checkCollision(this.water.getRectangle(), this.frog.getRectangle())
        
        if(hitswater){
            let die = true
            for(let t of this.trees){
                let hitstree = this.checkCollision(t.getRectangle(), this.frog.getRectangle())
            
                if(hitstree){
                    // console.log("op tree")
                    this.frog.x += t.speed;
                    this.frog.div.style.transform = "translate("+this.frog.x+"px, "+this.frog.y+"px)"
                    die = false
                    break
                }
            }
            // console.log(hitstree + "," + hitswater);
            if(die){
                console.log("die")
                this.dead = new Dead(this.frog.x, this.frog.y);
                this.frog.setBegin();
            }    
        }


        for(let t of this.trees){
            t.move();
        }

        // if frogger enters water rectangle
            // let die = true
            // loop trees
                // if frogger hits A tree
                    // die = false
                    // break
                    // break

                    

        // gebruik een for..of loop om de move functie van alle trees in de array aan te roepen
       
               
                // plaats een grafsteentje op de plek waar de speler staat
                
                // Haal leven eraf


                // this.dead = new Dead(this.frog.x, this.frog.y);
                
                // this.frog.setBegin();
            // }
            // if(this.checkCollision(this.water.getRectangle(), this.frog.getRectangle())){
            //     console.log("Ik Raak water")
            //     // plaats een grafsteentje op de plek waar de speler staat
                
            //     // Haal leven eraf
    
            //     this.dead = new Dead(this.frog.x, this.frog.y);
            //     this.frog.setBegin();
    
            // }
         
        for(let c of this.cars){
            c.move();

            if(this.checkCollision(c.getRectangle(), this.frog.getRectangle())){
                console.log("Een auto raakt de speler!")
                // plaats een grafsteentje op de plek waar de speler staat
                
                // Haal leven eraf

                this.dead = new Dead(this.frog.x, this.frog.y);
                this.frog.setBegin();

            }    
        }

        requestAnimationFrame(() => this.gameLoop());        
    }
    
    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }
} 

