var ship3,ship4;
var sea, shipImg, seaImg;

function preload(){

shipImg = loadAnimation("ship-3.png","ship-4.png");
seaImg = loadImage("sea.png");
sea = createSprite(200,180,200,20);
sea.addImage(seaImg);

//sea.addAnimation("seaImg", seaImg );
sea.scale = 0.5; 
sea.x = 50;
}

function setup(){
createCanvas(400,400);

//crear el barco 

ship3 = createSprite (400,200,100,20);
ship3.addAnimation("ship3", shipImg);
//Tamaño del barco
ship3.scale = 0.2; 
// Posicion del barco sobre las base
ship3.x = 160;

//edges = createEdgeSprites();


}

function draw() {
  background(220);

  //console.log(ship3.y)




drawSprites();
}