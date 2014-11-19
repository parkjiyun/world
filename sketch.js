var bg, tree, cloud, digdac,digdac2, fireB, grassB, iceB, mushroom, wa;

function setup()
{
    createCanvas(800,500);
    bg = loadImage("bg.png");
    tree = loadImage("tree.png");
    cloud = loadImage("cloud.png");
    digdac = loadImage("digdac.png");
    mario = loadImage("mario.png");
    fireB = loadImage("fireB.png");
    fireC = loadImage("fireC.png");
    grassB = loadImage("grassB.png");
    grassC = loadImage("grassC.png");
    iceB = loadImage("iceB.png");
    mushroom = loadImage("mushroom.png");
    mushroom2 = loadImage("mushroom2.png")
    waterC = loadImage("waterC.png")
    waterB = loadImage("waterB.png");



    noFill();
    noStroke();
}

function draw()
{
  background(bg);

  image(tree,600,200,105,80);
  image(cloud,0,0,800,500);
  image(digdac,310,50,89,86);
  image(mario, mouseX, mouseY, 44,53);
  image(fireB, 250,300,49,56);
  image(grassB, 0,0,800,500);
  image(iceB,700,50,46,53);
  image(mushroom,270,200,42,43);
  image(waterB,0,0,800,500);
}
