var bg , bgImage;
var mario , marioImage;
var ground;
var brickImage , bricksGroup;
var coinsImage , coinsGroup;
var coinScore=0;
var coinSound;
var jumpSound;
var bgSound;
var mushObstacleImage, turtleObstacleImage, obstaclesGroup;
var gameState = "PLAY";
var restartImg;



//load assests
function preload()
{
    bgImage=loadImage("Mario_images/backgrnd1.jpg");
    marioImage=loadAnimation("Mario_images/mar1.png","Mario_images/mar2.png","Mario_images/mar3.png","Mario_images/mar4.png","Mario_images/mar5.png","Mario_images/mar6.png");
    brickImage=loadImage("Mario_images/brick.png");
    coinsImage=loadAnimation("Mario_images/con1.png","Mario_images/con2.png","Mario_images/con3.png","Mario_images/con4.png","Mario_images/con5.png","Mario_images/con6.png");
    coinSound=loadSound("Mario_sounds/coinSound.mp3");
    jumpSound=loadSound("Mario_sounds/jump.mp3");
    bgSound = loadSound("Mario_sounds/super-mario-bros-4293.mp3");
    mushObstacleImage=loadAnimation("Mario_images/mush1.png","Mario_images/mush2.png","Mario_images/mush3.png","Mario_images/mush4.png","Mario_images/mush5.png","Mario_images/mush6.png");
    turtleObstacleImage=loadAnimation("Mario_images/tur1.png","Mario_images/tur2.png","Mario_images/tur3.png","Mario_images/tur4.png","Mario_images/tur5.png");
    mario_collided=loadAnimation("Mario_images/dead.png");
    dieSound = loadSound("Mario_sounds/dieSound.mp3");
    restartImg=loadImage("Mario_images/restart.png");


}
//create basic skeletonn with their required credentials
function setup()
{
    //create canvas
    createCanvas(1000,800);
    bg = createSprite(600,300,150,50);
    mario=createSprite(200,520,50,50);
    bg.addImage(bgImage);
    mario.addAnimation("running", marioImage);
    bg.scale=0.5;
    mario.scale=0.2;
    bgSound.play();

    //create ground
    ground=createSprite(200,580,400,10);
    bricksGroup = new Group();
    coinsGroup = new Group();
    obstaclesGroup = new Group();

    mario.addAnimation("collided", mario_collided);

    restart = createSprite(500, 300);
    restart.addImage(restartImg);
    restart.visible = false;

}
//used to redraw the objects on the screen
function draw()
{
    //Make background move and repeat
    if (gameState == "PLAY")
    {
        bg.velocityX = -8;
        if(bg.x<100)
        bg.x = bg.width/4;

    

    // mario flies
    if(keyDown('space'))
    {
        jumpSound.play();
        mario.velocityY = -10;
    }


    //add gravity
    mario.velocityY=mario.velocityY+0.5;

    //mario stuck on ground
    mario.collide(ground);
    ground.visible=false;


    //call generate bricks
    generateBricks();


    for(var i=0;i<bricksGroup.length;i++)
    {
        var temp = bricksGroup.get(i);
        if(mario.isTouching(temp))
        {
            mario.collide(temp);
        }
    }
    if(mario.x<200)
    {
        mario.x=200;
    }
    if(mario.y<50)
    {
        mario.y=50;
    }

    generateCoins();
    for (var i = 0; i < coinsGroup.length; i++)
     {
        var temp = coinsGroup.get(i);
        if (temp.isTouching(mario)) 
        {
          coinScore++;
          //Coin Sound
          coinSound.play();
  
          temp.destroy();
          temp = null;
        }
      }
      generateObstacle();

      if (obstaclesGroup.isTouching(mario)) {
        dieSound.play();
        bgSound.stop();
        
        gameState = "END";
      }
    } 
    
    else if (gameState === "END") {
      bg.velocityX = 0;
      mario.velocityY = 0;
      mario.velocityX = 0;
  
      obstaclesGroup.setVelocityXEach(0);
      coinsGroup.setVelocityXEach(0);
      bricksGroup.setVelocityXEach(0);
  
      bricksGroup.setLifetimeEach(-1);
      coinsGroup.setLifetimeEach(-1);
      obstaclesGroup.setLifetimeEach(-1);
  
      mario.changeAnimation("collided", mario_collided);
      mario.y = 570;
      mario.scale = 0.4;
  
      restart.visible = true;
      if (mousePressedOver(restart)) {
        restartGame();
      }
    }



    //redraw objects
    drawSprites();

    //display score
    textSize(20);
    fill("brown");
    text("Coins Collected : " + coinScore , 500 , 50);
}
function generateBricks()
{
    if(frameCount % 70 == 0)
    {
        console.log(frameCount);
        var brick = createSprite(1200,100,40,10);
        brick.y = random(50,450);
        brick.addImage(brickImage);
        brick.velocityX = -5;
        brick.lifetime=250;
        bricksGroup.add(brick);

    }

}

function generateCoins()
{
    if(frameCount % 50 == 0)
    {
        console.log(frameCount);
        var coins = createSprite(1200,100,40,10);
        coins.y = random(150,400);
        coins.addAnimation("rotate", coinsImage);
        coins.scale = -0.1;
        coins.velocityX = -5;
        coins.lifetime=250;
        coinsGroup.add(coins);

    }

}

function generateObstacle()
{
    if (frameCount % 100 === 0) {
        var obstacle = createSprite(1200, 555, 10, 40);
        obstacle.velocityX = -5;
        obstacle.scale = 0.1;
        var rand = Math.round(random(1, 2));
        switch (rand) {
          case 1:
            obstacle.addAnimation("mush", mushObstacleImage);
            break;
          case 2:
            obstacle.addAnimation("turtle", turtleObstacleImage);
            break;
          default:
            break;
        }
        obstacle.lifetime = 300;
        obstaclesGroup.add(obstacle);
      }

}

function restartGame() {
    gameState = "PLAY";
  
    obstaclesGroup.destroyEach();
    bricksGroup.destroyEach();
    coinsGroup.destroyEach();
  
    mario.changeAnimation("running", marioImage);
    mario.scale = 0.2;
  
    coinScore = 0;
  
    restart.visible = false;
  }