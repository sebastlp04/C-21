const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var wall1,wall2,wall3,wall4;
var ball;
var rightarrow;
var uparrow;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

wall1 = new Ground(200,390,400,20);
wall2 = new Ground(200,10,400,20);
wall3 = new Ground(10,200,20,400);
wall4 = new Ground(390,200,20,400);

var option = {
  restitution : 0.9
}; 
ball = Bodies.circle(200,200,17,option);
World.add(world,ball);

rightarrow = createImg('ra.png');
rightarrow.position(10,10);
rightarrow.size(15,15);
rightarrow.mouseClicked(hforce);

uparrow = createImg('uparrow.png');
uparrow.position(40,10);
uparrow.size(15,15);
uparrow.mouseClicked(vforce);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  wall1.show();
  wall2.show();
  wall3.show();
  wall4.show();

  
  ellipse(ball.position.x,ball.position.y,17);
}

function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.005,y:0})
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.005})
}