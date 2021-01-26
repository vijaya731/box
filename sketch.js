var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(500,300);

    //create 4 different surfaces
floor=createSprite(250,250,60,20)
floor.shapeColor="pink"
ffloor=createSprite(450,250,60,20)
ffloor.shapeColor="blue"
surface=createSprite(350,250,60,20)
surface.shapeColor="purple"
hsurface=createSprite(150,250,60,20)
hsurface.shapeColor="green"

    //create box sprite and give velocity
box=createSprite(random(20,350))
box.velocityX=3
box.velocityY=4
}

function draw() {
    background(rgb(169,169,169));
//createEdgeSprites();
//createEdgeSprites();
edges=createEdgeSprites();
box.bounceOff(edges);
//box.bounceOff(edges)

    //add condition to check if box touching surface and make it box
 
    if(floor.isTouching(box)&&box.bounceOff(floor)){
        box.shapeColor="pink"
    }
    if(ffloor.isTouching(box)&&box.bounceOff(ffloor)){
        box.shapeColor="blue"
    }
    if(surface.isTouching(box)&&box.bounceOff(surface)){
        box.shapeColor="purple"
    }
    if(hsurface.isTouching(box)&&box.bounceOff(hsurface)){
        box.shapeColor="green"
  }
drawSprites();
}
