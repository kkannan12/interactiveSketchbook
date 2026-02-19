function setup() {
   createCanvas(1500,900);
}


function draw() {
 background(255, 20); // white with alpha


 fill(255, 0, 100, 80);
 noStroke();
 ellipse(mouseX, mouseY, 400);
}

// adj - lazy