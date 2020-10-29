function setup() {
  createCanvas(400, 400);


  // Using nested loop
  for(let i = 2; i <= 10; i++){
    console.log(`tabel: ${i}`)
    for(let j = 1; j <= 10; j++){
      let product = i*j;
      console.log(product);
    }
  }

}

function draw() {
  background(220);
}
