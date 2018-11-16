function inobj(x, y){
  this.post = createVector(x,y);
  picturesize = 20;

}

inobj.prototype.display = function() {
  stroke(150,50,65);
  noFill();
  ellipse(this.post.x, this.post.y, picturesize, picturesize);
}
