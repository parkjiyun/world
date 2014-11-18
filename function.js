var img;  // Declare variable 'img'.

function setup()
{
    createCanvas(800,500);
    img = loadImage("tree.png");  // Load the image     
    noFill();
    noStroke();
}

function draw()
{
  image(img, 60, 20);

}
