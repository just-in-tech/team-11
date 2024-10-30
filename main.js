import { $ } from "./lib/Pen.js";
import { Gui } from "./engine/gui.js";
import { Factory } from "./engine/factory.js";
import { Data } from "./engine/data.js";

$.use(update);
$.debug = true;
$.w = 800
$.h = 800

const gui = new Gui();
const factory = new Factory();
const data = new Data();
let gameState = "battle"; // gameState = "loading" | "main menu" | "buildtree" | "battle"

function update() {
    gui.update(data, gameState);
    const requests = gui.getRequests();
    factory.processRequests(requests, data);
    data.update(requests, gameState);
    $.drawColliders();
}