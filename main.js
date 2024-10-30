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

function update() {
    gui.update(data);
    const requests = gui.getRequests(data);
    factory.processRequests(requests, data);
    data.update(requests);
    $.drawColliders();
}