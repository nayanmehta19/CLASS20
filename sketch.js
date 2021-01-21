function setup() {
  createCanvas(800,400);
  recti=createSprite(400,100);
  recti.shapeColor="red";
  recti.debug=true
  rect2=createSprite(400,300);
  rect2.shapeColor="red";
  rect2.debug=true
recti.velocityY=3;
rect2.velocityY=-3;

}

function draw() {
  background(255,255,0);  
 // rect2.x=mouseX
 // rect2.y=mouseY
if((rect2.x-recti.x<rect2.width/2+recti.width/2)&&
(recti.x-rect2.x<rect2.width/2+recti.width/2)


){     
  //recti.shapeColor="green";
 // rect2.shapeColor="green";
recti.velocityX=recti.velocityX*(-1)
rect2.velocityX=rect2.velocityX*(-1)

}
 if((recti.y-rect2.y<rect2.height/2+recti.height/2)&&
 (rect2.y-recti.y<rect2.height/2+recti.height/2)
 ){
 // rect2.shapeColor="red";
  //recti.shapeColor="red";
  recti.velocityY=recti.velocityY*(-1)
  rect2.velocityY=rect2.velocityY*(-1)
  
 } 
  
  drawSprites();
}