const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var Play=0
var Start=1
var gameState=Start
var dustbinObj,groundObject,paper;
var world,backgroundImg;

function preload() {

    backgroundImg=loadImage("bg.jpg");
	background2Img=loadImage("bg2.jpg");
	cleanImg=loadImage("SwachhCity.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper=new Paper(100, 65,50,50);
	logo=createSprite(1300, 150, 10,10);
	logo.addImage(cleanImg)
	logo.scale=0.7
    logo.visible=true

	Engine.run(engine);
  
}


function draw() {

	if(gameState==Start)
    {
		background(background2Img);
        drawSprites();
        textSize(67)
        fill("black");
        text("Press 'Enter' to start",450,80)
    }

	if(keyCode===ENTER)
    {
        gameState=Play
		logo.visible=false
   
    }

	if(gameState==Play)
    {

     background(backgroundImg);
	 textSize(57)
	 fill("white");
	 text("Press 'Up Arrow",600,300)
  rectMode(CENTER);
  groundObject.display();
  paper.display();
  dustbinObj.display();

}
}
function keyPressed()
{
if(keyCode===UP_ARROW)
{
Matter.Body.applyForce(paper.body,paper.body.position,{x:190,y:-195});
}
}


