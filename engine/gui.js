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
        if (data.resources.dollaridoos > 3) {
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

/* old:  BATTLE UI
let ant = new UnitButton(300, 600, "Ant");

export function drawGUI() {
    // Check current GAMESTATE in "data.js" & display needed GUI
    if (GameState.CURRENT == GameState.LOADING) {
        // draw LOADING
    } else if (GameState.CURRENT == GameState.MAIN_MENU) {
        draw_menuscreen();
    } else if (GameState.CURRENT == GameState.BUILDTREE) {
        // draw BUILDTREE
    } else if (GameState.CURRENT == GameState.BATTLE) {
        // "draw battle screen"
        ant.button.draw();
        if (ant.button.down) {
            GameState.CURRENT = GameState.MAIN_MENU;
            //let littleGuy = new PlayerAnimal(ant);
            //console.log("new ant!");
        }
    } else {    // if for any reason GAMESTATE isn't 
        GameState.CURRENT = GameState.LOADING;
    }
}
    */