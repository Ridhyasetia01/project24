const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var plane,rubber
var iron;
var stone,stone1,stone2,stone3,stone4;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(600,200,-30);
    iron = new Iron(600,200);
    stone= new Stone(700,200,10);
    stone1= new Stone(800,200,10);
    stone2= new Stone(900,200,10);
    stone3= new Stone(1000,200,10);
    stone4= new Stone(1020,200,10);



}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
    stone.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();

}