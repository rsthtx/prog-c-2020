let balls = new Array(20);

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < balls.length; i++) {
    balls[i] = new RandomBouncingBall(width / 2, height / 2);
  }
}

function draw() {
  background(220);

  for (let i = 0; i < balls.length; i++) {
    const b = balls[i];
    b.render();
    b.update();
    // balls[i].render();
    // balls[i].update();
  }
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(5, 50)

    this.speedX = random(-10, 10)
    this.speedY = random(-10, 10)
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
  }

  render() {
    circle(this.x, this.y, this.r * 2);
  }
}

class BouncingBall extends Ball {
  update() {
    super.update()

    if (this.x + this.r > width || this.x - this.r < 0) {
      this.speedX = -this.speedX
    }

    if (this.y + this.r > height || this.y - this.r < 0) {
      this.speedY = -this.speedY
    }
  }
}

class RandomBouncingBall extends BouncingBall {

  constructor(x, y) {
    super(x, y)
    this.sw = random(1, 10);

    const red =  random(0, 255)
    const green =  random(0, 255)
    const blue =  random(0, 255)
    this.color = color(red, green, blue)
  }

  render() {
    strokeWeight(this.sw);
    fill(this.color)
    super.render()
  }
}