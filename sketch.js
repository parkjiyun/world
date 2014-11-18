var bg, tree, cloud, digdac;

function setup()
{
    createCanvas(800,500);
    bg = loadImage("bg.png")
    tree = loadImage("tree.png");
    cloud = loadImage("cloud.png");
    digdac = loadImage("digdac.png");

    noFill();
    noStroke();
}

function draw()
{
  background(bg);
  tree(img, 600, 260);
  cloud(img,200, 150);
  digdac(img,180,20);
}
