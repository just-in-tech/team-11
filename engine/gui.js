import { $ } from "../lib/Pen.js";
import { Factory } from "./factory.js";
import { mainmenu} from "./_mainmenu/menumain.js"

export class Gui {
    constructor() {
        this.blueButton = $.makeButton(200, 200, 100, 20);
        this.blueButton.label = "blue";
        this.redButton = $.makeButton(200, 250, 100, 20);
        this.redButton.label = "red"
        this.requests = [];   // we use array, because "group() leak"
        this.mainMenu = new mainmenu()
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
            // draw battle
        } else {
            console.log("incorrect gamestate set")
        }
        /*
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
                type: "gui",
                action: "add",
                value: 2
            })
        }*/
        
    }

    getRequests(data) {
        const requestsToBeReturned = this.requests;
        if (data.gameState == "loading") {
            // requests loading
        } else if (data.gameState == "mainmenu") {
            // requests main_menu
            this.mainMenu.getRequests()

        } else if (data.gameState == "buildtree") {
            // requests buildtree
        } else if (data.gameState == "battle") {
            // requests battle
        }
        this.requests = [];
        return requestsToBeReturned;
    }

    
}