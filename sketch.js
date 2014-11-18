var bg, tree, cloud, digdac,digdac2, fireB, fireBD;

function setup()
{
    createCanvas(800,500);
    bg = loadImage("bg.png");
    tree = loadImage("tree.png");
    cloud = loadImage("cloud.png");
    digdac = loadImage("digdac.png");
    mario = loadImage("mario.png");
    digdac2 = loadImage("dicdac2.png"); 
    fireB = loadImage("fireB.png");
    grassB = loadImage("grassB.png");
    iceB = loadImage("iceB.png");
    mushroom = loadImage("mushroom.png");
    waterB = loadImage("waterB.png");



    noFill();
    noStroke();
}

function draw()
{
  background(bg);

  image(tree,0,0,800,500);
  image(cloud,0,0,800,500);
  image(digdac,0,0,180,20);
  image(mario, mouseX, mouseY, 44,53);
  image(fireB, 250,300,49,56);
  image(grassB, 0,0,800,500);
  image(iceB,700,50,46,53);
  image(mushroom,0,0,800,500);
  image(waterB,0,0,800,500);
}
