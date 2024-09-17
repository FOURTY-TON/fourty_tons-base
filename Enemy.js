export default class Enemy{
    constructor(x,y,color,health){
        this.x = x;
        this.y = y;
        this.color = color;
        this.health = health;
        this.width = 50;
        this.height = 50;
    }

    draw(contx){
        contx.fillStyle = this.color;
        if(this.health > 1){          
            contx.strokeStyle = "white";
        }else{
            contx.strokeStyle = this.color;
        }    

        contx.fillRect(this.x,this.y,this.width,this.height);
        contx.strokeRect(this.x,this.y,this.width,this.height);

        contx.fillStyle = "black";
        contx.font = "25px Arial";
        contx.fillText(
            this.health, 
            this.x+this.width/3.5,
            this.y+this.height/1.5
        )
    }

    takeDamage(damage){
        this.health -= damage;
    }





    
}