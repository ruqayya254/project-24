
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	

	Paper1=new Paper(200,450,40)
	Dustbin1=new Dustbin(1200,650)
	Ground1=new Ground(width/2,670,width,20)  
	var render=Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	});
	Engine.run(engine);
	
      

	}



function draw() {
  rectMode(CENTER);
  background(0);
  
  Paper1.display();
  Dustbin1.display();
  Ground1.display();
 
}



