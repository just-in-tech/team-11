import { $ } from "../lib/Pen.js";
import { Resources } from "./resources.js";

export class Data {
    constructor() {
        this.resources = new Resources();
        this.gameState = "mainmenu"; // gameState = "loading" | "mainmenu" | "treemenu" | "battle"
        
        this.playerAnimals = $.makeGroup();
        this.enemyAnimals = $.makeGroup();
    }
    update(requests) {
        for (const request of requests) {
            if (request.type == "resource") {
                this.resources.processRequest(request);
            }
        }
        // update resources
        this.resources.update(this.gameState);
    }
}