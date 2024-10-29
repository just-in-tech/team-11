import { $ } from "../lib/Pen.js";
import { Factory } from "./factory.js";

export class Gui {
    constructor() {
        this.blueButton = $.makeButton(200, 200, 100, 20);
        this.blueButton.label = "blue";
        this.redButton = $.makeButton(200, 250, 100, 20);
        this.redButton.label = "red"
        this.requests = [];   // we use array, because "group() leak"
    }

    update(data) {
        if (data.gameState = "loading") {
            // draw loading
        } else if (data.gameState = "main menu") {
            // draw main_menu
        } else if (data.gameState = "buildtree") {
            // draw buildtree
        } else if (data.gameState = "battle") {
            // draw battle
        }
        
        if (data.resources.fibre > 3) {
            this.blueButton.draw();
            if (this.blueButton.up) {
                this.requests.push({
                    type: "factory",
                    action: "blue"
                });
                data.resources.spend(3);
            }
        }
        this.redButton.draw();
        if (this.redButton.up) {
            this.requests.push({
                type: "resource",
                action: "add",
                value: 2
            })
        }
        
    }

    getRequests() {
        const requestsToBeReturned = this.requests;
        this.requests = [];
        return requestsToBeReturned;
    }
}