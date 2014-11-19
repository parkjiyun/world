var bg, tree, cloud, digdac,digdac2, fireB, grassB, iceB, mushroom, wa;

function setup()
{
    createCanvas(800,500);
    bg = loadImage("bg.png");
    iceC = loadImage("iceC.png");
    waterC = loadImage("waterC.png");
    grassC = loadImage("grassC.png");
    fireC = loadImage("fireC.png");
    tree = loadImage("tree.png");
    cloud = loadImage("cloud.png");
    digdac = loadImage("digdac.png");
    mario = loadImage("mario.png");
    fireB = loadImage("fireB.png");
    grassB = loadImage("grassB.png");
    iceB = loadImage("iceB.png");
    mushroom = loadImage("mushroom.png");
    mushroom2 = loadImage("mushroom2.png")
    waterB = loadImage("waterB.png");




    noFill();
    noStroke();
}

function draw()
{
  background(bg);

  image(waterC,0,0,800,500);
  image(iceC,0,0,800,500);
  image(fireC, 0,0,800,500);
  image(grassC, 0,0,800,500);
  image(tree,600,200,105,80);
  image(cloud,0,0,800,500);
  image(digdac,310,50,89,86);
  image(mario, mouseX, mouseY, 44,53);
  image(fireB, 250,300,49,56);
  image(grassB, 0,0,800,500);
  image(iceB,700,50,46,53);
  image(mushroom,270,200,42,43);
  image(mushroom2,0,0,800,500);
  image(waterB,0,0,800,500);
}
