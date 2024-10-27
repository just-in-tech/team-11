import { $ } from "../../lib/Pen.js";

export const player = $.makeCircleCollider(30, $.h / 2, 30);

export function player1controls() {
    const max = 30;
    if (player.velocity.x > max) {
        player.velocity.x = max;
    }
    if (player.velocity.x < -max) {
        player.velocity.x = -max;
    }
    if (player.velocity.y > max) {
        player.velocity.y = max;
    }
    if (player.velocity.y < -max) {
        player.velocity.y = -max;
    }
    if ($.keys.down("a")) {
        player.velocity.x -= 1;
    }
    if ($.keys.down("d")) {
        player.velocity.x += 1;
    }
    if ($.keys.down("w")) {
        player.velocity.y += 1;
    }
    if ($.keys.down("s")) {
        player.velocity.y -= 1;
    }
}