import { $ } from "../lib/Pen.js";

export class Resources {
    constructor() {
        this.fibre = 0; 
        this.silk = 0;
    }

    update() {
        if ($.frameCount % 60 === 0) {
            this.fibre += 1;
            console.log("Current Fibre:", this.fibre);
        }
    }

    spend(cost) {
        this.fibre -= cost;
    }

    processRequest(request) {
        if (request.action == "add") {
            this.fibre += request.value;
        }
    }
}