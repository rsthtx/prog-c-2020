function setup() {
  createCanvas(400, 400);
  //Brug af do while løkke
  let x = 1;
  let y = 1
  do {
      x++
      y = y + x
  } while (x < 20);
  alert(y)
}

function draw() {
  background(220);
  circle(200,200,100)
}
