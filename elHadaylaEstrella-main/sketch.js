var starImg,bgImg, fairy, fairyImg;
var star, starBody;
var firyBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("images/fairy.png");
}

function setup() {
	createCanvas(800, 750);

	

	fairy = createSprite(60,650, 100,100);
	fairy.addImage(fairyImg);
	fairy.scale = 0.2


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	

}


function draw() {
  background(bgImg);


  console.log(star.y);

  star.collide(fairy);

  keyPressed();

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if( keyCode === "RIGTH_ARROW"){
		
		fairy.x = fairy.x +1.5;
		playSound("JoyMusic.mp3");
	}
	
	
}
