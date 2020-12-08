var fixedRect;
var movingRect;

function setup() {
  createCanvas(800,500);
 fixedRect = createSprite(200, 100, 50, 50);  
 movingRect = createSprite(400,200,80,40);
}

function draw() {
  background("yellow");  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  movingRect.shapeColor="green";

  fixedRect.shapeColor="green";
  
  var centreDistX = movingRect.width/2+fixedRect.width/2;
  var centreDistY = movingRect.height/2+fixedRect.height/2;
  
  if (movingRect.x-fixedRect.x < centreDistX  && 
     fixedRect.x-movingRect.x < centreDistX && 
     fixedRect.y-movingRect.y < centreDistY && 
     movingRect.y-fixedRect.y < centreDistY){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  
  drawSprites();
}