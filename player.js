class Player {
    constructor() {
        //variable chest
        this.health = 0;
        this.image = null;
        this.pos = createVector(0, 0);
        this.attacking = null;
        this.vel;
        this.gravity;
        
    }

    setHealth(h) {
        this.health = h; //basic setter method
    }

    setImage(img) {
        this.image = img; //basic setter method
    }

    movement() { //basic vector based movement system using wasd
        if (keyIsDown(65)) this.pos.x -= 10; 
        if (keyIsDown(68)) this.pos.x += 10; 
        if (keyIsDown(87)) this.pos.y -= 10; 
        if (keyIsDown(83)) this.pos.y += 10; 
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
    }
    show_default(){ //if player has no image they should use this to show basic obj
        ellipse(this.pos.x, this.pos.y, 50);
    }
}

function makePlayer() { //self explanatory
    return new Player();
}
