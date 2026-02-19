let progress = 0;
let animating = false;

function setup() {
  createCanvas(600, 200);
}

function draw() {
  background(220);

// animate

if(animating && progress < width) {
    progress += 1; //bar speed
}

//draw bar
  noStroke();
  fill("#00ff00");
  rect(0, 0, progress, height);

  //complete text
  if (progress >= width) {
    fill(0);
    textSize(16);
    text("State: Complete", width -150, height -20);
    }
  }

function mousePressed() {
    progress = 0;
  animating = true; 
   
  }
