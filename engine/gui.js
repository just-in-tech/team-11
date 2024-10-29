import { $ } from "../lib/Pen.js";
import { UnitButton } from "./_battle/battle.js";
import { GameState } from "./data.js";
import { PlayerAnimal } from "./animals/animalFactory.js";
import { playerAnimals } from "./data.js"; 

// BATTLE UI
let ant = new UnitButton(300, 600, "Ant");

export function drawScreen() {
    // draw any non-functional aesthetics (background, panels, etc.)
}

export function drawGUI() {
    // Check current GAMESTATE in "data.js" & display needed GUI
    if (GameState.CURRENT == GameState.LOADING) {
        // draw LOADING
    } else if (GameState.CURRENT == GameState.MAIN_MENU) {
        // draw MAIN MENU
    } else if (GameState.CURRENT == GameState.BUILDTREE) {
        // draw BUILDTREE
    } else if (GameState.CURRENT == GameState.BATTLE) {
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