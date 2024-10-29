import { $ } from "../lib/Pen.js";

export class Factory {
    constructor() {
    }
    // spawn collider with makeThing() method
    makeThing(x, y, colour) {
        const temp = $.makeCircleCollider(x, y, 20);
        temp.fill = colour;
        temp.direction = $.math.random(0, 360);
        temp.speed = 5;
        return temp;
    }

    processRequests(requests, data) {
        if (requests.length > 0) {
            console.log("Factory saw request: ", requests);
        }
        for (const request of requests) {
            // if it is a factory request
            if (request.type == "factory") {
                // what type of factory request
                if (request.action == "blue") {
                    data.blueThings.push(this.makeThing(50, 50, "blue"));
                }
                if (request.action == "red") {
                    data.redThings.push(this.makeThing(100, 50, "red"));
                }
            }
        }
    }
}