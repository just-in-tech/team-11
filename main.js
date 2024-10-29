import { $ } from "./lib/Pen.js";
import { change_gamestate } from "./engine/assets.js";
import { drawGUI } from "./engine/gui.js";

$.use(update);
$.debug = true;

function update() {
    $.w = 900
    $.h = 900
    if($.frameCount==0){
        change_gamestate("mainmenu");
    }

    // drawGUI();
    $.drawColliders()
}