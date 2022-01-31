


//Create namespace for Engine
var Engine = Matter.Engine;
//Create namespace for World
var World = Matter.World;
//Create namespace for Bodies
var Bodies = Matter.Bodies;
//Create namespace for Body
var Body = Matter.Body;

var myengine,myworld;

function setup() {
  createCanvas(400,400);
//create the engine
myengine = Engine.create();
  //Add world to the engine
  myworld = myengine.world;

  
   var ball_options = {
    restitution: 1.4,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
ground = Bodies.rectangle(200,360,400,20,ground_options);
//add to world
World.add(myworld,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(myworld,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(myengine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
  rect(ground.position.x,ground.position.y,400,20)


  
  
}

