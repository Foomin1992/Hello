
function setup() {
 createCanvas(displayWidth, displayHeight, WEBGL);
}

function draw() {
background(250);
  normalMaterial();
  rotateX(mouseX * 0.01);
  rotateY(mouseY * 0.01);
  torus(mouseX, mouseY, 100, 100);
}