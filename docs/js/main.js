"use strict";
var Car = (function () {
    function Car(x, y) {
        this._div = document.createElement("car");
        document.body.appendChild(this._div);
        this.speed = Math.random() * 4 + 1;
        this.width = 58;
        this.height = 50;
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Car.prototype, "div", {
        get: function () {
            return this._div;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.move = function () {
        this.x += this.speed;
        if (this.x > window.innerWidth)
            this.x = -50;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Car.prototype.getRectangle = function () {
        return this._div.getBoundingClientRect();
    };
    return Car;
}());
var Tree = (function () {
    function Tree(x, y) {
        this._div = document.createElement("tree");
        document.body.appendChild(this._div);
        this.speed = Math.random() * 4 + 1;
        this.width = 277;
        this.height = 50;
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Tree.prototype, "div", {
        get: function () {
            return this._div;
        },
        enumerable: true,
        configurable: true
    });
    Tree.prototype.move = function () {
        this.x += this.speed;
        if (this.x > window.innerWidth)
            this.x = -450;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Tree.prototype.getRectangle = function () {
        return this._div.getBoundingClientRect();
    };
    return Tree;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.trees = new Array();
        this.roads = new Array();
        this.cars = new Array();
        this.water = new Water(100, 105);
        this.top = new Top(100, 105);
        this.fps = 60;
        for (var i = 0; i < 5; i++) {
            this.trees.push(new Tree(0, 165 + (57 * i)));
        }
        this.path = new Path(100, 445);
        for (var i = 0; i < 4; i++) {
            this.roads.push(new Road(100, 445 + 57 + 57 + (57 * i)));
        }
        this.path = new Path(100, 784);
        for (var i = 0; i < 5; i++) {
            this.cars.push(new Car(100, 445 + 60 + (57 * i)));
        }
        this.frog = new Frog(400, 790);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        var hitswater = this.checkCollision(this.water.getRectangle(), this.frog.getRectangle());
        if (hitswater) {
            var die = true;
            for (var _i = 0, _a = this.trees; _i < _a.length; _i++) {
                var t = _a[_i];
                var hitstree = this.checkCollision(t.getRectangle(), this.frog.getRectangle());
                if (hitstree) {
                    this.frog.x += t.speed;
                    this.frog.div.style.transform = "translate(" + this.frog.x + "px, " + this.frog.y + "px)";
                    die = false;
                    break;
                }
            }
            if (die) {
                console.log("die");
                this.dead = new Dead(this.frog.x, this.frog.y);
                this.frog.setBegin();
            }
        }
        for (var _b = 0, _c = this.trees; _b < _c.length; _b++) {
            var t = _c[_b];
            t.move();
        }
        for (var _d = 0, _e = this.cars; _d < _e.length; _d++) {
            var c = _e[_d];
            c.move();
            if (this.checkCollision(c.getRectangle(), this.frog.getRectangle())) {
                console.log("Een auto raakt de speler!");
                this.dead = new Dead(this.frog.x, this.frog.y);
                this.frog.setBegin();
            }
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    return Game;
}());
var Bullet = (function () {
    function Bullet(x, y) {
        this.width = 22;
        this.height = 22;
        this.div = document.createElement("bullet");
        document.body.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.xspeed = -1;
        this.yspeed = 1;
        this.move();
    }
    Bullet.prototype.move = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Bullet;
}());
var Dead = (function () {
    function Dead(x, y) {
        this._div = document.createElement("dead");
        document.body.appendChild(this._div);
        this.width = 50;
        this.height = 50;
        this.x = x;
        this.y = y;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px) ";
    }
    Object.defineProperty(Dead.prototype, "div", {
        get: function () {
            return this._div;
        },
        enumerable: true,
        configurable: true
    });
    return Dead;
}());
var Frog = (function () {
    function Frog(x, y) {
        var _this = this;
        this._div = document.createElement("frog");
        document.body.appendChild(this._div);
        this.width = 34;
        this.height = 46;
        this.x = x;
        this.y = y;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotate(270deg)";
        document.body.addEventListener('keydown', function () { return _this.move(event, KeyboardEvent); });
    }
    Object.defineProperty(Frog.prototype, "div", {
        get: function () {
            return this._div;
        },
        enumerable: true,
        configurable: true
    });
    Frog.prototype.move = function (e) {
        var code = e.keyCode ? e.keyCode : e.which;
        if (code === 38) {
            this.y -= 57;
            this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotate(270deg)";
        }
        else if (code === 40) {
            this.y += 57;
            this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotate(90deg)";
        }
        else if (code === 37) {
            this.x = Math.max(100, this.x - 10);
            this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotate(180deg)";
        }
        else if (code === 39) {
            this.x = this.x = Math.min(735, this.x + 30);
            this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotate(0deg)";
        }
    };
    Frog.prototype.getRectangle = function () {
        return this._div.getBoundingClientRect();
    };
    Frog.prototype.setBegin = function () {
        this.x = 400;
        this.y = 790;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotate(270deg)";
    };
    return Frog;
}());
var GameObject = (function () {
    function GameObject() {
    }
    return GameObject;
}());
var Gun = (function () {
    function Gun(chicken) {
        this.div = document.createElement("gun");
        chicken.div.appendChild(this.div);
        this.x = 20;
        this.y = 40;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.fire();
    }
    Gun.prototype.fire = function () {
        var rect = this.div.getBoundingClientRect();
        console.log("plaats een kogel op " + rect.left + " , " + rect.top);
        var bullet = new Bullet(this.x, this.y);
    };
    return Gun;
}());
window.addEventListener("load", function () {
    new Game();
});
var Path = (function () {
    function Path(x, y) {
        this._div = document.createElement("path");
        document.body.appendChild(this._div);
        this.width = 672;
        this.height = 57;
        this.x = x;
        this.y = y;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
    Object.defineProperty(Path.prototype, "div", {
        get: function () {
            return this._div;
        },
        enumerable: true,
        configurable: true
    });
    return Path;
}());
var Road = (function () {
    function Road(x, y) {
        this._div = document.createElement("road_1");
        document.body.appendChild(this._div);
        this.width = 672;
        this.height = 57;
        this.x = x;
        this.y = y;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
    Object.defineProperty(Road.prototype, "div", {
        get: function () {
            return this._div;
        },
        enumerable: true,
        configurable: true
    });
    return Road;
}());
var Top = (function () {
    function Top(x, y) {
        this._div = document.createElement("top");
        document.body.appendChild(this._div);
        this.width = 672;
        this.height = 57;
        this.x = x;
        this.y = y;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
    Object.defineProperty(Top.prototype, "div", {
        get: function () {
            return this._div;
        },
        enumerable: true,
        configurable: true
    });
    return Top;
}());
var Water = (function () {
    function Water(x, y) {
        this._div = document.createElement("water");
        document.body.appendChild(this._div);
        this.width = 672;
        this.height = 342;
        this.x = x;
        this.y = y;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
    Object.defineProperty(Water.prototype, "div", {
        get: function () {
            return this._div;
        },
        enumerable: true,
        configurable: true
    });
    Water.prototype.getRectangle = function () {
        return this._div.getBoundingClientRect();
    };
    return Water;
}());
//# sourceMappingURL=main.js.map