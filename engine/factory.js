import { $ } from "../lib/Pen.js";

export class Factory {
    constructor() {
        this.playerSide = $.w * 0.1;
        this.enemySide = $.w * 0.9;
    }
    makeAnt(x, y, speed) {   // (feed values like "speed" from data later)
        const ant = $.makeBoxCollider(x, y, 20, 10);
        ant.fill = "green"; // "no fill" possible?
        ant.friction = 0;
        ant.direction = 90;
        ant.speed = speed;
        return ant;
    }
    makeEagle(x, y, speed) {   // (feed values like "speed" from data later)
        const eagle = $.makeBoxCollider(x, y, 10, 20);
        eagle.fill = "yellow"; // "no fill" possible?
        eagle.friction = 0;
        eagle.direction = 90;
        eagle.speed = speed;
        return eagle;
    }
    makeBear(x, y, speed) {   // (feed values like "speed" from data later)
        const bear = $.makeBoxCollider(x, y, 20, 40);
        bear.fill = "red"; // "no fill" possible?
        bear.friction = 0;
        bear.direction = 90;
        bear.speed = speed;
        return bear;
    }

    spawnHeight() {
        return $.math.random($.h/3, 2*$.h/3);
    }
    
    

    processRequests(requests, data) {
        for (const request of requests) {
            if (request.type == "factory") {
                if (request.action == "makeAnimal") {
                    let y = this.spawnHeight();
                    let x = 0;
                    if (request.playerSide == true) {
                        x = this.playerSide;
                    } else if (request.playerSide == false) {
                        x = this.enemySide;
                    }
                    if (request.value == "ant") {
                        data.playerAnimals.push(this.makeAnt(x, y, 1));
                    } else if (request.value == "eagle") {
                        data.playerAnimals.push(this.makeEagle(x, y, 1));
                    } else if (request.value == "bear") {
                        data.playerAnimals.push(this.makeBear(x, y, 1));
                    }   
                }
            }
        }
    }
}