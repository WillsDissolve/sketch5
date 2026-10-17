let img;
let x = 0;
let fade = 0;
let fadeAmount = 5;

async function setup() {
  createCanvas(500, 500);
  //load image
  img = await loadImage('media/73goji.png');
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
  rotate(rotate);

  let angle = frameCount * 0.025;
  rotate(angle);
  fill('green');
  rect(30,30,100,20);
  
  circle(200,200,100,100)
  if(fade<0){
    fadeAmount = 5;
  }
  
  if(fade > 255){
    fadeAmount *= -1;
  }
  
  fade += fadeAmount;
}
