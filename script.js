let img;
let x = 0;
let c = [ 'green', 'gray'];

async function setup() {
  createCanvas(500, 500);
  //load image
  img = await loadImage('media/73goji.png');
  frameRate(24);
}

function draw() {
  rotate = frameCount * 2;
  background(220);
  image(img,x,40,300,220);
  tint('green');
  x+=2;
    if(x>width){
      x=0;
    }

  let angle = frameCount * 0.025;
  rotate(angle);
  fill('green');
  rect(30,30,100,20);
  
  let currentColor = c[frameCount % c.length];
  fill(currentColor);
  ellipse(200,200,100,100);

}
