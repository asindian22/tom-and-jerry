var catImg,cat,catImg2,catImg3,catImg4
var gardenImg,garden
var mouse,mouseImg,mouse2,mouse3,mouse4
var mouseImg2,mouseImg3



function preload() {

   // load the images here

    gardenImg=loadImage("images/garden.png")
    catImg=loadAnimation("images/cat1.png")
    catImg2=loadAnimation("images/cat2.png","images/cat3.png")
    catImg3=loadAnimation("images/cat4.png")
    mouseImg=loadAnimation("images/mouse1.png")
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3=loadAnimation("images/mouse4.png")
    

}



function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     
   // garden = createSprite(870,600)
    //garden.addImage("backgroundpark",gardenImg)


    cat = createSprite(870,600)
    cat.addAnimation("catsleeping",catImg)
    cat.scale=0.2

    mouse = createSprite(200,600)
    mouse.addAnimation("standingmouse",mouseImg2)
    mouse.scale = 0.15
    
                                        
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide

    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("catRunning",catImg)
        cat.changeAnimation("catRunning")
        cat.velocityX=0
        mouse.addAnimation("mousestanding",mouseImg3)
        mouse.changeAnimation("mousestanding")
    }

    drawSprites();
}



function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === RIGHT_ARROW){
      cat.velocityX=-5
      cat.addAnimation("catrunning",catImg2)
      cat.changeAnimation("catrunning")
      cat.framedelay=25
     
  }

  if (keyCode === LEFT_ARROW){
      //mouse.velocityX = -5
      mouse.addAnimation("mouseteasing",mouseImg2)
      mouse.changeAnimation("mouseteasing")
      mouse.framedelay=25
  }

  



}





