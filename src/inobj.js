function inobj(x, y){
  const post = createVector(x,y);
  picturesize = 20;

}

inobj.prototype.display = function() {
  stroke(150,50,65);
  ellipse(this.post.x, this.post.y, 20, 20);
}
