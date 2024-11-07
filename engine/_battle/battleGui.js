import { $ } from "../../lib/Pen.js";
import { Resources } from "../resources.js";

const resources = new Resources();
let currentFibre;
let currentWave = 0;

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
            amount: (1 + currentWave),
            playerSide: false
        })
    }

    drawBattle(data) {
        // Update battleTimer
        this.battleTimer += 1;
        if (this.battleTimer%60 == 0) {
            if (this.battleTimer%1200 == 0) {
                this.enemySpawn(currentWave);
                currentWave++;
            }
        }
        resources.generateFibre();
        
        // Fibre Panel
        $.text.alignment.x = "center";
        $.text.alignment.y = "center";
        $.shape.alignment.x = "center"; // doesn't seem to be applying properly
        $.shape.alignment.y = "center";
        $.colour.fill = "white";

        $.shape.rectangle(this.unitButtonX, this.unitButtonY, 150, 140, 15);
        currentFibre = String(resources.fibre.fibre);
        $.text.size = 24;
        $.colour.fill = "black";
        $.text.print(this.unitButtonX, this.unitButtonY - 20, "Fibre", 140);
        $.text.print(this.unitButtonX, this.unitButtonY + 20, currentFibre, 140);

        // Testing
        $.shape.line(0, $.h/3, $.w, $.h/3);
        $.shape.line(0, 2*($.h/3), $.w, 2*($.h/3));

        // Buy Animal Buttons
        this.antButton.draw();
        // show a white version if a unit can be bought (grey if not)
        if (resources.fibre.fibre >= data.playerStats.ant.priceInGame) {
            this.antButton.background = "white";
            // clicking will remove some fibre and spawn a unit for the player
            if (this.antButton.up) {
                this.requests.push({
                    type: "factory",
                    action: "makeAnimal",
                    value: "ant",
                    amount: 1,
                    playerSide: true
                })
                resources.fibre.fibre -= data.playerStats.ant.priceInGame;
            }
        } else {
            this.antButton.background = "grey";
        }
        this.eagleButton.draw();
        if (resources.fibre.fibre >= data.playerStats.eagle.priceInGame) {
            this.eagleButton.background = "white";
            if (this.eagleButton.up) {
                this.requests.push({    // request a player eagle
                    type: "factory",
                    action: "makeAnimal",
                    value: "eagle",
                    amount: 1,
                    playerSide: true
                })
                resources.fibre.fibre -= data.playerStats.eagle.priceInGame;
            }
        } else {
            this.eagleButton.background = "grey";
        }
        this.bearButton.draw();
        if (resources.fibre.fibre >= data.playerStats.bear.priceInGame) {
            this.bearButton.background = "white";
            if (this.bearButton.up) {
                this.requests.push({    // request a player bear
                    type: "factory",
                    action: "makeAnimal",
                    value: "bear",
                    amount: 1,
                    playerSide: true
                })
                resources.fibre.fibre -= data.playerStats.bear.priceInGame;
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
        resources.fibre.fibre = 0;
        data.gameState = "treemenu";
    }

    getRequests() {
        const requestsToBeReturned = this.requests;
        this.requests = [];
        return requestsToBeReturned;
    }
}