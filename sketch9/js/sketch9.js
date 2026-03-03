let images = [];
let currentIndex = 0;

function preload() {
    images[0] = loadImage("../img/image1.jpeg");
    images[1] = loadImage("../img/image2.jpeg");
    images[2] = loadImage("../img/image3.jpeg");
    images[3] = loadImage("../img/image4.jpeg");
    images[4] = loadImage("../img/image5.jpeg");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    imageMode(CENTER);
}

function draw() {
    background(0);

    let img = images[currentIndex];
    image(img, width/2, height/2);

    fill(255)
    textAlign(CENTER, TOP);
    textSize(24);
    text("State" + (currentIndex +1) + "/" + images.length, width/2, 20);

    textSize(16);
    text("use left and right arrows to anvigate", width/2, height-40);







}

function keyPressed() {

    if (keyCode === RIGHT_ARROW) {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
    }

    if (keyCode === LEFT_ARROW) {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
    }

}

