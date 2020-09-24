
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.5

	groundSprite=createSprite(width/2, height-35, width,20);
	groundSprite.shapeColor=("yellow")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true,restitution:0.4});
	World.add(world, packageBody);

	
	log1 = new Log(400,650);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 ,{isStatic:true});
 	World.add(world, ground);


	Engine.run(engine);
	
  
}


function draw() {
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  log1.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === LEFT_ARROW) {
helicopterSprite.x=helicopterSprite.x-20;
translation={x:-20, y:0};
matter.Body.translate(packageBody,translation);
 }
else if (keyCode === Right_ARROW) {
	helicopterSprite.x=helicopterSprite.x+20;
	translation={x:20, y:0};
	matter.Body.translate(packageBody,translation);
} else if(keyCode === DOWN_ARROW){
	Matter.Body.setStatic(packageBody,false);
	}
  
}





