import { $ } from "../lib/Pen.js";
import { player as player1, player1controls } from "./players/player1.js";
// import { player2 } from "./players/player2.js";
import { player as player3, controls as player3controls } from "./players/player3.js";

$.use(update);

function update() {
    $.w = 500
    $.h = 500
    player1controls()

    player3controls()

    $.drawColliders()
}



