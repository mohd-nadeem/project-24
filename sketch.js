
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var line1, line2, line3;
var ground;

function preload() {
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ball = new Paper();

	ground = new Ground();

	line1 = new Box(630, 650, 120, 10);
	line2 = new Box(570, 620, 10, 60);
	line3 = new Box(690, 620, 10, 60);


}

function draw() {
	rectMode(CENTER);
	background(0);
	ball.display();

	ground.display();

	line1.display();
	line2.display();
	line3.display();
	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, { x: 34, y: -34 })
	}

}