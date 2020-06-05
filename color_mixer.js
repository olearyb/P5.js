var colorSq1 = 0;
var colorSq2 = 0;

function windowResized() {
  resizedCanvas(windowWidth, windowHeight);
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  colorSq1 = color('red');
  colorSq2 = color('blue');

  rectMode(CENTER);
}

function draw() {

  var inverseX = width - mouseX;
  var inverseY = height - mouseY;

  clear();

  blendMode(DIFFERENCE);
  //square 1
  fill(color('rgb(255, 0 ,0)'));
  rect(mouseX, height / 2, mouseY / 2 + 10, mouseY / 2 + 10);

  // square 1a
  fill(color('rgb(0, 255 ,0)'));
   rect(width / 2, mouseY, mouseX / 4 + 10, mouseX / 4 + 10);

  // square 2
  fill(color('rgb(0, 0 ,255)'));
  rect(inverseX, height / 2, inverseY / 2 + 10, inverseY / 2 + 10);



 }
