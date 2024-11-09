import { $ } from "../lib/Pen.js";
import { Factory } from "./factory.js";
import { MainMenu } from "./_mainmenu/mainmenu.js";
import { BattleGui } from "./_battle/battleGui.js";
import { BattleManager } from "./_battle/battleManager.js";
import { BuildTreeScene as treemenu } from "./_buildtree/treemenu_changed.js";

export class Gui {
    constructor(data) {
        // p.s. can have "global UI" here
        this.mainMenu = new MainMenu()
        this.battleGui = new BattleGui(data);
        this.battleManager = new BattleManager(data);
        this.treeMenu_op = new treemenu();
    }

    update(data, resources) {
        if (data.gameState == "loading") {
            // draw loading
        } else if (data.gameState == "mainmenu") {
            this.mainMenu.draw();
            this.mainMenu.update(data)
        } else if (data.gameState == "treemenu") {
            this.treeMenu_op.draw()
            this.treeMenu_op.update(data)
        } else if (data.gameState == "treemenu_op") { //to be removed when hollys and justin's treemenus are merged
            this.treeMenu_op.draw()
            this.treeMenu_op.audio.play()
            this.battleGui.audio.pause()         //  ⮟
            this.treeMenu_op.update(data, resources)              //_______
        } else if (data.gameState == "battle") {
            this.battleGui.drawBattle(data);
            this.battleManager.battleUpdate(data);
            this.treeMenu_op.drawBattleTree()
            this.treeMenu_op.audio.pause()
            this.battleGui.audio.play()
        } else if (data.gameState == "credits") {
            this.battleGui.drawBattle(data);
        } else if (data.gameState == "    ") {
            //empty gamestate add what is needed
        } else {
            throw new Error("Incorrect gamestate set")
        }
    }

    getRequests(data) {
        if (data.gameState == "loading") {
            // return this.requests = this.loading.getRequests();
        } else if (data.gameState == "mainmenu") {
            return this.requests = this.mainMenu.getRequests()
        } else if (data.gameState == "treemenu") {
            return this.requests = this.treeMenu.getRequests();
        } else if (data.gameState == "battle") {
            return this.requests = this.battleGui.getRequests();
        } else if (data.gameState == "credits") {
            return this.requests = this.mainMenu.getRequests()
        } else if (data.gameState == "battle") {
            return this.requests = this.battleGui.getRequests();
        } else if (data.gameState == "treemenu_op") { //to be removed when hollys and justin's treemenus are merged
            return this.requests = this.treeMenu_op.getRequests();              //_______
        } else {
            throw new Error("incorrect gamestate set")
        }
    }
}
