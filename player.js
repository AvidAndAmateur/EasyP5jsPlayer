class Player {
    constructor() {
        //variable chest
        this.health = 0;
        this.image = null;
        this.pos = createVector(0, 0);
        this.attacking = null;
        this.speed = 10;
        this.vel;
        this.gravity;
    }
    setSpeed(speed){
        this.speed = speed
    }

    setHealth(h) {
        this.health = h; //basic setter method
    }

    setImage(img) {
        this.image = img; //basic setter method
    }

    movement() { //basic vector based movement system using wasd
        if (keyIsDown(65)) this.pos.x -= this.speed; 
        if (keyIsDown(68)) this.pos.x += this.speed; 
        if (keyIsDown(87)) this.pos.y -= this.speed; 
        if (keyIsDown(83)) this.pos.y += this.speed; 
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

}

function makePlayer() { //self explanatory
    return new Player();
}
