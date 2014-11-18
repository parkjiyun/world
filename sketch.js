var bg, tree, cloud, digdac;

function setup()
{
    createCanvas(800,500);
    img = loadImage("bg.png")
    img1 = loadImage("tree.png");
    img2 = loadImage("cloud.png");
    img3 = loadImage("digdac.png");

    noFill();
    noStroke();
}

function draw()
{
  background(bg);
  image(img1, 600, 260);
  image(img,200, 150);
  image(img,180,20);
}
