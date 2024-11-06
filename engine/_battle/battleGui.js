import { $ } from "../../lib/Pen.js";

let currentFibre;

export class BattleGui {
    constructor(data) {
        this.unitButtonY = $.h * (80/100);  // baseline button sizes
        this.unitButtonX = $.w * (20/100);
        // make buttons for user to purchase units
        this.antButton = $.makeButton(this.unitButtonX*2, this.unitButtonY, 100, 150);
        this.antButton.label = "Buy    AntXX \n Cost: " + data.playerStats.ant.priceInGame;
        this.antButton.border = "black";

        this.eagleButton = $.makeButton(this.unitButtonX*3, this.unitButtonY, 100, 150);
        this.eagleButton.label = "Buy Eagle \n Cost: " + data.playerStats.eagle.priceInGame;
        this.eagleButton.border = "black";

        this.bearButton = $.makeButton(this.unitButtonX*4, this.unitButtonY, 100, 150);
        this.bearButton.label = "Buy BearX \n Cost: " + data.playerStats.bear.priceInGame;
        this.bearButton.border = "black";
        // surrender button during battle
        this.treeMenuButton = $.makeButton(100, 100, 100, 60);
        this.treeMenuButton.label = "Surrender";
        
        this.requests = [];
        this.battleTimer = 0;
    }

    enemySpawn(currentWave) {
        this.requests.push({
            type: "factory",
            action: "makeAnimal",
            value: "ant",
            amount: (1 + currentWave/2),
            playerSide: false
        })
    }

    drawBattle(data) {
        // Update battleTimer
        this.battleTimer += 1;
        if (this.battleTimer%60 == 0) {
            if (this.battleTimer%600 == 0) {
                this.enemySpawn(0);
            }
        }
        
        // Fibre Panel
        $.text.alignment.x = "center";
        $.text.alignment.y = "center";
        $.shape.alignment.x = "center"; // doesn't seem to be applying properly
        $.shape.alignment.y = "center";
        $.colour.fill = "white";

        $.shape.rectangle(this.unitButtonX, this.unitButtonY, 150, 140, 15);
        currentFibre = String(data.resources.fibre);
        $.text.size = 28;
        $.colour.fill = "black";
        $.text.print(this.unitButtonX, this.unitButtonY - 20, "Fibre", 140);
        $.text.print(this.unitButtonX, this.unitButtonY + 20, currentFibre, 140);

        // Testing
        $.shape.line(0, $.h/3, $.w, $.h/3);
        $.shape.line(0, 2*($.h/3), $.w, 2*($.h/3));

        // Buy Animal Buttons
        this.antButton.draw();
        if (data.resources.fibre >= 3) {
            this.antButton.background = "white";
            if (this.antButton.up) {
                this.requests.push({    // request a player ant
                    type: "factory",
                    action: "makeAnimal",
                    value: "ant",
                    playerSide: true
                })
                // this.requests.push({    // fibre cost of 3
                //     type: "resource",
                //     action: "subtractValue",
                //     value: "fibre",
                //     amount: 3
                // })
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
                    playerSide: true
                })
                // this.requests.push({    // fibre cost of 6
                //     type: "resource",
                //     action: "subtractValue",
                //     value: "fibre",
                //     amount: 6
                // })
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
                    playerSide: true
                })
                // this.requests.push({    // fibre cost of 6
                //     type: "resource",
                //     action: "subtractValue",
                //     value: "fibre",
                //     amount: 9
                // })
            }
        } else {
            this.bearButton.background = "grey";
        }
        // Tree Menu Button
        this.treeMenuButton.draw(data);
        if (this.treeMenuButton.up) {
            this.endBattle(data);
        }
    }

    endBattle(data) {
        // Print Total Silk Gain (& "Continue" Button);

        // Clean up animal groups
        for (let i = 0; i < data.playerAnimals.length; i++) {
            data.playerAnimals[i].remove();
        }
        for (let i = 0; i < data.enemyAnimals.length; i++) {
            data.enemyAnimals[i].remove();
        }
        // Reset battle values
        this.battleTimer = 0;
        data.resources.fibre = 0;
        data.gameState = "treemenu";
    }

    getRequests() {
        const requestsToBeReturned = this.requests;
        this.requests = [];
        return requestsToBeReturned;
    }
}