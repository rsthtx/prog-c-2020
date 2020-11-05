function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(70);
  fill(133, 18, 9);
  stroke(209, 52, 40)
  strokeWeight(3)

  // Define the control points
  const yRange = height / 4
  const deltaY = map(mouseX, 0, width, -yRange, yRange, true)

  const ax = 0
  const ay = height / 2 - deltaY
  const bx = width
  const by = height / 2 + deltaY

  const diameter = 50
  circle(ax, ay, diameter)
  circle(bx, by, diameter)

  // let n = 6
  let n = map(mouseY, 0, height, 30, 2, true)
  n = ceil(n)

  // Draw the lines using a loop
  for (let i = 0; i <= n; i++) {
    const x = map(i, 0, n, ax, bx)
    const y = map(i, 0, n, ay, by)
    circle(x, y, diameter / 2)
  }
}
