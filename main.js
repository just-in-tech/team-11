import { $ } from "../lib/Pen.js";

$.use(update);
$.debug = true;

function update() {
    $.w = 900
    $.h = 900

    $.drawColliders()
}