var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(100,590,200,20);
    surface1.shapeColor="blue";
    surface2=createSprite(300,590,200,20);
    surface2.shapeColor="orange";
    surface3=createSprite(500,590,200,20);
    surface3.shapeColor="purple";
    surface4=createSprite(700,590,200,20);
    surface4.shapeColor="green";

    box=createSprite(random(20,750,),random(10,590),20,20);

    box.velocityX=random(-5,5);
    box.velocityY=random(-5,5);



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)&&box.bounceOff(surface1)){
        box.shapeColor="blue"
        music.play()
    }
    if(surface2.isTouching(box)&&box.bounceOff(surface2)){
        box.shapeColor="orange"
        music.stop()
    }
    if(surface3.isTouching(box)&&box.bounceOff(surface3)){
        box.shapeColor="purple"
        music.play()
    }
    if(surface4.isTouching(box)&&box.bounceOff(surface4)){
        box.shapeColor="green"
        music.stop()
    }
    box.bounceOff(edges)
    drawSprites();
}
