function setup() {
    createCanvas(800,400);
    fixrect=createSprite(400,200);
    fixrect.shapeColor="red";
    fixrect.debug=true
    movingrect=createSprite(100,200);
    movingrect.shapeColor="red";
    movingrect.debug=true
  
  }
  
  function draw() {
    background(255,255,0);  
    movingrect.x=mouseX
    movingrect.y=mouseY
  if((movingrect.x-fixrect.x<movingrect.width/2+fixrect.width/2)&&
  (fixrect.x-movingrect.x<movingrect.width/2+fixrect.width/2)&&
  (fixrect.y-movingrect.y<movingrect.height/2+fixrect.height/2)&&
  (movingrect.y-fixrect.y<movingrect.height/2+fixrect.height/2)
  
  
  ){     
    fixrect.shapeColor="green";
    movingrect.shapeColor="green";
  
  }
   else{
    movingrect.shapeColor="red";
    fixrect.shapeColor="red";
  
   } 
    
    drawSprites();
  }