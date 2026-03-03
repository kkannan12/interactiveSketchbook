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
    createCanvas(1275,1275);
    textSize(16);
}

function draw() {
    background(0);

    let img = images[currentIndex];
    image(img, 0, 0);
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

