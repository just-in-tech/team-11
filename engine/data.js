import { $ } from "../lib/Pen.js";
import { Resources } from "./resources.js";

export class Data {
    constructor() {
        this.blueThings = $.makeGroup();
        this.blueThings.name = "blueThings";
        this.redThings = $.makeGroup();
        this.redThings.name = "redThings";
        this.resources = new Resources();
        this.gameState = "loading"; // gameState = "loading" | "main menu" | "buildtree" | "battle"
        // player entities
        this.playerAnimals = $.makeGroup({  
            ant: [],
            eagle: [],
            bear: []
        });
        // enemy entities
        this.enemyAnimals = $.makeGroup({   
            ant: [],
            eagle: [],
            bear: []
        })
    }
    update(requests) {
        for (const request of requests) {
            if (request.type == "resource") {
                this.resources.processRequest(request, this.gameState);
            }
        }
        // update resources
        this.resources.update();
    }
}