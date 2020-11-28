class Stone{
    constructor(x,y,r){

        var options={
            isStatic:false,
            restitution :0,
            friction:1,
            density:1.2
        }
    this.x=x
    this.y=y
    this.r=r
    this.image=loadImage("stone.png")
    this.body=Bodies.circle(this.x, this.y, this.r/2, options);
    World.add(world, this.body)
    }

        display(){
            var stonePos = this.body.position;
            imageMode(CENTER/2);
            ellipse(0,0,this.r,this.r);
            image(this.image, stonePos.x, stonePos.y, this.r, this.r);
        }
}
