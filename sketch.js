var beeImage;
var beeFont;
var xloc, yloc;

function preload(){
  beeImage = loadImage();
  beefont = loadFont();
}

function setup(){
  createCanvas(600,600);
  xloc = 300;
  yloc = 300;
  no cursor();
}

function draw(){
  background(255);
  image(beeImage, mouseX, mouseY, 50, 50);
  xloc += random(-3,3);
  yloc += random(-3,3);
  text ('I Love Bees', 200, 550);
}
