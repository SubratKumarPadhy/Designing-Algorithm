var a,b;

function setup() {
  createCanvas(800,400);
   a=createSprite(400, 200, 100, 50);
   b=createSprite(600, 200, 80, 50);
}

function draw() {
  background("yellow");

  b.x = mouseX
  b.y= mouseY

  if(b.x-a.x < a.width/2 + b.width/2 && a.x-b.x < a.width/2 + b.width/2  
    && a.y-b.y < a.height/2 + b.height/2 && b.y-a.y < a.height/2 + b.height/2){
a.shapeColor="red";
b.shapeColor="red";
}
else{
  a.shapeColor="green";
  b.shapeColor="green";
}
//fill for rect and ellipse ,text
  drawSprites();
}