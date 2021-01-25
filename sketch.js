var box,surface1,surface2,surface3,surface4,topEdge;

var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
 createCanvas(700,500);

 Box=createSprite(400,200,30,30);
 Box.shapeColor="white";
 Box.velocityY=5;
 Box.x=random(20,650); 

 surface1=createSprite(80,490,150,15);
 surface1.shapeColor="orange";

 surface2=createSprite(260,490,150,15);
 surface2.shapeColor="violet"

 surface3=createSprite(440,490,150,15);
 surface3.shapeColor="red";

 surface4=createSprite(620,490,150,15);
 surface4.shapeColor="cyan";

 topEdge=createSprite(width/2,0,700,15);
 topEdge.visible=false;
}

function draw() {
    background(0);

    Box.bounceOff(topEdge);
    
    if(surface1.isTouching(Box) && Box.bounceOff(surface1)){
        Box.shapeColor="orange";
    }

    if(surface2.isTouching(Box) && Box.bounceOff(surface2)){
        Box.shapeColor="violet"
    }

    if(surface3.isTouching(Box) && Box.bounceOff(surface3)){
        music.stop();  
        Box.velocityY=0;
        Box.shapeColor="red";
    }

    if(surface4.isTouching(Box) && Box.bounceOff(surface4)){
        Box.shapeColor="cyan";
        music.play();
    }

    drawSprites();
}
