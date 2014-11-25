var bg, iceC,waterC,grassC,fireC,tree,cloud,digdac,mario,fireB, grassB, iceB,mushroom,mushroom2,waterB,fire1,fire2,fire3,fire4;
var fireBTouched = false;
var fireBTouchedX = 0;
var fireBTouchedY = 0;

var iceBTouched = false;
var iceBTouchedX = 0;
var iceBTouchedY = 0;

var grassBTouched = false;
var grassBTouchedX = 0;
var grassBTouchedY = 0;

var waterBTouched = false;
var waterBTouchedX = 0;
var waterBTouchedY = 0;





function setup()
{

    song = loadSound('music.mp3');
    createCanvas(1000,600);
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
    wave = loadImage("wave.png");
    flag = loadImage("flag.png");
    mario = loadImage("mario.png");
    devil = loadImage("devil.png")


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
  

  image(mushroom,430+sin(t1*2*PI)*50,230,30,31);
  image(mushroom,280+cos(t2*2*PI)*50,250,30,31);

  image(wave,280+cos(t2*2*PI)*50,250,30,31);

  image(devil,500+sin(t1*2*PI)*50,120,34,40);
  image(devil,500+sin(t1*2*PI)*50,120,34,40);

  //dicdac
  if(tDig <0.5){
    image(digdac,280,80,89,86);
  }else{
    image(digdac2,280,80,89,86);
  } 

  //dicdac2
  if(tDig <0.5){
    image(digdac,150,150,89,86);
  }else{
    image(digdac2,150,150,89,86);
  } 

//tree
    if(ttree <0.5){
    image(tree,600,200,105,80);
  }else{
    image(tree2,600,200,105,80);
  } 

//tree2
    if(ttree <0.5){
    image(tree,770,400,85,60);
  }else{
    image(tree2,770,400,85,60);
  } 


  image(fire1,260,240,55,86);
  image(fire2,250,240,26,37);
  image(fire3,220,240,37,61);
  image(fire4,200,240,23,40);
  image(waterC,0,0,800,500);
  image(iceC,0,0,780,490);
  image(fireC, 0,0,780,500);
  image(grassC, 0,0,800,500);
  //image(grassB, 0,0,800,500);
  //image(iceB,700,50,46,53);
  // image(mushroom,270,200,42,43);
  // image(mushroom2,0,0,800,500);
  //image(waterB,0,0,800,500);

//waterB
    if (!waterBTouched){
        image(waterB,350 + Math.cos(timing1*2*PI)*30-10 , 150 + Math.sin(timing1*2*PI)*30-10, // y좌표
        47,                                  // width
        62);   
    } else { 
    }


    if (waterBTouched === false) {
        if (dist(mouseX,mouseY,350 , 150+sin(timing1*2*PI)*20)<30)   // 부딪혔을 때 
        {
            waterBTouched = true; 
            waterBTouchedX = mouseX;
            waterBTouchedY = mouseY;
        } 
    }    

//grassB
    if (!grassBTouched){
        image(grassB,600 + Math.cos(timing1*2*PI)*30-10 , 270 + Math.sin(timing1*2*PI)*30-10, // y좌표
        48,                                  // width
        71);   
    } else { 
    }


    if (grassBTouched === false) {
        if (dist(mouseX,mouseY,600 , 270+sin(timing1*2*PI)*20)<30)   // 부딪혔을 때 
        {
            grassBTouched = true; 
            grassBTouchedX = mouseX;
            grassBTouchedY = mouseY;
        } 
    }  


//iceB
    if (!iceBTouched){
        image(iceB,650 + Math.cos(timing1*2*PI)*30-10 , 80 + Math.sin(timing1*2*PI)*30-10, // y좌표
        46,                                  // width
        53);   
    } else { 
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
        image(fireB,280 + Math.cos(timing1*2*PI)*30-10 , 320 + Math.sin(timing1*2*PI)*30-10, // y좌표
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


  image(cloud,10+sin(t1*1)*1000,10,1100,600);
  image(mario, mouseX, mouseY, 44,53);



}

function dist(x1,y1,x2,y2){
  return sqrt(pow(x1-x2,2)+pow(y1-y2,2));
}
