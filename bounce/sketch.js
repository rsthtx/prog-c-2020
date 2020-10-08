let cx = 50;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  cx = mouseX;

  circle(cx, 300, 50);

  if (cx > width/2) {
    fill("red");
  } else {
    fill("blue");
  }

  cx = cx + 1;

  // TODO  make it bounce

  circle(width, height, 200);
}