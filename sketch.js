// creating monkey 
var monkey , monkey_running
// creating, banana and obstacles
var banana ,bananaImage, obstacle, obstacleImage
// creating food and obstacle group
var FoodGroup, obstacleGroup
// score
var score
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  // create canvas
  createCanvas(400,400);
  // creating monkey sprite
  monkey = createSprite(80,345,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1
  // creating ground
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4;
  ground.x = width / 2;
  console.log(ground.x)
  // creating groups of food and obstacles
FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  

  
}


function draw() {

  background("white");
  //making monkey collide with ground
  monkey.collide(ground);
  if (ground.x > 0) {
    ground.x = width / 2
  }
   if (keyDown("space")) {
    monkey.velocityY = -12;
  }
  // giving gravity
  monkey.velocityY += 1.8;
 food();
  obstacle();
  
 
  if(monkey.isTouching(obstacleGroup)){
    FoodGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    ground.velocityX=0;
    monkey.velocityY=0;
    survivalTime=0
  }
   if (monkey.isTouching(FoodGroup)){
    banana.destroy()
     
  }
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime = Math.ceil(frameCount / frameRate())
  text("SurvivalTime:" + survivalTime, 100, 50)
  stroke("black");
  textSize(20);
  fill("white")
  text("score:" + score, 500, 50)
  
  
  drawSprites()
}

function food() {
  if (frameCount % 100 == 0) {
    //creating banana sprite and adding image to it
    banana = createSprite(400, Math.round(random(120, 200)));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 100;
    FoodGroup.add(banana);
    banana.depth = monkey.depth;
    monkey.depth += 1;
  }
}
//creating my own function of obstracles
function obstacle() {
  if (frameCount % 300 === 0) {
    //creating obstracle sprite and adding image to it
    rock = createSprite(400, 330);
    rock.addImage(obstaceImage);
    rock.scale = 0.1;
    rock.velocityX = -4;
    rock.lifetime = 100;
    obstacleGroup.add(rock);
  }
 
    
  
}






