import { $ } from "../lib/Pen.js";

export class Factory {
    constructor() {
        //this.playerSide = $.w * 0.1;  old spawn point co-ords
        //this.enemySide = $.w * 0.9;
        // note: asset -- holds image
        this.antSprite = $.loadImage(10, 10, "./engine/animals/ant/ant1.png");
        this.enemyAntSprite = $.loadImage(10, 10, "./engine/animals/ant/enemyAnt1.png");
    }
    makeAnt(x, y, direction, size, damage, maxHealth, speed, acceleration, attackInterval,playerSide) {   // (feed values like "speed" from data later)
        const ant = $.makeCircleCollider(x, y, size);
        if (direction == 270) {
            ant.asset = this.enemyAntSprite;
        } else if (direction == 90) {
            ant.asset = this.antSprite;
        }
        ant.asset.w = 30;
        ant.asset.h = 30;
        ant.bounciness = 0;
        ant.fill = "green"; // "no fill" possible?
        //ant.friction = 0;
        ant.direction = direction;
        ant.speed = speed;
        ant.acceleration = acceleration;
        ant.damage = damage;
        ant.maxHealth = maxHealth;
        ant.currentHealth = ant.maxHealth;
        ant.attackInterval = attackInterval;
        ant.attackCooldown = ant.attackInterval;
        ant.animaltype = "ant"
        ant.players=playerSide
        return ant;
    }
    makeEagle(x, y, direction, size, damage, maxHealth, speed, acceleration, attackInterval,playerSide) {   // (feed values like "speed" from data later)
        const eagle = $.makeCircleCollider(x, y, size);
        eagle.bounciness = 0;
        eagle.fill = "green"; // "no fill" possible?
        // eagle.friction = 0;
        eagle.direction = direction;
        eagle.speed = speed;
        eagle.acceleration = acceleration;
        eagle.damage = damage;
        eagle.maxHealth = maxHealth;
        eagle.currentHealth = eagle.maxHealth;
        eagle.attackInterval = attackInterval;
        eagle.attackCooldown = eagle.attackInterval;
        eagle.animaltype = "eagle"
        eagle.players=playerSide
        return eagle;
    }
    makeBear(x, y, direction, size, damage, maxHealth, speed, acceleration, attackInterval,playerSide) {   // (feed values like "speed" from data later)
        const bear = $.makeCircleCollider(x, y, size);
        bear.bounciness = 0;
        bear.fill = "green"; // "no fill" possible?
        //bear.friction = 0;
        bear.direction = direction;
        bear.speed = speed;
        bear.acceleration = acceleration;
        bear.damage = damage;
        bear.maxHealth = maxHealth;
        bear.currentHealth = bear.maxHealth;
        bear.attackInterval = attackInterval;
        bear.attackCooldown = bear.attackInterval;
        bear.animaltype = "bear"
        bear.players=playerSide
        return bear;
    }

    spawnHeight() {
        //  give a height to units: "somewhere in the middle 20% of the screen"
        let laneTop = 65/120;
        let laneBottom = 97/120;
        return $.math.random($.h * laneTop, $.h * laneBottom);
    }
    
