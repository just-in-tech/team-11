import { $ } from "../lib/Pen.js";

export class Resources {
    constructor() {
        this.dollaridoos = 0; 
    }

    update() {
        // +1 dollar every 10th frame
        if ($.frameCount % 60 === 0) {
            this.dollaridoos += 1;
            console.log("900 dollaridoos", this.dollaridoos);
        }
    }

    spend(cost) {
        this.dollaridoos -= cost;
    }

    processRequest(request) {
        if (request.action == "add") {
            this.dollaridoos += request.value;
        }
    }
}

// old:
export const resources = { 
    fiber: 0,
    silk: 0
};