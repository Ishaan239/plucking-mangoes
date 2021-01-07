class Tree {
    constructor(x, y, width, height) {
        var options = {
            isStaic:true,
        }
        this.body = Bodies.rectangle(x, y, width, height);
        this.w = width;
        this.h = height;
        this.image = loadImage("Plucking mangoes/tree.png");
        World.add(world, this.body);
    }
    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.w, this.h);
    }
}