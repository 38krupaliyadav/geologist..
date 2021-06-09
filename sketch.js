const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(200,100);
    rubber = new Rubber(200, 200, 0.3);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    
    plane.display();
    hammer.display();
    rubber.display();
}