const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var box1;
var box2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;



  
 
  box1 = new Box(200,100,50,50);
  box2 = new Box(240,200,50,80);
  ground= new Ground(200,400,400,10);

  console.log(ground);
}

function draw() {
  background(0); 
  Engine.update(engine);
 

 box1.display();
 box2.display();
 ground.display();

  drawSprites();
}