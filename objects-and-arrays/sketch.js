
let n = 5;
let xValues = [ 10,40,110,120,300];
// let yValues = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // for (let i = 0; i <= n; i++) {
  //   let x = map(i, 0, n, 0, windowWidth)
  //   xValues.push(x);
  //   // let y = map(i, 0, n, 50, windowHeight -50)
  //   // yValues.push(y);
  // }
  console.table(xValues)
  // console.table(yValues)
}

function draw() {
  background(220)
  for(let i = 0 ; i < xValues.length; i++){
    const x = xValues[i];
    const y = 300;
    circle(x,y, 20);
  }

  // noLoop()
  // background(70);
  // fill(133, 18, 9);
  // stroke(209, 52, 40)
  // strokeWeight(3)

  // // Draw the lines using a loop
  // for (let i = 0; i < xValues.length; i++) {
    
  // }
}

