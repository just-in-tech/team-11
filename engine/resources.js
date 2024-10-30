import { $ } from "../lib/Pen.js";

export class Resources {
    constructor() {
        this.fibre = 0; 
        this.silk = 0;
    }

    // 'frame-based' resource generation
    update(gameState) {
        if (gameState == "battle") {
            if ($.frameCount % 60 === 0) {
                this.fibre += 1;
                // console.log("Current Fibre:", this.fibre);   // debug: log fibre value each time
            }
        }
    }

    // add a resource value
    gain(resource, cost) {
        if (request.value == "fibre") {
            this.fibre += request.value;
        } else if (request == "silk") {
            this.silk += request.value
        }
    }
    spend(resource, cost) {
        if (resource == "fibre") {
            this.fibre -= cost;
        } else if (resource == "silk") {
            this.silk -= cost;
        }
    }

    processRequest(request) {
        console.log(request);   // debug: log any resource request(s)
        if (request.action == "addValue") {
            this.gain(request.value, request.amount);
        }
        if (request.action == "subtractValue") {
            this.spend(request.value, request.amount);
        }
    }
}