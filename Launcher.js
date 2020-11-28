class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.008,
            length: 10
        }
        this.pointB=pointB
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    display(){
        if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
    fly() {
    this.launcher.bodyA=null;
    }

    attach(sbody){
        this.launcher.bodyA=sbody;
    }
}