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
  image(fireB, 0,0,490,560);

}
