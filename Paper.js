class Paper {
    constructor() {
        var options = {
            isStatic: false,
            restituton: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(60, 600, 15, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("green");
        ellipse(pos.x, pos.y, 15, 15);
    }

}