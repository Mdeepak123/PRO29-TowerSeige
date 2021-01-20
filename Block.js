class Block {
  constructor(x,y,width,height) {
    var options = {
        restitution:0.5,
        density:0.5,
        friction:1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    strokeWeight(4);
    stroke("red");
    fill("black");
    rect(pos.x, pos.y, this.width, this.height);
  }
};