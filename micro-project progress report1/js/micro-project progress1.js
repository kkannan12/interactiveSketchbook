let circleY;
let squareSize = 200;
let circleSize = 80;
let floating = false;

function setup() {
  createCanvas(700, 500);
  circleY = height / 2; // start in center
}

function draw() {
  background(220);

  // Draw square in center
  rectMode(CENTER);
  fill(255);
  rect(width / 2, height / 2, squareSize, squareSize);

  // Draw circle inside square
  fill(0);
  ellipse(width / 2, circleY, circleSize, circleSize);

  let squareTop = height/2 - squareSize/2;
  let stopPoint = squareTop - circleSize/4;

  fill(0);
  ellipse(width / 2, circleY,circleSize, circleSize);




  // If key pressed, float upward slowly
 if (floating && circleY > height/2 - squareSize/2 + circleSize/2) {
  circleY -= 1;
}
}

function mousePressed() {
  floating = true;
}