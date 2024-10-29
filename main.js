import { $ } from "./lib/Pen.js";
import { change_gamestate } from "./engine/assets.js";
import { Gui } from "./engine/gui.js";
import { Factory } from "./engine/factory.js";
import { Data } from "./engine/data.js";

$.use(update);
$.debug = true;

const gui = new Gui();
const factory = new Factory();
const data = new Data();

function update() {
    $.w = 900
    $.h = 900
    
    gui.update(data);
    const requests = gui.getRequests();
    factory.processRequests(requests, data);
    data.update(requests);

    $.drawColliders();
}