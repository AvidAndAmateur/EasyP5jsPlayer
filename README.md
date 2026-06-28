# EasyP5js

EasyP5js is a simple p5.js library aimed at getting users started quickly with making a 2d web games.
---
## Who this is for
me, I've had to reuse this code a lot and figured making it into a library would be better.

People who have similar problems would also benefit.

If you are new to p5js I would recommend reading through the code in this library and understanding it before using it, this way you can learn
both how this library functions and how the p5js langauge functions (and in part javascript as a whole)

At the moment EasyP5js provides movement, entities, and state flags. 
Game mechanics like combat, collisions, and AI are intended to be implemented by the user.
Default variations may or may not be implemented at a later date

---

## Installation
For the player module do the following,
In your project's `index.html` file, paste this:

```html
<script src="https://cdn.jsdelivr.net/gh/AvidAndAmateur/EasyP5js@main/player.js"></script>
```
For the enemy module do the following,
In your project's `index.html` file, paste this:
```html
<script src="https://cdn.jsdelivr.net/gh/AvidAndAmateur/EasyP5js@main/enemy.js"></script>
```
This ensures the librarys are loaded and findable.

---

## Usage of EasyP5js player

Once a variable for the player is made you must assign the player object to it, you can do this by using:

```javascript
player = makePlayer();
```

---

### Set player health

```javascript
player.setHealth(x);
```

Where `x` is the desired amount.

---

### To set player image

```javascript
player.setImage(img);
```

Where `img` is your `loadImage()` variable.

---

### To show player image

```javascript
player.show(x, y);
```

Where:
- `x` = width
- `y` = height

---

### Movement

Make sure this is inside `draw()`:

```javascript
function draw() {
  player.movement();
}
```

---

### Screen wrap (checkmap)

```javascript
function draw() {
  player.checkmap();
}
```

This makes the player reappear on the opposite side of the screen.

---

## Example

```javascript
let imgy;

function preload() {
  imgy = loadImage("imageLink.png");
}

function setup() {
  createCanvas(400, 400);
  p = makePlayer();
  p.setImage(imgy);
}

function draw() {
  background(220);
  p.movement();
  p.checkmap();
  p.show(50, 50);
}
```
---
## Usage of EasyP5js enemy
Once a variable for the player is made you must assign the enemy object to it, you can do this by using:
```javascript
enemy = makeEnemy(A,B,C,X,Y)
```
Where:
- `A` = Desired health
- `B` = Desired level
- `C` = Desired damage (when attacking player)
- `X` = Desired X position (leave blank for random)
- `Y` = Desired Y position (leave blank for random)
As of 27/06/26 (DD/MM/YY) certain variables do not have a custom set function like player does for health
