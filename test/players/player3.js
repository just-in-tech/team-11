import { $ } from "../../lib/Pen.js";

export const player = $.makeCircleCollider(20, $.h / 3, 20);

export function controls() {
    const max = 20;
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

    if ($.keys.down("j")) {
        player.velocity.x -= 1;
    }
    if ($.keys.down("l")) {
        player.velocity.x += 1;
    }
    if ($.keys.down("i")) {
        player.velocity.y -= 1;
    }
    if ($.keys.down("k")) {
        player.velocity.y += 1;
    }
    if ($.keys.down(" ") && $.frameCount % 10 === 0) {
        
        player_shots.push(makeShot(player.x, player.y, "orange", 0));
    }
}