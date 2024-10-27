import { $ } from "../../lib/Pen.js";
export const player2 = new Player2(w/2, h/3);

class Player2 {
    constructor(x, y) {
        this.collider = $.makeCircleCollider(x, y, 20);
    }
    controls() {
        const max = 30; // set max speed
        // while not max speed, key presses for up/down/left/right
        while (player2.velocity.x < max && player2.velocity.y < max) {
            if ($.keys.down("arrowleft")) {
                player2.velocity.x -= 2;
            }
            if ($.keys.down("arrowright")) {
                player2.velocity.x += 2;
            }
            if ($.keys.down("arrowup")) {
                player2.velocity.y -= 2;
            }
            if ($.keys.down("arrowdown")) {
                player2.velocity.y += 2;
            }
        }
    }
}