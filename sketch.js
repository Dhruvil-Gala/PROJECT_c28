
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree;
var ground;
var stone;
var gameState="onhand";
var boy,boyimg;
var mango1,mango2,mango2,mango3,mango4,mango5;
var chain;


function preload()
{
	boyimg=loadImage("boy.png");
}

function setup() {
  createCanvas(1200, 600);
  

	engine = Engine.create();
	world = engine.world;
    
  
    tree =new Tree(1000,300,40,60);
    ground =new Ground(600,590,1200,20);
    stone= new Stone(170,466);
    mango1 = new Mango(1000,200);
    mango2 = new Mango(840,250);
    mango3 = new Mango(1090,150);
    mango4 = new Mango(930,140); 
    mango5 = new Mango(1030,80);

    boy = createSprite(220,530);
    boy.addImage(boyimg,"boy.png"); 
    boy.scale=0.1
    
    chain= new Chain(stone.body,{x:170,y:466});
    

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(135,231,235);
  
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  
  drawSprites();
  stone.display();
  chain.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

}
function mouseDragged(){
  if(gameState==="onhand"){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
} 
function mouseReleased(){
  gameState="offhand";
  chain.fly();
  
}


  function detectCollision(Lstone,Lmango){
    manpos=Lmango.body.position
    stopos=Lstone.body.position
    
    var distance=dist(stopos.x,stopos.y,manpos.x,manpos.y)
     if (distance<=100){
      console.log("apple");
          Matter.Body.setStatic(Lmango.body,false);
        }
  }