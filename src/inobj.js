function inobj(x, y){
  this.post = createVector(x,y);
  picturesize = 20;
  this.speed = createVector(1,2);
}

inobj.prototype.display = function() {
  stroke(150,50,65);
  noFill();
  ellipse(this.post.x, this.post.y, picturesize, picturesize);
}
inobj.prototype.update = function() {

  const choice = Math.round(randomGaussian(3));
  if(choice == 0){
    this.post.x = this.post.x + this.speed.x;
  }else  if(choice == 1) {
    this.post.y = this.post.y + this.speed.y;
  }else  if(choice == 2 ){
    this.post.x = this.post.x + -1 * this.speed.x;
  }else  if(choice == 3){
    this.post.y = this.post.y + -1 * this.speed.y;
  }else{
    this.post.add(this.speed)
  }
}
