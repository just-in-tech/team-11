import { $ } from "../lib/Pen.js";
import { Resources } from "./resources.js";

export class Data {
    constructor() {
        this.resources = new Resources();
        this.gameState = "mainmenu"; // gameState = "loading" | "mainmenu" | "treemenu" | "battle"
        
        this.playerAnimals = $.makeGroup();
        this.enemyAnimals = $.makeGroup();

        this.player={
            ant:{
                unlocked:1,   //bool true (1) is unlocked
                damage: 3 , //damage to other animal
                maxHealth: 10 , 
                speed:  3, //speed the animal moves
                attackintivel: 10, //how offen the animal attacks (in frames)
                priceInGame: 10, //price to put on the track
                
            },
            eagle:{
                unlocked: 0 ,   //bool true (1) is unlocked
                unlockPrice: 200 ,
                damage: 3 , //damage to other animal
                maxHealth: 100 , 
                speed:  3, //
                priceInGame: 40, //
            },
            bear:{
                unlocked:0,   //bool true (1) is unlocked
                unlockPrice: 500,
                damage: 3 , //damage to other animal
                maxHealth: 5 , 
                speed:  3, //
                priceInGame: 100,
            },
            
            



        }




        // Branch Levels
        // damage, 
        // speed, 
        // health, 
        // troop unlock, 
        // silk gen, 
        // fibre gen
    }
/*
    if

*/



    update(requests) {
        for (const request of requests) {
            if (request.type == "resource") {
                this.resources.processRequest(request);
            }
        }
        // update resources
        this.resources.update();
    }
}