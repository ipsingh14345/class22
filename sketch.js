const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
 myEngine=Engine.create();
 myWorld=myEngine.world;

 var groundOptions={
   isStatic:true
 };
 ground=Bodies.rectangle(200,380,400,10,groundOptions)
World.add(myWorld,ground);

var ballOptions={
  restitution:1
}
ball=Bodies.circle(200,200,25,ballOptions);
World.add(myWorld,ball)
//Matter.Body.setStatic(ball,true)

}

function draw() {
  background("black");  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
}