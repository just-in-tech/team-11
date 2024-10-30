import { $ } from "../lib/Pen.js";

export class Factory {
    constructor() {
    }
    //
    makeAnt(x, y, speed) {   // (feed values like "speed" from data later)
        const ant = $.makeBoxCollider(x, y, 20, 20);
        ant.fill = "brown"; // "no fill" possible?
        ant.friction = 0;
        ant.direction = 90;
        ant.speed = speed;
        return ant;
    }
    // makeEagle
    // makeBear

    processRequests(requests, data) {
        for (const request of requests) {
            if (request.type == "factory") {
                if (request.action == "makeAnimal") {
                    data.playerAnimals.push(this.makeAnt(100, 400, 1));
                }
            }
        }
    }
}