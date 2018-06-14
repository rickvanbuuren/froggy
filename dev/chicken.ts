// /// <reference path="tree.ts"/>

// class Chicken {
    
//     private _div: HTMLElement;
//     private x:number;
//     private y:number;
//     private width:number;
//     private height:number;
//     private gun:Gun;

//     public get div(): HTMLElement {
// 		return this._div;
// 	}

//     constructor(x:number, y:number, tree:Tree) {
//         this._div = document.createElement("bird");
//         tree.div.appendChild(this._div);
                
//         this.x = x;
//         this.y = y;
//         this.width = 67;
//         this.height = 110;
//         this.gun = new Gun(this);
        
//         this._div.style.transform = "translate("+this.x+"px, "+this.y+"px)";

//         // maak hier een click listener
//         // de click event handler moet een gun toevoegen
//         // als de kip al een gun heeft, dan moet de fire() functie van de gun worden aangeroepen
//         this._div.addEventListener("click", ()=> this.gun.fire())
//     }

// }