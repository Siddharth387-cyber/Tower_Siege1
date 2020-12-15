const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,platform,ground;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(400,100,50,);
    box1 = new Box(420,100,10,10);
    box2 = new Box(430,100,10,10);
    box3 = new Box(440,100,10,10);
    box4 = new Box(450,100,10,10);
    box5 = new Box(460,100,10,10);
    box6 = new Box(470,100,10,10);
    box7 = new Box(480,100,10,10);
    polygon = new polygon(200,100);
    slingshot = new SlingShot(polygon.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    polygon.display();
    platform.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState!=="launched")
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
    gameState="launched"
}
