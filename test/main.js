import { $ } from "../lib/Pen.js";
import { player1 } from "./players/player1.js";
import { player2 } from "./players/player2.js";
import { player3 } from "./players/player3.js";

$.use(update);

function update() {
    $.w = 500
    $.h = 500
    player1.player1controls()

    $.drawColliders()
}



