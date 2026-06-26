let enemies = []
class enemy{
    constructor(health=0,level=0,damage=0,posx=0,posy=0){
        this.health = health
        this.level = level
        this.damage = damage;
        this.image = null;
        this.pos = createVector(posx,posy)
        this.attacking=false
    }
    setImage(img) {
        this.image = img; //basic setter method
    }
    show(sizex=50,sizey=50) { //shows player image
        if (this.image) {
            image(this.image, this.pos.x, this.pos.y,sizex,sizey);
        }
    }
    show_default(){ //if player has no image they should use this to show basic obj
        ellipse(this.pos.x, this.pos.y, 50);
    }
    attack(){
        this.attacking=true
    }

}
function makeEnemy(health=0,level=0,damage=0,x=random(0, width),y=random(0,height)){
    enemies.push(new enemy(health,level,damage,x,y))
}