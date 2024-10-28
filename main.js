import { draw_screen as draw_mainmenu } from "./engine/_mainmenu/main.js";

$.use(update);
function update() {
    $.w = 500
    $.h = 500

    //draw_mainmenu();

    $.drawColliders()
}