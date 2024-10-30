import { $ } from "../lib/Pen.js";
import { Factory } from "./factory.js";
import { mainmenu } from "./_mainmenu/menumain.js"
import { BattleGui } from "./_battle/battleGui.js";

export class Gui {
    constructor() {
        // p.s. can have "global UI" here
        this.mainMenu = new mainmenu();
        this.battleGui = new BattleGui();
        this.requests = [];   // we use array, because "group() leak"
    }

    update(data) {
        console.log()
        if (data.gameState == "loading") {
            // draw loading
        } else if (data.gameState == "mainmenu") {
            this.mainMenu.draw(data);
            // draw main_menu
        } else if (data.gameState == "buildtree") {
            // draw buildtree
            this.redButton.draw();
        } else if (data.gameState == "battle") {
            this.battleGui.drawBattle(data);
        } else {
            console.log("incorrect gamestate set")
            data.gameState = "loading"; // reset to "loading"
        }
    }

    getRequests(data) {
        if (data.gameState == "loading") {
            // return this.requests = this.loadingGui.getRequests();
        } else if (data.gameState == "mainmenu") {
            return this.requests = this.mainMenu.getRequests()
        } else if (data.gameState == "buildtree") {
            // return this.requests = this.buildTreeGui.getRequests();
        } else if (data.gameState == "battle") {
            return this.requests = this.battleGui.getRequests();
        }
        this.requests = [];
    }
}