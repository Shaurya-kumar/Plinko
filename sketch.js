const Bodies = Matter.Bodies
const World = Matter.World
const Engine = Matter.Engine
const Constraint = Matter.Constraint

 var ball;
 var division,division2,division3,division4,division5,division6;
 var plinkos = [];
 var particles = [];
 var divisionHeight = 300;
 var ground
 var frame1,frame2,frame3,frame4;

function setup(){
  
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  division = new Division(5,600,10,400);
  division2 = new Division(75,600,10,400);
  division3 = new Division(155,600,10,400);
  division4 = new Division(235,600,10,400);
  division5 = new Division(315,600,10,400);
  division6 = new Division(395,600,10,400);
  division7 = new Division(475,600,10,400);
  ground = new Ground(240,795,800,10);
  frame1 = new Frame(0,400,10,800);
  frame2 = new Frame(480,400,10,800);
  frame3 = new Frame(240,0,800,10);


}

function draw() {
  background(0);  
  Engine.update(engine);

for(var j = 40; j <=width; j=j+50){

plinkos.push(new Plinko(j,75,10));

}

for(var j = 15; j<=width-10 ; j = j + 50){

plinkos.push(new Plinko(j,175,10));

}

if(frameCount%90 === 0){

particles.push(new Circle(random(width/2-10, width/2 + 10),10, 10, divisionHeight))

}
for (var j = 0; j < particles.length; j++){

particles[j].display();

}
for (var k = 0; k < plinkos.length; k++){

plinkos[k].display();

}


  //ball.display();
  division.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  ground.display();
  frame1.display();
  frame2.display();
  frame3.display();
  drawSprites();
}