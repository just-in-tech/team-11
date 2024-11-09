import { $ } from "./lib/Pen.js";
import { Gui } from "./engine/gui.js";
import { Factory } from "./engine/factory.js";
import { Data } from "./engine/data.js";

$.use(update);
$.debug = false;
$.w = 800
$.h = 800

const factory = new Factory();
const data = new Data();
export const gui = new Gui(data);

function update() {
    gui.update(data, data.resources);
    const requests = gui.getRequests(data);
    factory.processRequests(requests, data, data.resources);
    data.resources.processRequests(requests, data);
    data.update(requests);
}