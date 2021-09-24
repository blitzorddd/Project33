const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  createSprite(400, 200, 50, 50);
  snow = new Snow()
}

function draw() {
  background(255,255,255);  
  snow.display()
  drawSprites();
}