let cubeSize = 200;
let size = 60;

let shapeY = 0;
let floating = false;

let shapeType = 0;   // 0 sphere, 1 box, 2 cone
let hasShape = false; // <-- start empty



function setup() {
  createCanvas(700, 500, WEBGL);
}




function draw() {
  background(220);


  // cube wireframe
  noFill();
  stroke(0);
  box(cubeSize);

  


  // only animate/draw AFTER a shape exists
  if (hasShape) {
    let cubeTop = -cubeSize / 2;
    let stopPoint = cubeTop - size;

    if (floating && shapeY > stopPoint) {
      shapeY -= 1;
    }

    // draw random shape
    push();
    translate(0, shapeY, 0);
    noStroke();
    fill(0);

    if (shapeType === 0) sphere(size);
    else if (shapeType === 1) box(size);
    else cone(size, size * 1.5);

    pop();
  }
}

function mousePressed() {
  hasShape = true;           // now we will draw a shape
  shapeY = 0;                // start in center
  floating = true;           // start moving
  shapeType = floor(random(3)); // choose random shape
}