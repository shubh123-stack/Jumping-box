var rectangle;
var rectangle2;
var rectangle3 ;
var rectangle4;
function preload(){

music= loadSound ("music.mp3")

}
    

function setup(){
canvas = createCanvas(800,400);

    //create 4 different surfaces
rectangle = createSprite(100,380,180,20)
rectangle.shapeColor=("red");

rectangle2 = createSprite(300,380,180,20)
rectangle2.shapeColor=("orange");

rectangle3 = createSprite(500,380,180,20)
rectangle3.shapeColor=("darkblue");

rectangle4 = createSprite(700,380,180,20)
rectangle4.shapeColor=("green");
    //create box sprite and give velocity

box = createSprite(random(10,750),100, 20,20);
box.shapeColor=("white");
box.velocityX=4;
box.velocityY=9;

}

function draw() {
background("black") 
    
   edges  =createEdgeSprites();
box.bounceOff(edges);



if(rectangle.isTouching(box)&& box.bounceOff(rectangle)){

    box.shapeColor=("red")

    music.play()
}

if(rectangle2.isTouching(box)&& box.bounceOff(rectangle2)){

    box.shapeColor=("orange")
}

if(rectangle3.isTouching(box)){

    box.shapeColor=("darkblue")
box.velocityX=0;
box.velocityY=0;
music.stop();
}

if(rectangle4.isTouching(box)&& box.bounceOff(rectangle4)){

    box.shapeColor=("green")
}
drawSprites();
    //add condition to check if box touching surface and make it box
}