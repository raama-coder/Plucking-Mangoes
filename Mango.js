class Mango{
    constructor(x,y,r){

        var options={
            isStatic:true,
            restitution :0,
            friction:1,
            density:3
        }
    this.x=x
    this.y=y
    this.r=r
    this.image=loadImage("mango.png")
    this.body=Bodies.circle(this.x, this.y, this.r, options);
    World.add(world, this.body)
    }

        display(){
            var mangoPos = this.body.position;
            imageMode(CENTER/2);
            ellipse(0,0,this.r,this.r);
            image(this.image, mangoPos.x, mangoPos.y, this.r, this.r);
        }
}
