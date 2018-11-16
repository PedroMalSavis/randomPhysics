let inst;

function setup(){
  createCanvas(displayWidth, displayHeight);
  inst = new inobj(displayWidth/2, displayHeight/2)
  background(221);
}
function draw(){

  inst.display();
  inst.update();
}
