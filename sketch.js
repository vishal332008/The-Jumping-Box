var canvas;
var m1 , m2 , m3 , m4;
var box;
var platform1 , platform2 , platform3 , platform4 , p1 , p2 , p3 , p4;
var edges;

function preload(){
    m1 = loadSound("Big_Thwack_120.mp3");
    m2 = loadSound("Boom_Chuk_130.mp3");
    m3 = loadSound("Cymbal_Groove.mp3");
    m4 = loadSound("Tamba_112.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    platform1 = createSprite(100, 580, 150, 20);
    platform1.shapeColor = "red";
    platform2 = createSprite(300, 580, 150, 20);
    platform2.shapeColor = "green";
    platform3 = createSprite(500, 580, 150, 20);
    platform3.shapeColor = "yellow";
    platform4 = createSprite(700, 580, 150, 20);
    platform4.shapeColor = "blue";

    p1 = createSprite(100, 580, 150, 15);
    p1.shapeColor = "red";
    p2 = createSprite(300, 580, 150, 15);
    p2.shapeColor = "green";
    p3 = createSprite(500, 580, 150, 15);
    p3.shapeColor = "yellow";
    p4 = createSprite(700, 580, 150, 15);
    p4.shapeColor = "blue";

    //create box sprite and give velocity
    box = createSprite(random(round(50,750)),100,50,50);
    box.velocityX = 3;
    box.velocityY = 3;
    box.depth = 10;

}

function draw() {
    background("black");
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box

    box.bounceOff(p1);
    box.bounceOff(p2);
    box.bounceOff(p3);
    box.bounceOff(p4);

    if(box.isTouching(platform1)){
        box.shapeColor = "red";
        m1.play();
    }

    if(box.isTouching(platform2)){
        box.shapeColor = "green";
        m2.play();
    }

    if(box.isTouching(platform3)){
        box.shapeColor = "yellow";
        m3.play();
    }

    if(box.isTouching(platform4)){
        box.shapeColor = "blue";
        m4.play();
    }

    drawSprites();
}
