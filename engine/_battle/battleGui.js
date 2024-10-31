import { $ } from "../../lib/Pen.js";

let currentFibre;

export class BattleGui {
    constructor() {
        // Unit Buttons
        this.antButton = $.makeButton(350, 600, 100, 150);
        this.antButton.label = "Buy Ant \n Cost: 3"; // this.cost
        this.antButton.border = "black";

        this.eagleButton = $.makeButton(500, 600, 100, 150);
        this.eagleButton.label = "Buy Eagle \n Cost: 6"; // this.cost
        this.eagleButton.border = "black";

        this.bearButton = $.makeButton(650, 600, 100, 150);
        this.bearButton.label = "Buy Bear \n Cost: 9"; // this.cost
        this.bearButton.border = "black";
        // treemenu button
        this.treeMenuButton = $.makeButton(100, 100, 100, 100); // replace later with "surrender" || "return to treeMenu"
        this.treeMenuButton.label = "Return to \n Build Mode";
        
        this.requests = [];
    }

    drawBattle(data) {
        // Fibre Panel
        $.colour.fill = "white";
        $.shape.roundedRectangle(100, 525, 150, 150, 15);
        currentFibre = String(data.resources.fibre);
        $.text.size = 28;
        $.colour.fill = "black";
        $.text.print(175, 575, "Fibre", 140);
        $.text.print(175, 625, currentFibre, 140);

        // Buy Animal Buttons
        this.antButton.draw();
        if (data.resources.fibre >= 3) {
            this.antButton.background = "white";
            if (this.antButton.up) {
                this.requests.push({    // request a player ant
                    type: "factory",
                    action: "makeAnimal",
                    value: "ant",
                    boolean: 1
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
        this.eagleButton.draw();
        if (data.resources.fibre >= 6) {
            this.eagleButton.background = "white";
            if (this.eagleButton.up) {
                this.requests.push({    // request a player eagle
                    type: "factory",
                    action: "makeAnimal",
                    value: "eagle",
                    boolean: 1
                })
                this.requests.push({    // fibre cost of 6
                    type: "resource",
                    action: "subtractValue",
                    value: "fibre",
                    amount: 6
                })
            }
        } else {
            this.eagleButton.background = "grey";
        }
        this.bearButton.draw();
        if (data.resources.fibre >= 9) {
            this.bearButton.background = "white";
            if (this.bearButton.up) {
                this.requests.push({    // request a player bear
                    type: "factory",
                    action: "makeAnimal",
                    value: "bear",
                    boolean: 1
                })
                this.requests.push({    // fibre cost of 6
                    type: "resource",
                    action: "subtractValue",
                    value: "fibre",
                    amount: 9
                })
            }
        } else {
            this.bearButton.background = "grey";
        }
        // Tree Menu Button
        this.treeMenuButton.draw(data);
        if (this.treeMenuButton.up) {
            data.gameState = "treemenu";
        }
    }

    endBattle() {
        // Print Total Silk Gain (& "Continue" Button);
        // Clear all entities
        data.resources.fibre = 0;
        data.gameState = "treemenu";
        
    }

    getRequests() {
        const requestsToBeReturned = this.requests;
        this.requests = [];
        return requestsToBeReturned;
    }
}