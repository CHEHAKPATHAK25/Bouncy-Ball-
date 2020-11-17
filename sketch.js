const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;
var ground;
var ball;
function setup() {
  createCanvas(800,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  var ground_options = {
    isStatic : true
  } 
  ground = Bodies.rectangle(400,350,800,50,ground_options);
  World.add(myWorld,ground);
  //console.log(ground.position.x);
  //console.log(ground.position.y);
 
  var ball_options = {
    restitution : 5.0
  }
ball=Bodies.circle(100,200,20,ball_options);
World.add(myWorld,ball);


}

function draw() {
  background(0);  
  Engine.update(myEngine);
  rectMode(CENTER);
  fill("pink");
  rect(ground.position.x,ground.position.y,800,50);
  fill("yellow");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}
