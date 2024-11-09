import { $ } from "../../lib/Pen.js";
import { Resources } from "../resources.js";

const resources = new Resources();

export class BattleGui {
    constructor(data) {
        // asset loading
        this.battleBackgroundImage = $.loadImage($.w / 2, $.h / 2, "./engine/_battle/spritesheet/battlebackground_1.png");
        this.silkIcon = $.loadImage($.w/2, $.h * 17/100, "./engine/assets/resources/smallsilkicon.png");
        this.fibreIcon = $.loadImage($.w/5, $.h * 90/100, "./engine/assets/resources/smallfibreicon.png");

        this.unitButtonY = $.h * (90 / 100);  // baseline button sizes
        this.unitButtonX = $.w * (20 / 100);
        // make buttons for user to purchase units
        this.antButton = $.makeButton(this.unitButtonX * 2, this.unitButtonY, 100, 150);
        this.antButton.label = "Buy Ant        Cost: " + data.playerStats.ant.priceInGame;
        // this.antButton.border = "blue";    <-- doesn't seem to do anything
        this.eagleButton = $.makeButton(this.unitButtonX * 3, this.unitButtonY, 100, 150);
        this.eagleButton.label = "Buy Eagle    Cost: " + data.playerStats.eagle.priceInGame;

        this.bearButton = $.makeButton(this.unitButtonX * 4, this.unitButtonY, 100, 150);
        this.bearButton.label = "Buy Bear     Cost: " + data.playerStats.bear.priceInGame;
        // surrender button during battle
        this.surrenderButton = $.makeButton(100, 100, 180, 60);
        this.surrenderButton.label = "Surrender";
        this.endButton = $.makeButton($.w / 2, $.h * 42/100, $.w / 12, $.h / 12);
        this.endButton.label = "OK!";

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
            this.silkPanel();
            resources.generateFibre(data);
        }
        // Draw GUI Elements
        this.fibrePanel();
        this.unitButtons(data);

        // surrender button
        this.surrenderButton.draw(data);
        if (this.surrenderButton.up) {
            data.battleOver = true;
        }

        // draw entities
        data.playerAnimals.draw();
        data.computerAnimals.draw();
        //$.drawColliders();    // for debugging
    }

    fibrePanel() {
        // Todo: Add "progress bar" effect
        $.text.alignment.x = "center";
        $.text.alignment.y = "center";
        $.shape.alignment.x = "center"; // doesn't seem to be applying properly
        $.shape.alignment.y = "center";
        $.colour.fill = "white";
        $.shape.rectangle(this.unitButtonX, this.unitButtonY, 150, 140, 15);
        //$.text.size = 24;
        $.colour.fill = "black";
        $.text.print(this.unitButtonX, this.unitButtonY - 40, "Fibre", 140);
        this.fibreIcon.draw();
        $.text.print(this.unitButtonX, this.unitButtonY + 40, String(resources.fibre), 140);
    }

    silkPanel() {
        // Todo: Add "progress bar" effect
        $.text.alignment.x = "center";
        $.text.alignment.y = "center";
        $.shape.alignment.x = "center"; // doesn't seem to be applying properly
        $.shape.alignment.y = "center";
        $.colour.fill = "white";
        $.colour.stroke = "black";
        $.shape.rectangle($.w / 2, $.h / 6, 150, 140, 15);
        $.text.size = 14;
        $.colour.fill = "black";
        $.text.print($.w / 2, $.h / 6 - 40, "Collected Silk", 160);
        this.silkIcon.draw();
        $.text.print($.w / 2, $.h / 6 + 45, String(resources.silkFromBattle), 140);
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
        $.text.print($.w / 2, textHeight, "Total Silk: ", $.w / 2);
        textHeight += $.h / 20;
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
        // Confirm/Continue Button
        $.text.size = 12;
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