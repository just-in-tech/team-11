import { $ } from "../../lib/Pen.js";
export class Player2 {
    constructor(x, y) {
        this.collider = $.makeCircleCollider(x, y, 20);
        this.collider.fill = "red";
        this.collider.friction = 3;
    }
    controls() {
        const max = 30; // set max speed
        // while not max speed, key presses for up/down/left/right
        if ($.keys.down("leftarrow")) {
            this.collider.velocity.x -= 2;
        }
        if ($.keys.down("rightarrow")) {
            this.collider.velocity.x += 2;
        }
        if ($.keys.down("uparrow")) {
            this.collider.velocity.y -= 2;
        }
        if ($.keys.down("downarrow")) {
            this.collider.velocity.y += 2;
        }
    }
}
//export const player2 = new Player2(200, 300);