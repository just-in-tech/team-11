import { $ } from "../../lib/Pen.js";

export class BattleGui {
    constructor() {
        this.buildTreeButton = $.makeButton(100, 100, 100, 100); // replace later with "surrender" || "return to buildtree"
        this.buildTreeButton.label = "Return to \n Build Mode";
        // Unit Buttons
        this.unit
        this.antButton = $.makeButton(200, 600, 120, 200);
        this.antButton.label = "Buy Ant \n Cost: 3"; // this.cost
        this.antButton.border = "black";
        // eagle
        // bear
        this.requests = [];
    }

    drawBattle(data) {
        this.antButton.draw();
        if (data.resources.fibre >= 3) {
            this.antButton.background = "white";
            if (this.antButton.up) {
                this.requests.push({    // request a player ant
                    type: "factory",
                    action: "makeAnimal",

                })
                this.requests.push({    // fibre cost of 3
                    type: "resource",
                    action: "subtractValue",
                    value: "fibre",
                    amount: 3
                })
            }
        } else {
            this.antButton.background = "grey";
        }

        this.buildTreeButton.draw(data);
        if (this.buildTreeButton.up) {
            data.gameState = "treemenu";
        }
    }

    getRequests() {
        const requestsToBeReturned = this.requests;
        this.requests = [];
        return requestsToBeReturned;
    }
}