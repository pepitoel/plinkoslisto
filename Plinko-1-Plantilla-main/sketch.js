var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var par=100;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //crea los objetos para dividir
  for (var k = 20; k <=700; k = k + 130) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  
  //crea la primera fila de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,85));
  }

  //crea la segunda fila de objetos plinko
  for (var j = 75; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,170));
  }

  //crea la tercera fila de objetos plinko
for (var j = 75; j <=width;j=j+50)
{
  plinkos.push(new Plinko(j,250));
}
  
  //crea la cuarta fila de objetos plinko
  for (var j = 75; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,335));
  }

  //crea los objetos partícula
 if(frameCount%60===0){
for(var k=0; k <=par; k++){
  particles.push(new Particle(random(width/2-10,width/2+10),random(1,10)));
}


 } 
 
}

function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //muestra los plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //muestra las divisiones
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //muestra las partículas 
for (var j=0; j< particles.length; j++) {
  particles[j].display();
}
}
