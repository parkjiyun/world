var bg, tree, cloud, digdac, digdac2, fireB, fireBD;

function setup()
{
    createCanvas(800,500);
    bg = loadImage("bg.png")
    tree = loadImage("tree.png");
    cloud = loadImage("cloud.png");
    digdac = loadImage("digdac.png");
    digdac2 = loadImage("dicdac2.png"); 
    fireB = loadImage("fireB.png");
    fireBD = loadImage("fireBD.png");
    noFill();
    noStroke();
}

function draw()
{
  background(bg);
  tree(tree, 600, 200);
  cloud(cloud,200, 150 );
  digdac(digdac,180,20);
  


}
