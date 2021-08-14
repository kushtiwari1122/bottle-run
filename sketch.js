var bottle1,bottlerun,background1

function preload() {
bottlerun=loadAnimation("bottle1.png","bottle2.png")
background1=loadImage("background.png")  
}
function setup() {
  createCanvas(800,400);
bottle1=createSprite(50,225,20,20)
bottle1.addAnimation("running",bottlerun)
 bottle1.scale=0.025
}

function draw() {
  background(background1);  
  drawSprites();
}