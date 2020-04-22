const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,box3,box4,box5;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(30,300,50,250);
    ground = new Ground(200,390,1000,20);
    box2 = new Box(370,350,50,250);
    box3 = new Box(200,310,290,100);
    box4 = new Box(200,250,150,80);
    box5 = new Box(14,80,20,20);
    box6 = new Box(40,80,20,20);
    box7 = new Box(360,50,20,20);
    box8 = new Box(385,50,20,20);
    box9 = new Box(200,50,20,20);
    box10 = new Box(140,50,20,20);
    box11 = new Box(260,50,20,20);
    
    

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   ground.display();
   box2.display();
   box3.display();
   box4.display();
   Engine.update(engine);
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
}