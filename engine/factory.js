import { $ } from "../lib/Pen.js";
import { Resources } from "./resources.js";

export class Factory {
    constructor() {
        this.playerSide = $.w * 0.1;
        this.enemySide = $.w * 0.9;
    }
    makeAnt(x, y, speed) {   // (feed values like "speed" from data later)
        const ant = $.makeCircleCollider(x, y, 20);
        ant.fill = "green"; // "no fill" possible?
        ant.friction = 0;
        ant.direction = 90;
        ant.range = 0;
        ant.speed = speed;
        return ant;
    }
    makeEagle(x, y, speed) {   // (feed values like "speed" from data later)
        const eagle = $.makeCircleCollider(x, y, 20);
        eagle.fill = "yellow"; // "no fill" possible?
        eagle.friction = 0;
        eagle.direction = 90;
        eagle.range = 20;
        eagle.speed = speed;
        return eagle;
    }
    makeBear(x, y, speed) {   // (feed values like "speed" from data later)
        const bear = $.makeCircleCollider(x, y, 40);
        bear.fill = "red"; // "no fill" possible?
        bear.friction = 0;
        bear.direction = 90;
        bear.speed = speed;
        return bear;
    }

    spawnHeight() {
        return $.math.random($.h/3, 2*$.h/3);
    }
    
    processRequests(requests, data) {
        for (const request of requests) {
            if (request.type == "factory") {
                if (request.action == "makeAnimal") {
                    let y = this.spawnHeight();
                    let x = 0;
                    if (request.playerSide == true) {
                        x = this.playerSide;
                        if (request.value == "ant") {
                            data.playerAnimals.push(this.makeAnt(x, y, 2));
                        } else if (request.value == "eagle") {
                            data.playerAnimals.push(this.makeEagle(x, y, 2));
                        } else if (request.value == "bear") {
                            data.playerAnimals.push(this.makeBear(x, y, 2));
                        }   
                    } else if (request.playerSide == false) {
                        x = this.enemySide;
                        if (request.value == "ant") {
                            data.enemyAnimals.push(this.makeAnt(x, y, -2));
                        } else if (request.value == "eagle") {
                            data.enemyAnimals.push(this.makeEagle(x, y, -2));
                        } else if (request.value == "bear") {
                            data.enemyAnimals.push(this.makeBear(x, y, -2));
                        }
                    }
                }
                // to unlock animal on the treemenu
                if (request.action == "upgrade branch"){
                if (request.action == "unlockAnimalBranch"){
                    if (request.value == "eagle") {
                        data.player.eagle.unlocked=1
                        
                    } else if (request.value == "bear") {
                        data.player.bear.unlocked=1
                        
                    }
                }
                // will be one per branch
                if (request.action == "damageBranch") {
                    if (request.value == "level 1") {
                        data.playerStats.ant.damage=5
                        data.playerStats.eagle.damage=5
                        data.playerStats.bear.damage= 15
                        data.playerStats.ant.fibreCost+= 5
                        data.playerStats.eagle.fibreCost+= 15
                        data.playerStats.bear.fibreCost+= 30
                    } else if (request.value == "level 2") {
                        data.playerStats.ant.damage=8
                        data.playerStats.eagle.damage=12
                        data.playerStats.bear.damage= 25
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        
                    } else if (request.value == "level 3") {
                        data.playerStats.ant.damage=8
                        data.playerStats.eagle.damage=12
                        data.playerStats.bear.damage= 25
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                    }
                }
                if (request.action == "speedBranch") {
                    if (request.value == "level 1") {
                        data.playerStats.ant.speed=2
                        data.playerStats.eagle.speed=15
                        data.playerStats.bear.speed=4
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                    } else if (request.value == "level 2") {
                        data.playerStats.ant.speed=2
                        data.playerStats.eagle.speed=15
                        data.playerStats.bear.speed=4
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                    } else if (request.value == "level 3") {
                        data.playerStats.ant.speed=2
                        data.playerStats.eagle.speed=15
                        data.playerStats.bear.speed=4
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                    }
                }
                if (request.action == "silkBranch") {
                    if (request.value == "level 1") {
                        data.playerStats.ant.
                        data.playerStats.eagle.
                        data.playerStats.bear.
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=
                    } else if (request.value == "level 2") {
                        
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                    } else if (request.value == "level 3") {
                        
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                    }
                }
                if (request.action == "damageBranch") {
                    if (request.value == "level 1") {

                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        
                    } else if (request.value == "level 2") {

                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        
                    } else if (request.value == "level 3") {
                        
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                    }
                }
                if (request.action == "healthBranch") {
                    if (request.value == "level 1") {

                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        
                    } else if (request.value == "level 2") {

                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        
                    } else if (request.value == "level 3") {

                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        data.playerStats.ant.fibreCost+=10
                        
                    }
                }
            }
            }
        }
    }
}