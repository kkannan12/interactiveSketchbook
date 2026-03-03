

let offset=0
let offsetY = 0;

let startTime;
let timeLimit = 10000;

function setup(){
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    //RECT MODE CENTER MEASURES PLACEMENT FROM THE CENTER OF THE SHAPE

    rect(width/3, height/2, 100, 100);
    rect(width *2/3, height/2, 100, 100);


}

function draw() {
    background(0);

    let elapsed = millis() - startTime;

    let remaining = floor(timeLimit - elapsed) / 1000;

    let timeStarted = true;


    textSize(32);
    fill(255);
    text("Time: " - remaining, width/2, 50);

    if (elapsed>timeLimit) {
        offset=0;
        offsetY=0;
        startTime= millis();
    }


   //moving rectangle
    push();
    translate(offset, offset);
    fill(100, 200, 100);
    rect(width/3, height/2, 100, 100);
    pop();

    rect(width/2, height/2, 100, 100)
;}

function keyPressed(){

    if(!timeStarted) {
        startTime = millis();
        timeStarted = true;
    }
    offset += random(-50, 50);
    offsetY += random(offset, -75, 75);
    //takes current value of offset, and everytime key 
    //pressed we add 20 and save it as a new value




}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}