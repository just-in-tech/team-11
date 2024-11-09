import { $ } from "../../lib/Pen.js";
import { Resources } from "../resources.js";

const resources = new Resources();

let currentFibre;
let currentWave = 0;

export class BattleGui {
    constructor(data) {
        // asset loading
        this.battleBackgroundImage = $.loadImage($.w / 2, $.h / 2, "./engine/_battle/spritesheet/battlebackground_1.png");

        this.unitButtonY = $.h * (90 / 100);  // baseline button sizes
        this.unitButtonX = $.w * (20 / 100);
        // make buttons for user to purchase units
        this.antButton = $.makeButton(this.unitButtonX * 2, this.unitButtonY, 100, 150);
        this.antButton.label = "Buy    AntXX \n Cost: " + data.playerStats.ant.priceInGame;
        this.antButton.border = "black";

        this.eagleButton = $.makeButton(this.unitButtonX * 3, this.unitButtonY, 100, 150);
        this.eagleButton.label = "Buy Eagle \n Cost: " + data.playerStats.eagle.priceInGame;
        this.eagleButton.border = "black";

        this.bearButton = $.makeButton(this.unitButtonX * 4, this.unitButtonY, 100, 150);
        this.bearButton.label = "Buy BearX \n Cost: " + data.playerStats.bear.priceInGame;
        this.bearButton.border = "black";
        // surrender button during battle
        this.surrenderButton = $.makeButton(100, 100, 100, 60);
        this.surrenderButton.label = "Surrender";
        this.endButton = $.makeButton($.w / 2, $.h / 2, $.w / 10, $.h / 10);
        this.endButton.label = "Confirm";

        this.requests = [];
        this.battleTime = 0;
    }

    drawBattle(data) {
        this.battleBackgroundImage.h = 800
        this.battleBackgroundImage.w = 800
        this.battleBackgroundImage.draw();

        // continue drawing the battle until "battleOver" state is true from a lose state
        if (data.battleOver == true) {
            this.endBattle(data, resources);
        } else if (data.battleOver == false) {
            // update timed events
            this.battleTimer();
            resources.generateFibre();
        }
        // Draw GUI Elements
        this.fibrePanel();
        this.silkPanel();
        this.unitButtons(data);

        // surrender button
        this.surrenderButton.draw(data);
        if (this.surrenderButton.up) {
            data.battleOver = true;
        }

        // draw entities
        $.drawColliders();
    }

    // keep track of time for battle "events" like enemy spawn
    battleTimer() {
        this.battleTime += 1;
        if (this.battleTime % 60 == 0) {
            if (this.battleTime % 1200 == 0) {
                this.enemySpawn(currentWave);
                currentWave++;
            }
        }
    }
    // spawn enemy waves periodically here
    enemySpawn(currentWave) {
        this.requests.push({
            type: "factory",
            action: "makeAnimal",
            value: "ant",
            amount: (1 + currentWave % 3),
            playerSide: false
        })
    }

    fibrePanel() {
        // Todo: Add "progress bar" effect
        $.text.alignment.x = "center";
        $.text.alignment.y = "center";
        $.shape.alignment.x = "center"; // doesn't seem to be applying properly
        $.shape.alignment.y = "center";
        $.colour.fill = "white";
        $.shape.rectangle(this.unitButtonX, this.unitButtonY, 150, 140, 15);
        currentFibre = String(resources.fibre);
        $.text.size = 24;
        $.colour.fill = "black";
        $.text.print(this.unitButtonX, this.unitButtonY - 20, "Fibre", 140);
        $.text.print(this.unitButtonX, this.unitButtonY + 20, currentFibre, 140);
    }

    silkPanel() {
        // Todo: Add "progress bar" effect
        $.text.alignment.x = "center";
        $.text.alignment.y = "center";
        $.shape.alignment.x = "center"; // doesn't seem to be applying properly
        $.shape.alignment.y = "center";
        $.colour.fill = "white";
        $.shape.rectangle($.w / 2, $.h / 6, 150, 140, 15);
        currentFibre = String(resources.silkFromBattle);
        $.text.size = 24;
        $.colour.fill = "black";
        $.text.print($.w / 2, $.h / 6 - 20, "Silk Collected: ", 140);
        $.text.print($.w / 2, $.h / 6 + 20, String(resources.silkFromBattle), 140);
    }

    unitButtons(data) {
        // Buy Animal Buttons
        this.antButton.draw();
        // show a white version if a unit can be bought (grey if not)
        if (resources.fibre >= data.playerStats.ant.priceInGame) {
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
                resources.fibre -= data.playerStats.ant.priceInGame;
            }
        } else {
            this.antButton.background = "grey";
        }
        if (data.playerStats.eagle.unlocked == 1) {
            this.eagleButton.draw();
        }
        if (resources.fibre >= data.playerStats.eagle.priceInGame) {
            this.eagleButton.background = "white";
            if (this.eagleButton.up) {
                this.requests.push({    // request a player eagle
                    type: "factory",
                    action: "makeAnimal",
                    value: "eagle",
                    amount: 1,
                    playerSide: true
                })
                resources.fibre -= data.playerStats.eagle.priceInGame;
            }
        } else {
            this.eagleButton.background = "grey";
        }
        if (data.playerStats.bear.unlocked == 1) {
            this.bearButton.draw();
        }
        if (resources.fibre >= data.playerStats.bear.priceInGame) {
            this.bearButton.background = "white";
            if (this.bearButton.up) {
                this.requests.push({    // request a player bear
                    type: "factory",
                    action: "makeAnimal",
                    value: "bear",
                    amount: 1,
                    playerSide: true
                })
                resources.fibre -= data.playerStats.bear.priceInGame;
            }
        } else {
            this.bearButton.background = "grey";
        }
    }



    endBattle(data, resources) {
        //Justin maybe
        $.colour.fill = "white";
        $.colour.stroke = "black";
        $.shape.rectangle($.w / 2, $.h / 3, $.w / 4, $.h / 4);
        $.colour.fill = "black";
        let textHeight = $.h / 4;
        $.text.print($.w / 2, textHeight, "Battle Over!", $.w / 2);
        textHeight += $.h / 20;
        $.text.print($.w / 2, textHeight, "Silk Total: ", $.w / 2);
        textHeight += $.h / 20;
        // draw icon here
        let silkTotal = String(resources.silkFromBattle);
        $.text.print($.w / 2, textHeight, silkTotal, $.w / 2);

        // Clean up animal groups
        for (let i = 0; i < data.playerAnimals.length; i++) {
            data.playerAnimals[i].remove();
        }
        for (let i = 0; i < data.computerAnimals.length; i++) {
            data.computerAnimals[i].remove();
        }
        // Reset battle values
        this.battleTime = 0;
        resources.fibre = 0;
        // Confirm/End Button
        this.endButton.draw();
        if (this.endButton.up) {
            resources.silk = resources.silkFromBattle;
            resources.silkFromBattle = 0;
            data.gameState = "treemenu";
            data.battleOver = false;
            //Justin
            this.requests.push({
                type: "resources",
                action: "endTheGame",
            })
            //to here is justin
        }
    }

    getRequests() {
        const requestsToBeReturned = this.requests;
        this.requests = [];
        return requestsToBeReturned;
    }
}