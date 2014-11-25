var bg, iceC,waterC,grassC,fireC,tree,cloud,digdac,mario,fireB, grassB, iceB,mushroom,mushroom2,waterB,fire1,fire2,fire3,fire4;
var fireBTouched = false;
var fireBTouchedX = 0;
var fireBTouchedY = 0;

var iceBTouched = false;
var iceBTouchedX = 0;
var iceBTouchedY = 0;

var flagTouchedX = 0;
var flagTouchedY = 0;



function setup()
{
    createCanvas(800,500);
    bg = loadImage("bg.png");
    digdac = loadImage("digdac.png");
    digdac2 = loadImage("dicdac2.png");
    tree = loadImage("tree.png");
    tree2 = loadImage("tree2.png");
    cloud = loadImage("cloud.png");
    fire1 = loadImage("fire1.png");
    fire2 = loadImage("fire2.png");
    fire3 = loadImage("fire3.png");
    fire4 = loadImage("fire4.png");
    iceC = loadImage("iceC.png");
    waterC = loadImage("waterC.png");
    grassC = loadImage("grassC.png");
    fireC = loadImage("fireC.png");
    fireB = loadImage("fireB.png");
    grassB = loadImage("grassB.png");
    iceB = loadImage("iceB.png");
    mushroom = loadImage("mushroom.png");
    mushroom2 = loadImage("mushroom2.png");
    waterB = loadImage("waterB.png");
    flag = loadImage("flag.png");
    mario = loadImage("mario.png");


    noFill();
    noStroke();
}

function draw()
{
  background(bg);
  var t1 = (new Date()%6000)/6000;
  var t2 = (new Date()%8000)/8000;
  var tDig = (new Date()%1000)/1000;
  var timing = (new Date()%1000)/1000;
  var ttree = (new Date()%1000)/1000;
  var duration1 = 6000;
  var timing1 = (new Date()%duration1)/duration1;
  
//dicdac
  if(tDig <0.5){
    image(digdac,280,50,89,86);
  }else{
    image(digdac2,280,50,89,86);
  } 

//tree
    if(ttree <0.5){
    image(tree,600,200,105,80);
  }else{
    image(tree2,600,200,105,80);
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
  image(grassB, 0,0,800,500);

  //image(iceB,700,50,46,53);
  // image(mushroom,270,200,42,43);
  // image(mushroom2,0,0,800,500);
  image(mushroom,430+sin(t1*2*PI)*200,200,42,43);
  image(mushroom,430+cos(t2*2*PI)*200,250,50,50);
  
  image(waterB,0,0,800,500);


//iceB
    if (!iceBTouched){
        image(iceB,650 + Math.cos(timing1*2*PI)*30-10 , 80 + Math.sin(timing1*2*PI)*30-10, // y좌표
        46,                                  // width
        53);   
    } else { flag(flagTouchedX, flagTouchedY);
    }


    if (iceBTouched === false) {
        if (dist(mouseX,mouseY,650 , 80+sin(timing1*2*PI)*20)<30)   // 부딪혔을 때 
        {
            iceBTouched = true; 
            iceBTouchedX = mouseX;
            iceBTouchedY = mouseY;
        } 
    }


//fireB
    if (!fireBTouched){
        image(fireB,180 + Math.cos(timing1*2*PI)*30-10 , 320 + Math.sin(timing1*2*PI)*30-10, // y좌표
        49,                                  // width
        56);   
    } else {
    }


    if (fireBTouched === false) {
        if (dist(mouseX,mouseY,280 ,320+sin(timing1*2*PI)*20)<30)   // 부딪혔을 때 
        {
            fireBTouched = true; 
            fireBTouchedX = mouseX;
            fireBTouchedY = mouseY;
        } 
    }

  image(mario, mouseX, mouseY, 44,53);



}

function dist(x1,y1,x2,y2){
  return sqrt(pow(x1-x2,2)+pow(y1-y2,2));
}
