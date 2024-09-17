export default class Bullet{
    colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "pink",
        "magenta",
        "purple",
        "lime",
        "cyan",
        "teal",
    ]

    constructor(x,y,speed,damage){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;

        this.width = 5;
        this.height = 15;
        this.color = "orange";
       // this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    draw(contx){
        contx.fillStyle = this.color;
        this.y -= this.speed;
        contx.fillRect(this.x, this.y, this.width, this.height)
    }

    collideWith(sprite){
        if(
            this.x < sprite.x + sprite.width &&
            this.x + this.width > sprite.x &&
            this.y < sprite.y + sprite.height &&
            this.y + this.height >  sprite.y
        )   {
            sprite.takeDamage(this.damage);
            return true;
        }
        return false;
    }
}














