import { draw_screen as draw_mainmenu } from "./engine/_mainmenu/main.js";

$.use(update);
function update() {
    $.w = 900
    $.h = 900

    //draw_mainmenu();

    $.drawColliders()
}