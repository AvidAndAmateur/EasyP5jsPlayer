let enemies = []
class Enemy{
    constructor(health=0,level=0,damage=0,posx=0,posy=0){
        this.health = health
        this.level = level
        this.damage = damage;
        this.image = null;
        this.pos = createVector(posx,posy)
        this.attacking=false
        this.speed = 10;
    }
    setSpeed(speed){
        this.speed = speed;
    }
    setImage(img) {
        this.image = img; //basic setter method
    }
    show(sizex=50,sizey=50) { //shows player image
        if (this.image) {
            image(this.image, this.pos.x, this.pos.y,sizex,sizey);
        }
        else{
            this.show_default()
        }
    }
    show_default(){ //if player has no image they should use this to show basic obj
        ellipse(this.pos.x, this.pos.y, 50);
    }
    attack(){
        this.attacking=true
        setTimeout(()=>this.attacking=false,1500)
    }
    checkmap(){ //creates a border system where if the player goes off map they return from opposite direction
        if(this.pos.y>height+5){
        this.pos.y=0
        }
    if(this.pos.y<-5){
      this.pos.y=height
    }
    if(this.pos.x<-5){
      this.pos.x=width
    }
    if(this.pos.x>width+5){
      this.pos.x=0
    }
  }

}
function makeEnemy(health=0,level=0,damage=0,x=random(0, width),y=random(0,height)){
    enemies.push(new enemy(health,level,damage,x,y))
}