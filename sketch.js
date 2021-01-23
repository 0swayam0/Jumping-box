var box,surface1,surface2,surface3,surface4,topEdge;

var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
 createCanvas(700,500);
 createEdgeSprites();

 box=createSprite(400,200,30,30);
 box.shapeColor="white";
 box.velocityY=5;
 box.x=random(20,650); 

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

    box.bounceOff(topEdge);
    
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        surface1.shapeColor="red";
        box.shapeColor="red";
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        surface2.shapeColor="cyan";
        box.shapeColor="cyan";
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        surface3.shapeColor="orange";
        music.stop();  
        box.velocityY=0;
        box.shapeColor="orange"
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        surface4.shapeColor="violet";
        box.shapeColor="violet";
        music.play();
    }

    drawSprites();
}
