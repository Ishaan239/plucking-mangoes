class Rope {
    constructor(body1, body2, offSetX, offSetY) {
        this.offSetX = offSetX
        this.offSetY = offSetY
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offSetX, y:this.offSetY}
        }
        this.rope = Constraint.create(options)
        World.add(world, this.rope)
        }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        push();
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x+this.offSetX, pointB.y+this.offSetY);
        pop();
    }
}