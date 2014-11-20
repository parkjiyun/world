var bg, iceC,waterC,grassC,fireC,tree,cloud,digdac,mario,fireB, grassB, iceB,mushroom,mushroom2,waterB,fire1,fire2,fire3,fire4;
var fireBTouched = false;


function setup()
{
    createCanvas(800,500);
    bg = loadImage("bg.png");
    digdac = loadImage("digdac.png");
    digdac2 = loadImage("dicdac2.png")
    cloud = loadImage("cloud.png");
    fire1 = loadImage("fire1.png");
    fire2 = loadImage("fire2.png");
    fire3 = loadImage("fire3.png");
    fire4 = loadImage("fire4.png");
    iceC = loadImage("iceC.png");
    waterC = loadImage("waterC.png");
    grassC = loadImage("grassC.png");
    fireC = loadImage("fireC.png");
    tree = loadImage("tree.png");
    mario = loadImage("mario.png");
    fireB = loadImage("fireB.png");
    grassB = loadImage("grassB.png");
    iceB = loadImage("iceB.png");
    mushroom = loadImage("mushroom.png");
    mushroom2 = loadImage("mushroom2.png");
    waterB = loadImage("waterB.png");



    noFill();
    noStroke();
}

function draw()
{
  background(bg);
  var t1 = (new Date()%6000)/6000;
  var t2 = (new Date()%8000)/8000;
 var tDig = (new Date()%1000)/1000;

  if(tDig <0.5){
    image(digdac,280,50,89,86);
  }else{
    image(digdac2,280,50,89,86);
  } 

      if (!fireBTouched){
        fireB(timing * 1000,                         // x좌표
        240 + Math.sin(timing*2*PI)*80, // y좌표
        100,                                  // width
        100);   
    } else {
        
    }

  image(cloud,0,0,800,500);
  image(fire1,260,240,55,86);
  image(fire2,250,240,26,37);
  image(fire3,220,240,37,61);
  image(fire4,200,240,23,40);
  image(waterC,0,0,800,500);
  image(iceC,0,0,800,500);
  image(fireC, 0,0,800,500);
  image(grassC, 0,0,800,500);
  image(tree,600,200,105,80);
  image(mario, mouseX, mouseY, 44,53);
  image(fireB, 250,300,49,56);
  image(grassB, 0,0,800,500);
  image(iceB,700,50,46,53);
  // image(mushroom,270,200,42,43);
  // image(mushroom2,0,0,800,500);
  image(mushroom,430+sin(t1*2*PI)*200,200,42,43);
  image(mushroom,430+cos(t2*2*PI)*200,250,50,50);
  
  image(waterB,0,0,800,500);

}
