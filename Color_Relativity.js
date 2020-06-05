

var canvas;

var dragging = false;
var rollover = false;

var x, y, w, h; // Location and size
var offsetX, offsetY; // Mouseclick offset


function windowResized() {
  resizedCanvas(windowWidth, windowHeight);
}



function setup() {
  createCanvas(windowWidth, windowHeight);


  // Starting location
  x = 200;
  y = 260;
  // Dimensions
  w = 400;
  h = 75;

}

function draw() {
  background(255);



  // Is mouse over object
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  } else {
    rollover = false;
  }

  // Adjust location if being dragged
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }


  // bg - orange rect
  fill(247, 164, 88);
  rect(100, 100, 600, 400);
  noStroke();


  // blue rect
  fill(60, 156, 188);
  rect(400, 100, 300, 400);
  noStroke();


  // movable rect
  noStroke();
  fill('#CC9761');
  rect(x, y, w, h);


  // yellow rect
  fill('#F8EA90');
  rect(275, 100, 200, 400);
  noStroke();


  // navy rect
  fill('#013490');
  rect(400, 100, 125, 400);
  noStroke();


}


function mousePressed() {
  // Did I click on the rectangle?
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX = x - mouseX;
    offsetY = y - mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  dragging = false;
}
