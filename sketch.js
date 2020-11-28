
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy1, tree1, rock;
var M1;
var platform;
var mangoes=[];

function preload()
{
	
}

function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;

	boy1 = new Boy (250,700,170,230)
	tree1 = new Tree (1100,900,530,600)
	rock = new Stone (200, 500, 50)
	platform = new Ground (800,600,1600,60)
	launcher = new Launcher(rock.body,{x:200, y: 470});
	createMangoes(10)
	//M1 = new Mango (1000, 100, 300)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  boy1.display()
  tree1.display()
  platform.display()
  rock.display()
  launcher.display() 
  //M1.display()
  for(i=0;i<mangoes.length;i++){
	  mangoes[i].display()
	  detectCollision(mangoes[i],rock)
  }

  //detectCollision(M1,rock)
}

function mouseDragged(){
	Matter.Body.setPosition(rock.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	launcher.fly()
}	

function detectCollision(m,s){
	mp=m.body.position;
	sp=s.body.position;

	d=dist(mp.x, mp.y, sp.x, sp.y);
	if(d<=m.r+s.r){
		Body.setStatic(m.body, false)
	}
}

function createMangoes(n){
	for (i=0;i<n;i++){
		randX=random(900,1300);
		randY=random(150,250);
		mangoes[i]=new Mango (randX, randY, 30);
	}
}

function keyPressed(){
	if (keyCode === 32){
		Body.setPosition(rock.body,{x:200,y:500});
		launcher.attach(rock.body);
	}
}