let cx = 200;
let hastighed = 5

function setup() {
  createCanvas(600, 600);
  cx = width/2;
}

function draw() {
  background(220);
  // frameRate(10);
  const radius = 80;
  const diameter = 2*radius;
  // draw the circle
  
  const xLimit = width/2;
  const yLimit = height/2;
  
  if(mouseX > xLimit || mouseY > yLimit){
    fill("blue");
  } else {
    fill("red");
  }
  
  
  if (cx < 0 + radius || cx > width - radius) {
    hastighed = -hastighed;
  }

  line(xLimit, 0, xLimit, height);
  line(0, yLimit, width, yLimit);

  circle(cx, 300, diameter);
  
  cx = cx + hastighed;
  console.log(cx)
}