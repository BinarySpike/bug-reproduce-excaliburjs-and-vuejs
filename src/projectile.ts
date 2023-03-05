import { Actor, Color, Component, Input, Rectangle, vec, Vector } from "excalibur";

export class Projectile extends Actor {
    constructor(vel: Vector) {
        super({
            pos: vec(0,0),
            vel: vel.scale(300),
            width: 25,
            height: 25,
        });
    }

    onInitialize() {
        this.graphics.use(new Rectangle({
            width: 25,
            height: 25,
            color: Color.Green
        }));
    }
}