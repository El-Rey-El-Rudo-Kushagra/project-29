var polygonimg, ball, ground,stand1,stand2,slingShot,block1,block2,block3

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
polygonimg=loadImage("polygon.png")    
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(450,380,900,20)
stand1=new Stand(390,300,250,10)
stand2=new Stand(700,200,200,10)
ball=Bodies.circle(50,200,20,{isStatic:false})
World.add(world,ball)
slingShot=new SlingShot(this.ball,{x:100,y:200})

}

function draw(){
    background(0)
ground.display()
stand1.display()
stand2.display()
image (polygonimg,ball.position.x,ball.position.y,40,40)
slingShot.display()
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
    console.log("mouseReleased")
} 