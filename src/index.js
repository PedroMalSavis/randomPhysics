let inst;

function setup(){
  createCanvas(displayWidth, displayHeight);
  inst = new inobj(displayWidth/2, displayHeight/2)
}
function draw(){
  background(221);
  inst.display();
}
