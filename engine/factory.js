import { $ } from "../lib/Pen.js";

export class Factory {
    constructor() {
        //this.playerSide = $.w * 0.1;  old spawn point co-ords
        //this.enemySide = $.w * 0.9;



        // note: asset -- holds image
    }
    makeAnt(x, y, speed, direction, attackSpeed, size) {   // (feed values like "speed" from data later)
        const ant = $.makeCircleCollider(x, y, size);
        ant.bounciness = 0;
        ant.fill = "green"; // "no fill" possible?
        //ant.friction = 0;
        ant.direction = direction;
        ant.range = size+1;   // ant is melee
        ant.speed = speed;
        ant.attack = 3;
        ant.maxHealth = 6;
        ant.health = ant.maxHealth;
        ant.attackSpeed = attackSpeed;
        ant.attackCooldown = ant.attackSpeed;
        return ant;
    }
    makeEagle(x, y, speed, direction, attackSpeed, size) {   // (feed values like "speed" from data later)
        const eagle = $.makeCircleCollider(x, y, size);
        eagle.bounciness = 0;
        eagle.fill = "yellow"; // "no fill" possible?
        eagle.friction = 0;
        eagle.direction = direction;
        eagle.range = 2 * (size+1); // eagle is 'ranged' -- we double their range
        eagle.speed = speed;
        eagle.attack = 2;
        eagle.maxHealth = 4;
        eagle.health = eagle.maxHealth;
        eagle.attackSpeed = attackSpeed;
        eagle.attackCooldown = eagle.attackSpeed;
        return eagle;
    }
    makeBear(x, y, speed, direction, attackSpeed, size) {   // (feed values like "speed" from data later)
        const bear = $.makeCircleCollider(x, y, size);
        bear.bounciness = 0;
        bear.fill = "red"; // "no fill" possible?
        bear.friction = 0;
        bear.direction = direction;
        bear.range = size+1;
        bear.speed = speed;
        bear.attack = 5;
        bear.maxHealth = 10;
        bear.health = bear.maxHealth;
        bear.attackSpeed = attackSpeed;
        bear.attackCooldown = bear.attackSpeed;
        return bear;
    }

    spawnHeight() {
        //  give a height to units: "somewhere in the middle 20% of the screen"
        return $.math.random($.h * (40/100), $.h * (60/100));
    }
    
    processRequests(requests, data) {
        for (const request of requests) {
            if (request.type == "factory") {
                if (request.action == "makeAnimal") {
                    // give all units a "y" and "speed" value
                    let y = this.spawnHeight();
                    let speed = 6;
                    if (request.playerSide == true) {
                        // spawn player units on the left side moving right
                        let x = 0;
                        let direction = 90;
                        if (request.value == "ant") {
                            let attackSpeed = 100;
                            let size = 10;
                            data.playerAnimals.push(this.makeAnt(x, y, speed, direction, attackSpeed, size));
                        } else if (request.value == "eagle") {
                            let attackSpeed = 120;
                            let size = 20;
                            data.playerAnimals.push(this.makeEagle(x, y, speed, direction, attackSpeed, size));
                        } else if (request.value == "bear") {
                            let attackSpeed = 200;
                            let size = 40;
                            data.playerAnimals.push(this.makeBear(x, y, speed, direction, attackSpeed, size));
                        }   
                    } else if (request.playerSide == false) {
                        // enemy units on the right moving left
                        let x = $.w;
                        let direction = 270;
                        if (request.value == "ant") {
                            let attackSpeed = 100;
                            let size = 10;
                            data.enemyAnimals.push(this.makeAnt(x, y, speed, direction, attackSpeed, size));
                        } else if (request.value == "eagle") {
                            let attackSpeed = 200;
                            let size = 20;
                            data.enemyAnimals.push(this.makeEagle(x, y, speed, direction, attackSpeed, size));
                        } else if (request.value == "bear") {
                            let attackSpeed = 200;
                            let size = 40;
                            data.enemyAnimals.push(this.makeBear(x, y, speed, direction, attackSpeed, size));
                        }
                    }
                    // we can simplify these to include: "request.playerSide" and "request.value" 
                }
            }
        }
    }
}