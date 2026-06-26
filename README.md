# EasyP5jsPlayer

EasyP5jsPlayer is a simple p5.js library aimed at getting users started quickly with making a player object for their game.

---

## Installation

In your project's `index.html` file, paste this:

```html
<script src="https://cdn.jsdelivr.net/gh/AvidAndAmateur/EasyP5jsPlayer@main/player.js"></script>
```

This ensures the library is loaded and findable.

---

## Usage

Once the player object is made (for example a variable named `player`), create it using:

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

### Set player image

```javascript
player.setImage(img);
```

Where `img` is your `loadImage()` variable.

---

### Show player

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
