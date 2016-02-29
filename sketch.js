var isDrawing = false;
var speed = 7; 
var x, y;
var w = 50;
var h = 50;
var col1;
var col2;
var mapped1;

function setup() 
{
  createCanvas(500, 480);
  colorMode(HSB, 100);
  x = width/2;
  y = width/2;
  col1 = color(random(0, 100), random(0, 100), 100);
  col2 = color(random(0, 100), random(0, 100), 100);
}

function draw() 
{
  if (isDrawing == true) 
  {
    col1 = color(random(0, 100), random(0, 100), 100);
    col2 = color(random(0, 100), random(0, 100), 100);
  }
  mapped = map(mouseX, 0, width, 0, 50);
  fill(0);
  rect(0, 0, width, height);
  if (x >= width || x <= 0 || y >= height || y <= 0) 
  {
    speed *= -1;
  }
  x += speed;
  y += speed;
  strokeWeight(mapped);
  stroke(col1);
  fill(0);
  ellipse(x, width/2, w, h);
  ellipse(height/2, y, w, h);
  stroke(col2);
  ellipse(x, width/4, w, h);
  ellipse(x, (3 * width)/4, w, h);
  ellipse(height/4, y, w, h);
  ellipse((3 * height)/4, y, w, h);
}

function mousePressed()
{
  isDrawing = true;
}

function mouseReleased()
{
  isDrawing = false;
}