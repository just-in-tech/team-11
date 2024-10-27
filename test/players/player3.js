import { $ } from "../../lib/Pen.js";
export class player3{
    constructor(){
        this.player = $.makeCircleCollider(20, $.h / 3, 20);
        this.player.fill = "green"
        this.player.friction=5
    }
    controls() {
        const max = 20;
        if (this.player.velocity.x > max) {
            this.player.velocity.x = max;
        }
        if (this.player.velocity.x < -max) {
            this.player.velocity.x = -max;
        }
        if (this.player.velocity.y > max) {
            this.player.velocity.y = max;
        }
        if (this.player.velocity.y < -max) {
            this.player.velocity.y = -max;
        }
    
        if ($.keys.down("j")) {
            this.player.velocity.x -= 1;
        }
        if ($.keys.down("l")) {
            this.player.velocity.x += 1;
        }
        if ($.keys.down("i")) {
            this.player.velocity.y -= 1;
        }
        if ($.keys.down("k")) {
            this.player.velocity.y += 1;
        }
}
}
