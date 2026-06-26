class Player {
    constructor() {
        this.health = 0;
        this.image = null;
        this.pos = createVector(0, 0);
    }

    setHealth(h) {
        this.health = h;
    }

    setImage(img) {
        this.image = img;
    }

    movement() {
        if (keyIsDown(65)) this.pos.x -= 10; 
        if (keyIsDown(68)) this.pos.x += 10; 
        if (keyIsDown(87)) this.pos.y -= 10; 
        if (keyIsDown(83)) this.pos.y += 10; 
    }

    show() {
        if (this.image) {
            image(this.image, this.pos.x, this.pos.y);
        }
    }
}

function makePlayer() {
    return new Player();
}