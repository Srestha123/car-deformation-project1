var car,wall,speed,weight,deformation;
  function setup() {
  createCanvas(1600,400);
  car=createSprite(150,200,100,50);
  wall=createSprite(1500,200,60,200);
  speed=random(20,200);
  weight=random(50,1000);
  car.velocityX=speed;
 
}

function draw() {
  background(1,1,1);
  car.shapeColor="white";
  wall.shapeColor="blue"; 
  if(wall.x-car.x<wall.width+car.width/2){
    car.velocityX=0;
    deformation=0.5*weight*speed*speed/22500;
    if(deformation<100){
      car.shapeColor="green";
    }
    if(deformation>=100&&deformation<180){
      car.shapeColor="yellow";
    }
    if(deformation>=180){
      car.shapeColor="red";
    }
  } 
  car.depth=wall.depth;
  car.depth=car.depth+8;
  textSize(22);
  text("DEFORMATION:",200,50);
  textSize(15);
  
  text("Less than 100 - GREEN",200,100);
  
  text("More than 100 but less than 180 - YELLOW",200,130);
  text("More than 180 - RED",200,160);
  
  
  drawSprites();
}