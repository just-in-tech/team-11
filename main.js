import { $ } from "./lib/Pen.js";
import { Gui } from "./engine/gui.js";
import { Factory } from "./engine/factory.js";
import { Data } from "./engine/data.js";
import { Resources } from "./engine/resources.js";

$.use(update);
$.debug = false;
$.w = 800
$.h = 800

const factory = new Factory();
const data = new Data();
const gui = new Gui(data);
const resources = new Resources();

function update() {
    gui.update(data, resources);
    const requests = gui.getRequests(data);
    factory.processRequests(requests, data);
    resources.processRequests(requests,data);
    data.update(requests);
    // $.drawColliders();
}