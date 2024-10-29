import { $ } from "../lib/Pen.js";
import { Resources } from "./resources.js";

export class Data {
    constructor() {
        this.blueThings = $.makeGroup();
        this.blueThings.name = "blueThings";
        this.redThings = $.makeGroup();
        this.redThings.name = "redThings";
        this.resources = new Resources();
    }
    update(requests) {
        for (const request of requests) {
            if (request.type == "resource") {
                this.resources.processRequest(request);
            }
        }
        this.resources.update();
    }
    
}



/* old data
export const GameState = {
    CURRENT: 3, // for testing BATTLE screen
    LOADING: 0,
    MAIN_MENU: 1,
    BUILDTREE: 2, 
    BATTLE: 3
};

// PLAYER ANIMAL GROUP(S)
export const playerAnimals = {
    ant: [],
    eagle: [],
    bear: []
}

// ENEMY ANIMAL GROUP(S)
    // how are these added to from 'animalFactory.js' ?
*/