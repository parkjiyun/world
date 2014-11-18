var bg, tree;

function setup()
{
    createCanvas(8000,5000);
    bg = loadImage("bg.png")
    tree = loadImage("tree.png");  // Load the image     
    noFill();
    noStroke();
}

function draw()
{
  background(bg);
  tree(img, 60, 20);

}
