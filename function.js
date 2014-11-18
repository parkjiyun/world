var img;  

function setup()
{
    createCanvas(800,500);
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
