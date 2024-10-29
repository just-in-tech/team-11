import { $ } from "./lib/Pen.js";
import { change_gamestate } from "./engine/assets.js";

$.use(update);
function update() {
    $.w = 900
    $.h = 900
    if($.frameCount==0){
    
    change_gamestate("mainmenu");
    }

    $.drawColliders()
}