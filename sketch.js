  
score = 0
var towerImg, tower;
var wall
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var resetImg,gameoverImg,ghost,gamover;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);

  wall = createSprite(300,610,1000,20)

  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
}


function draw() {
  background(255);
score += 1 
Bedges = createEdgeSprites(BOTTOM)
tower.velocityY = 2
  
  if (gameState === "play") {
    if(keyDown("left")||keyDown("a")){
    ghost.velocityX = -3
      }
    if(keyDown("right")||keyDown("d")){
      ghost.velocityX = 3
    }
    if(keyDown("up")||keyDown("w")||keyDown("space")){
      ghost.velocityY = -3
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  
    if(tower.y > 550){
   tower.y = 300
    }

      spawnDoors();

  //write a code to make climbersGroup collide with ghost change the ghost velocity
  if(ghost.isTouching(climbersGroup)){
    ghost.velocityY = 0
  }
  if(ghost.isTouching(invisibleBlockGroup)){
    ghost.velocityY = 0
  }
if(ghost.collide(wall)||ghost.isTouching(doorsGroup)){
  ghost.destroy()
  gameState = "end"
}
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
  if(gameState === "play"){
    stroke("white")
    fill("white")
    textSize(15)
    text("Score: " + score, 50,20)
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
   var rand = Math.round(random(1,10))

   if(rand === 1){
    var door = createSprite(Math.round(random(100,175)), -50);
    door.addImage(doorImg);
    door.depth = ghost.depth
    door.velocityY = 2;
    door.lifetime = 300
    doorsGroup.add(door)
   }
   if(rand === 2){
    var door = createSprite(Math.round(random(100,175)), -50);
    door.addImage(doorImg);
    door.depth = ghost.depth
    door.velocityY = 2;
    door.lifetime = 300
    doorsGroup.add(door)
   }
   if(rand === 3){
    var door = createSprite(Math.round(random(100,175)), -50);
    door.addImage(doorImg);
    door.depth = ghost.depth
    door.velocityY = 2;
    door.lifetime = 300
    doorsGroup.add(door)
   }
   if(rand === 4){
    var door = createSprite(Math.round(random(425,500)), -50);
    door.addImage(doorImg);
    door.depth = ghost.depth
    door.velocityY = 2;
    door.lifetime = 300
    doorsGroup.add(door)
   }
   if(rand === 5){
    var door = createSprite(Math.round(random(425,500)), -50);
    door.addImage(doorImg);
    door.depth = ghost.depth
    door.velocityY = 2;
    door.lifetime = 300
    doorsGroup.add(door)
   }
   if(rand === 6){
    var door = createSprite(Math.round(random(425,500)), -50);
    door.addImage(doorImg);
    door.depth = ghost.depth
    door.velocityY = 2;
    door.lifetime = 300
    doorsGroup.add(door)
   }
   if(rand === 7){
    var climber = createSprite(Math.round(random(100,500)),10);
    climber.addImage(climberImg);
    climber.depth = ghost.depth
    climber.velocityY = 2;
    climber.lifetime = 300
    climbersGroup.add(climber)
   }
   if(rand === 8){
    var climber = createSprite(Math.round(random(100,500)),10);
    climber.addImage(climberImg);
    climber.depth = ghost.depth
    climber.velocityY = 2;
    climber.lifetime = 300
    climbersGroup.add(climber)
   }
   if(rand === 9){
    var invisibleBlock = createSprite(Math.round(random(100,500)),15);
    invisibleBlock.width = 20;
    invisibleBlock.height = 2;
    invisibleBlock.depth = ghost.depth
    invisibleBlock.velocityY = 2;
    invisibleBlock.lifetime = 300
    invisibleBlockGroup.add(invisibleBlock)
   }
   if(rand === 10){
    var invisibleBlock = createSprite(Math.round(random(100,500)),15);
    invisibleBlock.width = 20;
    invisibleBlock.height = 2;
    invisibleBlock.depth = ghost.depth
    invisibleBlock.velocityY = 2;
    invisibleBlock.lifetime = 300
    invisibleBlockGroup.add(invisibleBlock)
   }
}
 }
