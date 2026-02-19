function setup() {
  createCanvas(600,400);
}



function draw() {
  background(200);



    let size = 200 + sin(frameCount * 0.01) * 100;



  //direct manipulation



  fill(191, 148, 228);      // purple
  ellipse(mouseX,mouseY,size);




  //constraint
}

// adj - slow