    processRequests(requests, data,resources) {
        for (const request of requests) {
            if (request.type == "factory") {
                if (request.action == "makeAnimal") {
                    for (let i = 0; i < request.amount; i++) {
                        // give all units a "y" and "speed" value
                        let y = this.spawnHeight();
                        let speed = 6;
                        if (request.playerSide == true) {
                            // spawn player units on the left side moving right
                            let x = 0;
                            let direction = 90;
                            if (request.value == "ant") {   // ANT GOOD
                                let size = 10;
                                data.playerAnimals.push(this.makeAnt(x, y, direction, size,
                                    data.playerStats.ant.damage,
                                    data.playerStats.ant.maxHealth,
                                    data.playerStats.ant.speed, 
                                    data.playerStats.ant.acceleration,
                                    data.playerStats.ant.attackInterval,
                                    request.playerSide));
                            } else if (request.value == "eagle") {
                                let size = 20;
                                data.playerAnimals.push(this.makeEagle(x, y, direction, size,
                                    data.playerStats.eagle.damage,
                                    data.playerStats.eagle.maxHealth,
                                    data.playerStats.eagle.speed, 
                                    data.playerStats.eagle.acceleration,
                                    data.playerStats.eagle.attackInterval,
                                    request.playerSide));
                            } else if (request.value == "bear") {
                                let size = 40;
                                data.playerAnimals.push(this.makeBear(x, y, direction, size,
                                    data.playerStats.bear.damage,
                                    data.playerStats.bear.maxHealth,
                                    data.playerStats.bear.speed, 
                                    data.playerStats.bear.acceleration,
                                    data.playerStats.bear.attackInterval,
                                    request.playerSide));
                            }   
                        } else if (request.playerSide == false) {
                            // enemy units on the right moving left
                            let x = $.w;
                            let direction = 270;
                            if (request.value == "ant") {   // ANT GOOD
                                let size = 10;
                                data.computerAnimals.push(this.makeAnt(x, y, direction, size,
                                    data.computerStats.ant.damage,
                                    data.computerStats.ant.maxHealth,
                                    data.computerStats.ant.speed, 
                                    data.computerStats.ant.acceleration,
                                    data.computerStats.ant.attackInterval,
                                    request.playerSide));
                            } else if (request.value == "eagle") {
                                let attackSpeed = 200;
                                let size = 20;
                                data.enemyAnimals.push(this.makeEagle(x, y, data.computerStats.eagle.speed, direction, attackSpeed, size,
                                    request.playerSide));
                            } else if (request.value == "bear") {
                                let attackSpeed = 200;
                                let size = 40;
                                data.enemyAnimals.push(this.makeBear(x, y, data.computerStats.bear.speed, direction, attackSpeed, size,
                                    request.playerSide));
                            }
                        }
                    // we can simplify these to include: "request.playerSide" and "request.value" 
                    }
                    
                }
            }
                // to unlock animal on the treemenu
                console.log("type ",request.type)
                if (request.type == "upgrade branch"){
                    if (request.action == "unlockAnimalBranch"){
                        if (request.value == "eagle") {
                            data.playerStats.eagle.unlocked=1
                            
                        } else if (request.value == "bear") {
                            data.playerStats.bear.unlocked=1
                            
                        }else{
                            throw new Error("request value dosen't exist")
                        }
                    }else if (request.action == "damageBranch") {
                        if (request.value == "level2") {
                            data.playerStats.ant.damage=data.statsUpgrades.damageBranch[request.value].ant.damage
                            data.playerStats.eagle.damage=data.statsUpgrades.damageBranch[request.value].eagle.damage
                            data.playerStats.bear.damage=data.statsUpgrades.damageBranch[request.value].bear.damage
                            //data.playerStats.ant.fibreCost+= 5
                            //data.playerStats.eagle.fibreCost+= 15
                            //data.playerStats.bear.fibreCost+= 30
                        } else if (request.value == "level3") {
                            data.playerStats.ant.damage=data.statsUpgrades.damageBranch[request.value].bear.damage
                            data.playerStats.eagle.damage=data.statsUpgrades.damageBranch[request.value].bear.damage
                            data.playerStats.bear.damage= data.statsUpgrades.damageBranch[request.value].bear.damage
                            //data.playerStats.ant.fibreCost+=10
                            //data.playerStats.ant.fibreCost+=10
                            //data.playerStats.ant.fibreCost+=10
                            
                        }else{
                            throw new Error("request value dosen't exist")
                        }
                    }else if (request.action == "speedBranch") {
                        if (request.value == "level2") {
                            data.playerStats.ant.speed=data.statsUpgrades.speedBranch[request.value].bear.speed
                            data.playerStats.eagle.speed=data.statsUpgrades.speedBranch[request.value].bear.speed
                            data.playerStats.bear.speed=data.statsUpgrades.speedBranch[request.value].bear.speed
                            //data.playerStats.ant.fibreCost+=10
                            //data.playerStats.ant.fibreCost+=10
                            //data.playerStats.ant.fibreCost+=10
                        } else if (request.value == "level3") {
                            data.playerStats.ant.speed=2
                            data.playerStats.eagle.speed=15
                            data.playerStats.bear.speed=4
                            //data.playerStats.ant.fibreCost+=10
                            //data.playerStats.ant.fibreCost+=10
                            //data.playerStats.ant.fibreCost+=10
                        }else{
                            throw new Error("request value dosen't exist")
                        }
                    }else if (request.action == "silkBranch") {
                        if (request.value == "level2") {
                            data.playerStats.ant.silkFromKill=data.statsUpgrades.silkBranch[request.value].ant.silkFromKill
                            data.playerStats.eagle.silkFromKill=data.statsUpgrades.silkBranch[request.value].eagle.silkFromKill
                            data.playerStats.bear.silkFromKill=data.statsUpgrades.silkBranch[request.value].bear.silkFromKill
                        } else if (request.value == "level3") {
                            data.playerStats.ant.silkFromKill=data.statsUpgrades.silkBranch[request.value].ant.silkFromKill
                            data.playerStats.eagle.silkFromKill=data.statsUpgrades.silkBranch[request.value].eagle.silkFromKill
                            data.playerStats.bear.silkFromKill=data.statsUpgrades.silkBranch[request.value].bear.silkFromKill
                        }else{
                            throw new Error("request value dosen't exist")
                        }
                    }else if (request.action == "fibreBranch") {
                            if (request.value == "level2") {
                                resources.fibre.fibrePerInterval=data.statsUpgrades.fibreBranch[request.value].fibrePerinterval
                                resources.fibre.fibreInterval=data.statsUpgrades.fibreBranch[request.value].fibreInterval
                            } else if (request.value == "level3") {
                                resources.fibre.fibrePerInterval=data.statsUpgrades.fibreBranch[request.value].fibrePerinterval
                                resources.fibre.fibreInterval=data.statsUpgrades.fibreBranch[request.value].fibreInterval
                            }else{
                                throw new Error("request value dosen't exist")
                            }
                    }else if (request.action == "damageBranch") {
                        if (request.value == "level2") {
                            data.playerStats.ant.damage=data.statsUpgrades.damageBranch[request.value].ant.damage
                            data.playerStats.eagle.damage=data.statsUpgrades.damageBranch[request.value].eagle.damage
                            data.playerStats.bear.damage=data.statsUpgrades.damageBranch[request.value].bear.damage

                            //data.playerStats.ant.fibreCost+=10
                            //data.playerStats.ant.fibreCost+=10
                            //data.playerStats.ant.fibreCost+=10
                            
                        } else if (request.value == "level3") {
                            data.playerStats.ant.damage=data.statsUpgrades.damageBranch[request.value].ant.damage
                            data.playerStats.eagle.damage=data.statsUpgrades.damageBranch[request.value].eagle.damage
                            data.playerStats.bear.damage=data.statsUpgrades.damageBranch[request.value].bear.damage

                            //data.playerStats.ant.fibreCost+=10
                            //data.playerStats.ant.fibreCost+=10
                            //data.playerStats.ant.fibreCost+=10
                            
                        }else{
                            throw new Error("request value dosen't exist")
                        }
                    }else if (request.action == "healthBranch") {
                        if (request.value == "level2") {
                            data.playerStats.ant.maxHealth=data.statsUpgrades.healthBranch[request.value].ant.maxHealth
                            data.playerStats.eagle.maxHealth=data.statsUpgrades.healthBranch[request.value].eagle.maxHealth
                            data.playerStats.bear.maxHealth=data.statsUpgrades.healthBranch[request.value].bear.maxHealth

                            //data.playerStats.ant.fibreCost+=10
                            //data.playerStats.ant.fibreCost+=10
                            //data.playerStats.ant.fibreCost+=10
                            
                        } else if (request.value == "level3") {
                            data.playerStats.ant.maxHealth=data.statsUpgrades.healthBranch[request.value].ant.maxHealth
                            data.playerStats.eagle.maxHealth=data.statsUpgrades.healthBranch[request.value].eagle.maxHealth
                            data.playerStats.bear.maxHealth=data.statsUpgrades.healthBranch[request.value].bear.maxHealth
                            //data.playerStats.ant.fibreCost+=10
                            //data.playerStats.ant.fibreCost+=10
                            //data.playerStats.ant.fibreCost+=10
                            
                        }else{
                            throw new Error("request value dosen't exist")
                        }
                    }else{
                        throw new Error("request action dosen't exist "+request.action)
                    }
            }
            
        }
    }
}