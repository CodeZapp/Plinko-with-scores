var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var score = 0;
var particle;
var turn = 0;
var gameState = "play";

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight / 2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-250, width/2+250), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
    if (particles[j].body.position.x <= 140) {
      score = score + 500;
    }
    if (particles[j].body.position.x > 140 && particles[j].body.position.x <= 220 && particles[j].body.position.y > 500) {
      score = score + 200;
    }
    if (particles[j].body.position.x > 140 && particles[j].body.position.x <= 220 && particles[j].body.position.y > 500) {
      score = score + 200;
    }
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   text("500", 20, 550)
   text("500", 100, 550)
   text("200", 180, 550)
   text("100", 260, 550)
   text("100", 340, 550)
   text("100", 420, 550)
   text("100", 500, 550)
   text("200", 580, 550)
   text("500", 660, 550)
   text("500", 740, 550)
   
   if (particle != null ) {
     particle.display();
     if (particle.body.position.y > 750) {
       if (particle.body.position.x <= 140) {
         score = score + 500;
         particle = null;
       }
       else if (particle.body.position.x > 140 && particle.body.position.x <= 220) {
         score = score + 200;
         particle = null;
       }
       else if (particle.body.position.x > 220 && particle.body.position.x <= 540) {
         score = score + 100;
         particle = null;
       }
       else if (particle.body.position.x > 540 && particle.body.position.x <= 620) {
         score = score + 200;
         particle = null;
       }
       else {
         score = score + 500;
         particle = null;
       }
     }
   }
}

function mousePressed() {
  if(gameState != "end") {
    turn++
    particle = new Particle(mouseX, 10, 10);
  }
}