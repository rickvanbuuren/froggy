"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tree = (function () {
    function Tree(x, y, speed) {
        this._div = document.createElement("tree");
        document.body.appendChild(this._div);
        this.speed = speed;
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
        if (this.x > 772)
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
        this.scenes = {
            startScreen: StartScreen,
            endScreen: EndScreen,
            gameScreen: GameScreen,
            wonScreen: WonScreen
        };
        this.activeScene = new StartScreen(this);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.activeScene.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.switchScreen = function (scene) {
        this.activeScene.resetScreen();
        this.activeScene = new this.scenes[scene](this);
    };
    return Game;
}());
var Car = (function () {
    function Car(x, y) {
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
        if (this.x > 772)
            this.x = -50;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Car.prototype.getRectangle = function () {
        return this._div.getBoundingClientRect();
    };
    return Car;
}());
var Scene = (function () {
    function Scene(g) {
        this.game = g;
    }
    Scene.prototype.resetScreen = function () {
        document.body.innerHTML = "";
    };
    Scene.prototype.switchScreen = function (scene) {
        this.game.switchScreen(scene);
    };
    Scene.prototype.update = function () {
    };
    Scene.prototype.addElement = function (tag, x, y) {
        var element = document.createElement(tag);
        document.body.appendChild(element);
        var startbuttonX = x;
        var startbuttonY = y;
        element.style.transform = "translate(" + startbuttonX + "px, " + startbuttonY + "px)";
        return element;
    };
    return Scene;
}());
var EndScreen = (function (_super) {
    __extends(EndScreen, _super);
    function EndScreen(game) {
        var _this = _super.call(this, game) || this;
        _this.setUpEndScreen();
        return _this;
    }
    EndScreen.prototype.setUpEndScreen = function () {
        var _this = this;
        var backgroundImage = this.addElement("gameoverBackground", 300, 150);
        var button = this.addElement("buttonBack", 420, 500);
        button.addEventListener('click', function (e) { return _this.switchScreen("startScreen"); });
    };
    return EndScreen;
}(Scene));
var StartScreen = (function (_super) {
    __extends(StartScreen, _super);
    function StartScreen(game) {
        var _this = _super.call(this, game) || this;
        _this.setUpStartScreen();
        return _this;
    }
    StartScreen.prototype.setUpStartScreen = function () {
        var _this = this;
        var backgroundImage = this.addElement("menuBackground", 300, 150);
        var button = this.addElement("buttonPlay", 420, 500);
        button.addEventListener('click', function (e) { return _this.switchScreen("gameScreen"); });
    };
    return StartScreen;
}(Scene));
var StaticGameObject = (function () {
    function StaticGameObject(x, y, w, h) {
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(StaticGameObject.prototype, "div", {
        get: function () {
            return this._div;
        },
        enumerable: true,
        configurable: true
    });
    return StaticGameObject;
}());
var UIelement = (function () {
    function UIelement(x, y) {
        this.width = 58;
        this.height = 50;
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(UIelement.prototype, "div", {
        get: function () {
            return this._div;
        },
        enumerable: true,
        configurable: true
    });
    return UIelement;
}());
var Dead = (function () {
    function Dead(x, y) {
        this.sound = new Howl({
            src: "./sounds/sound-frogger-squash.wav",
            loop: false,
            volume: 1.0
        });
        this._div = document.createElement("dead");
        document.body.appendChild(this._div);
        this.width = 50;
        this.height = 50;
        this.x = x;
        this.y = y;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px) ";
        this.sound.play();
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
        this.sound = new Howl({
            src: "./sounds/sound-frogger-hop.wav",
            loop: false,
            volume: 1.0
        });
        this._div = document.createElement("frog");
        document.body.appendChild(this._div);
        this._lifes = 3;
        this.width = 34;
        this.height = 46;
        this.x = x;
        this.y = y;
        this.xspeed = 30;
        this.yspeed = 57;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotate(270deg)";
        document.body.addEventListener('keyup', function () { return _this.move(event, KeyboardEvent); });
    }
    Object.defineProperty(Frog.prototype, "div", {
        get: function () {
            return this._div;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Frog.prototype, "lives", {
        get: function () {
            return this._lifes;
        },
        enumerable: true,
        configurable: true
    });
    Frog.prototype.move = function (e) {
        var code = e.keyCode ? e.keyCode : e.which;
        if (code === 38) {
            this.y -= this.yspeed;
            this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotate(270deg)";
            this.sound.play();
        }
        else if (code === 40) {
            if (this.y > 733) {
                this.y += 0;
            }
            else {
                this.y += this.yspeed;
            }
            this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotate(90deg)";
            this.sound.play();
        }
        else if (code === 37) {
            this.x = Math.max(109, this.x - this.xspeed);
            this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotate(180deg)";
            this.sound.play();
        }
        else if (code === 39) {
            this.x = Math.min(735, this.x + this.xspeed);
            this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotate(0deg)";
            this.sound.play();
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
var GameScreen = (function (_super) {
    __extends(GameScreen, _super);
    function GameScreen(game) {
        var _this = _super.call(this, game) || this;
        _this.backgrounsMusic = new Howl({
            src: "./sounds/FroggerFix.mp3",
            loop: true,
            volume: 0.8
        });
        _this.gameover = false;
        _this.trees = new Array();
        _this.roads = new Array();
        _this.cars = new Array();
        _this.lives = new Array();
        _this.water = new Water(100, 105, 672, 342);
        _this.top = new Top(100, 105, 672, 57);
        _this.fps = 60;
        _this.backgrounsMusic.play();
        for (var i = 0; i < 3; i++) {
            _this.lives.push(new LiveUI(100 + (i * 45), 850));
        }
        var count = 0;
        var previousSpeed = 0;
        for (var i = 0; i < 10; i++) {
            var x = -377;
            var y = 165 + (57 * count);
            var speed = Math.random() * 4 + 1;
            if (i % 2 == 0) {
                x = 0;
                previousSpeed = speed;
            }
            if (i % 2 == 1) {
                count++;
            }
            _this.trees.push(new Tree(x, y, previousSpeed));
        }
        _this.path = new Path(100, 445, 672, 57);
        for (var i = 0; i < 4; i++) {
            _this.roads.push(new Road(100, 445 + 57 + 57 + (57 * i), 672, 57));
        }
        _this.path = new Path(100, 784, 672, 57);
        for (var i = 0; i < 3; i++) {
            _this.cars.push(new Pinkcar(50, 445 + 60 + (57 * i)));
        }
        for (var i = 0; i < 2; i++) {
            _this.cars.push(new Whitecar(100, 445 + 60 + 57 + 57 + 57 + (57 * i)));
        }
        _this.frog = new Frog(400, 790);
        _this.border = new ScreenBorder(-177, 0);
        _this.border = new ScreenBorder(772, 0);
        return _this;
    }
    GameScreen.prototype.update = function () {
        var hitswater = this.checkCollision(this.water.getRectangle(), this.frog.getRectangle());
        if (hitswater) {
            var die = true;
            for (var _i = 0, _a = this.trees; _i < _a.length; _i++) {
                var t = _a[_i];
                var hitstree = this.checkCollision(t.getRectangle(), this.frog.getRectangle());
                if (hitstree) {
                    this.frog.x += t.speed;
                    this.frog.div.style.transform = "translate(" + this.frog.x + "px, " + this.frog.y + "px) rotate(270deg)";
                    die = false;
                    break;
                }
            }
            if (die) {
                this.dead = new Dead(this.frog.x, this.frog.y);
                this.frog.setBegin();
                this.removeFromArray();
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
                this.dead = new Dead(this.frog.x, this.frog.y);
                this.frog.setBegin();
                this.removeFromArray();
            }
        }
        if (this.frog.y == 163) {
            this.switchScreen("wonScreen");
        }
    };
    GameScreen.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    GameScreen.prototype.removeFromArray = function () {
        if (typeof this.lives !== 'undefined' && this.lives.length > 0) {
            document.body.removeChild(this.lives[this.lives.length - 1].div);
            this.lives.pop();
        }
        else {
            this.gameover = true;
            if (this.gameover) {
                this.gameOver();
                this.gameover = false;
                return;
            }
        }
    };
    GameScreen.prototype.gameOver = function () {
        if (this.lives.length == 0) {
            this.backgrounsMusic.stop();
            this.switchScreen("endScreen");
        }
    };
    return GameScreen;
}(Scene));
var LiveUI = (function (_super) {
    __extends(LiveUI, _super);
    function LiveUI(x, y) {
        var _this = _super.call(this, x, y) || this;
        _this._div = document.createElement("frog");
        document.body.appendChild(_this._div);
        _this._div.style.transform = "translate(" + _this.x + "px, " + _this.y + "px)";
        return _this;
    }
    return LiveUI;
}(UIelement));
window.addEventListener("load", function () {
    new Game();
});
var Path = (function (_super) {
    __extends(Path, _super);
    function Path(x, y, w, h) {
        var _this = _super.call(this, x, y, w, h) || this;
        _this._div = document.createElement("path");
        document.body.appendChild(_this._div);
        _this.width = w;
        _this.height = h;
        _this.x = x;
        _this.y = y;
        _this._div.style.transform = "translate(" + _this.x + "px, " + _this.y + "px)";
        return _this;
    }
    return Path;
}(StaticGameObject));
var Pinkcar = (function (_super) {
    __extends(Pinkcar, _super);
    function Pinkcar(x, y) {
        var _this = _super.call(this, x, y) || this;
        _this.speed = Math.random() * 7 + 4;
        _this._div = document.createElement("pinkcar");
        document.body.appendChild(_this._div);
        return _this;
    }
    return Pinkcar;
}(Car));
var Road = (function (_super) {
    __extends(Road, _super);
    function Road(x, y, w, h) {
        var _this = _super.call(this, x, y, w, h) || this;
        _this._div = document.createElement("road_1");
        document.body.appendChild(_this._div);
        _this.width = w;
        _this.height = h;
        _this.x = x;
        _this.y = y;
        _this._div.style.transform = "translate(" + _this.x + "px, " + _this.y + "px)";
        return _this;
    }
    return Road;
}(StaticGameObject));
var ScreenBorder = (function () {
    function ScreenBorder(x, y) {
        this._div = document.createElement("screenborder");
        document.body.appendChild(this._div);
        this.width = 672;
        this.height = 57;
        this.x = x;
        this.y = y;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
    Object.defineProperty(ScreenBorder.prototype, "div", {
        get: function () {
            return this._div;
        },
        enumerable: true,
        configurable: true
    });
    return ScreenBorder;
}());
var Top = (function (_super) {
    __extends(Top, _super);
    function Top(x, y, w, h) {
        var _this = _super.call(this, x, y, w, h) || this;
        _this._div = document.createElement("top");
        document.body.appendChild(_this._div);
        _this.width = w;
        _this.height = h;
        _this.x = x;
        _this.y = y;
        _this._div.style.transform = "translate(" + _this.x + "px, " + _this.y + "px)";
        return _this;
    }
    return Top;
}(StaticGameObject));
var Water = (function (_super) {
    __extends(Water, _super);
    function Water(x, y, w, h) {
        var _this = _super.call(this, x, y, w, h) || this;
        _this._div = document.createElement("water");
        document.body.appendChild(_this._div);
        _this.width = w;
        _this.height = h;
        _this.x = x;
        _this.y = y;
        _this._div.style.transform = "translate(" + _this.x + "px, " + _this.y + "px)";
        return _this;
    }
    Water.prototype.getRectangle = function () {
        return this._div.getBoundingClientRect();
    };
    return Water;
}(StaticGameObject));
var Whitecar = (function (_super) {
    __extends(Whitecar, _super);
    function Whitecar(x, y) {
        var _this = _super.call(this, x, y) || this;
        _this._div = document.createElement("whitecar");
        document.body.appendChild(_this._div);
        return _this;
    }
    return Whitecar;
}(Car));
var WonScreen = (function (_super) {
    __extends(WonScreen, _super);
    function WonScreen(game) {
        var _this = _super.call(this, game) || this;
        _this.setUpStartScreen();
        return _this;
    }
    WonScreen.prototype.setUpStartScreen = function () {
        var _this = this;
        var backgroundImage = this.addElement("wonBackground", 300, 150);
        var button = this.addElement("buttonBack", 420, 500);
        button.addEventListener('click', function (e) { return _this.switchScreen("startScreen"); });
    };
    return WonScreen;
}(Scene));
//# sourceMappingURL=main.js.map