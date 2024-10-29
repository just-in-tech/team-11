import { change_gamestate } from "./engine/assets.js";

$.use(update);
function update() {
    $.w = 900
    $.h = 900

    change_gamestate("mainmenu");

    $.drawColliders()
}