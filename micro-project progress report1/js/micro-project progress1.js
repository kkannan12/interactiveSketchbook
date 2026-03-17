let cubeSize = 200;
let size = 40;

let shapeY = 0;
let floating = false;
let shapeType = 0;
let hasShape = false;

let sign;

// shaking
let shaking = false;
let startTime = 0;
let shakeDuration = 3000;

// matching
let targets = [];
let matched = [];

// confetti
let confetti = [];
let confettiStarted = false;

// win
let won = false;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  ortho(); // fixes cube distortion

  sign = createGraphics(200, 80);
  sign.clear();
  sign.fill(0);
  sign.noStroke();
  sign.textAlign(CENTER, CENTER);
  sign.textSize(24);
  sign.textStyle(BOLD);
  sign.text("PRESS ME", 100, 40);

  for (let i = 0; i < 3; i++) {
    targets[i] = floor(random(3));
    matched[i] = false;
  }
}

function draw() {
  clear();

  let shakeAngle = 0;

  if (shaking) {
    let elapsed = millis() - startTime;
    let fade = 1 - (elapsed / shakeDuration);
    shakeAngle = sin(elapsed * 0.015) * 0.08 * fade;

    if (elapsed > shakeDuration) {
      shaking = false;
      hasShape = true;
      floating = true;
      shapeY = 0;

      for (let i = 0; i < targets.length; i++) {
        if (!matched[i]) {
          if (targets[i] === shapeType) {
            matched[i] = true;
          }
          break;
        }
      }
    }
  }

  rotateY(shakeAngle);

  // move cube DOWN
  translate(0, 100, 0);

  // cube
  noFill();
  stroke(40);
  box(cubeSize);

  // sign
  push();
  translate(0, 0, cubeSize / 2 + 1);
  noStroke();
  texture(sign);
  plane(140, 55);
  pop();

  // floating shape
  if (hasShape) {
    let cubeTop = -cubeSize / 2;
    let stopPoint = cubeTop - size;

    if (floating && shapeY > stopPoint) {
      shapeY -= 1;
    }

    push();
    translate(0, shapeY, 0);
    fill(40);
    noStroke();
    drawShape(shapeType, size);
    pop();
  }

  // win trigger
  if (!confettiStarted && matched[0] && matched[1] && matched[2]) {
    confettiStarted = true;
    won = true;

    for (let i = 0; i < 120; i++) {
      confetti.push({
        x: width / 2 + random(-40, 40),
        y: height / 2 + 100 - cubeSize / 2 - 40,
        vx: random(-1.5, 1.5),
        vy: random(2, 5),
        size: random(5, 10),
        r: random(255),
        g: random(255),
        b: random(255)
      });
    }
  }

  drawTargets();
  drawConfetti();
  drawWinMessage();
}

function mousePressed() {
  hasShape = false;
  floating = false;
  shapeType = floor(random(3));
  shaking = true;
  startTime = millis();
}

function drawShape(type, s) {
  if (type === 0) sphere(s);
  else if (type === 1) box(s);
  else cone(s, s * 1.5);
}

// TARGETS (LEFT SIDE)
function drawTargets() {
  push();
  resetMatrix();
  translate(-width / 2, -height / 2);

  fill(40);
  textSize(16);
  text("Match:", 40, 40);

  for (let i = 0; i < 3; i++) {
    let x = 60 + i * 70;
    let y = 90;

    fill(40);
    noStroke();

    if (targets[i] === 0) ellipse(x, y, 40);
    else if (targets[i] === 1) rectMode(CENTER), rect(x, y, 40, 40);
    else triangle(x - 20, y + 20, x + 20, y + 20, x, y - 20);

    if (matched[i]) {
      stroke(0, 180, 0);
      strokeWeight(4);
      noFill();

      line(x + 10, y + 5, x + 18, y + 12);
      line(x + 18, y + 12, x + 30, y - 8);
    }
  }

  pop();
}

// CONFETTI (FIXED POSITION)
function drawConfetti() {
  push();
  resetMatrix();
  translate(-width / 2, -height / 2);

  for (let c of confetti) {
    c.x += c.vx;
    c.y += c.vy;

    fill(c.r, c.g, c.b);
    noStroke();
    rect(c.x, c.y, c.size, c.size);
  }

  pop();
}

// WIN TEXT
function drawWinMessage() {
  if (won) {
    push();
    resetMatrix();
    translate(-width / 2, -height / 2);

    fill(40);
    textAlign(CENTER, CENTER);
    textSize(42);
    textStyle(BOLD);

    text("YOU WIN!", width / 2, height / 2 + cubeSize / 2 + 120);

    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}