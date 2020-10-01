function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  let cx = width/4 + mouseX *.5;
  let cy = mouseY;
  let headSize = 50;
  let headRadius = headSize * 0.5;

  stroke(5);

  // tegner hoved
  fill(mouseX);
  circle(cx, cy, headSize);

  // hals  
  let neckSize = 20;
  let neckStartY = cy + headRadius;
  line(cx, neckStartY, cx, neckStartY + neckSize);


  // krop
  let bodyHeight = 100;
  let bodyWidth = 50;
  stroke(255, 0, 0);
  strokeWeight(10);
  fill(29, 58, 184);
 
  
  if (mouseY < height / 2) {

    if (mouseX > 100) {
      fill(0, 200, 0);
    }

    ellipse(cx, cy + headRadius + neckSize + bodyHeight*0.5, bodyWidth, bodyHeight);
  } else {
    rectMode(CENTER);
    rect(cx, cy + headRadius + neckSize + bodyHeight*0.5, bodyWidth, bodyHeight);
    // rect(cx, cy + headSize + neckSize, bodyWidth, bodyHeight);
  }

  // ben
  let legStartY = cy + headRadius + neckSize + bodyHeight;
  let legHeight = 70;
  let stance = 20;
  line(cx, legStartY, cx - stance, legStartY + legHeight)
  line(cx, legStartY, cx + stance, legStartY + legHeight)



}