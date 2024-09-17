import Player from "./Player.js";
import Enemy from "./Enemy.Js";
import BulletController from "./BulletController.js";

const canvas = document.getElementById("game")
const contx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 700;

const bulletController = new BulletController(canvas);
const player = new Player(canvas.width / 2.2, canvas.height / 1.3, bulletController)

const enemies = [
    new Enemy(100, 100, "yellow", 5),
    new Enemy(200, 100, "red", 10),
    new Enemy(300, 100, "red", 10),
    new Enemy(400, 100, "yellow", 5),
    new Enemy(100, 200, "blue", 3),
    new Enemy(200, 200, "green", 1),
    new Enemy(300, 200, "green", 1),
    new Enemy(400, 200, "blue", 3)
]



function gameLoop() {
    setCommonStyle();
    contx.fillStyle = "Black";
    contx.fillRect(0,0,canvas.width, canvas.height);
    bulletController.draw(contx)
    player.draw(contx);
    
    enemies.forEach((enemy) => {
        if(bulletController.collideWith(enemy)){
            if(enemy.health <= 0) {
                const index = enemies.indexOf(enemy);
                enemies.splice(index,1)
            }
        } else{
            enemy.draw(contx);
        }  
    })
}

function setCommonStyle() {
    contx.shadowColor = "#d53";
    contx.shadowBlur = 20;
    contx.lineJoin = "bevel";
    contx.lineWidth = 5;
}


setInterval(gameLoop,1000/60)

