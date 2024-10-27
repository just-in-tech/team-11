import { $ } from "../lib/Pen.js";
import { player as player1, player1controls } from "./players/player1.js";
import { Player2 } from "./players/player2.js";
import { player3 } from "./players/player3.js";

const player3item =new player3 ;
const player2 = new Player2(200, 300);

$.use(update);
$.debug = true;

function update() {
    $.w = 500
    $.h = 500
    
    player1controls()
    player2.controls()
    player3item.controls()

    $.drawColliders()
}



