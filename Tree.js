class Tree{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.image=loadImage("tree.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      image(this.image, pos.x, 300, this.width, this.height);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
