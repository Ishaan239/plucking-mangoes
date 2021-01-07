const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var tree, boy, engine, ground, world, stone, sling, m1, m2, m3;
var force = 100;

function preload() {
	tree = loadImage("Plucking mangoes/tree.png");
	boy = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(650, 580, 1300, 20);
	//tree = new Tree(1000, 580, 450, 600);
	stone = new Stone(235, 420, 30);
	sling = new SlingShot(stone.body, {
		x: 235,
		y: 420
	});
	m1 = new Mango(900, 230, 40);
	m1 = new Mango(1100, 230, 40);
	m1 = new Mango(1300, 230, 40);


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(255);
	image(tree, 900, 0, 400, 600);
	image(boy, 200, 350, 200, 300);
	drawSprites();
	detectCollision(stone, m1);
	detectCollision(stone, m2);
	detectCollision(stone, m3);

	ground.display();
	stone.display();
	sling.display();
	m1.display();
	m2.display();
	m3.display();

}

function mouseDragged() {

	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });

}


function mouseReleased() {
	sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
		sling.attach(stone.body);
		Matter.Body.setPosition(stone.body, { x: 235, y: 420 });
	}
}

function detectollision(lstone, lmango) { 
	/*var collision = Matter.SAT.collides(lstone,lmango); if(collision.collided){ console.log("collided"); Matter.Body.setStatic(lmango,false); }*/ 
	mangoBodyPosition = lmango.body.position 
	stoneBodyPosition = lstone.body.position 
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) 
	//console.log(distance) // console.log(lmango.r+lstone.r) 
	if(distance<=lmango.r+lstone.r) { //console.log(distance); 
	Matter.Body.setStatic(lmango.body,false); } }

