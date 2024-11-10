import { $ } from "../../lib/Pen.js";


export class BattleManager {
    constructor(data) {
        this.requests = [];
        // Load assets
        this.playerTreeImage = $.loadImage(
            0,
            0,
            "./engine/_battle/spritesheet/initialtrunk.png"
        );
        this.enemyTreeImage = $.loadImage(
            0,
            0,
            "./engine/_battle/spritesheet/enemyTree.png"
        );

        // "Lane Walls"
        this.topWall = $.makeBoxCollider($.w / 2, $.h / 3, $.w, 2);
        this.topWall.static = true;
        this.bottomWall = $.makeBoxCollider($.w / 2, ($.h * 2) / 3, $.w, 2);
        this.bottomWall.static = true;
        // Player Tree
        this.playerTree = $.makeBoxCollider(60, 450, 270, 270);
        this.playerTree.asset = this.playerTreeImage;
        this.playerTree.static = true;
        this.playerTree.fill = "green";
        this.playerTree.currentHealth = data.playerStats.tree.treeHealth;
        this.playerTree.maxHealth = data.playerStats.tree.treeHealth;
        this.playerTree.player = 1;
        this.playerTree.tree = 1;

        // Enemy Tree
        this.computerTree = $.makeBoxCollider(
            $.w - 20,
            ($.h * 1) / 2,
            $.w / 8,
            $.h / 8
        );
        this.computerTree.asset = this.enemyTreeImage;
        this.computerTree.asset.w = 20;
        this.computerTree.asset.h = 20;
        this.computerTree.static = true;
        this.computerTree.fill = "brown";
        this.computerTree.currentHealth = data.computerStats.tree.treeHealth;
        this.computerTree.maxHealth = data.computerStats.tree.treeHealth;
        this.computerTree.player = 0;
        this.computerTree.tree = 1;
    }

    battleUpdate(data) {
        if (
            this.playerTree.currentHealth == 0 ||
            this.computerTree.currentHealth == 0
        ) {
            data.battleOver = true;
        }
        // we say that both unit groups with their enemy and the boundaries
        data.playerAnimals.collides(data.computerAnimals);
        data.playerAnimals.collides(this.topWall);
        data.playerAnimals.collides(this.bottomWall);
        data.playerAnimals.collides(this.computerTree);
        // enemy animal colliding rules in the same way
        data.computerAnimals.collides(data.playerAnimals);
        data.computerAnimals.collides(this.topWall);
        data.computerAnimals.collides(this.bottomWall);
        data.computerAnimals.collides(this.playerTree);

        // *bug: units colliding within their own group "stop moving"
        //data.playerAnimals.collides(data.playerAnimals);
        //data.computerAnimals.collides(data.computerAnimals);

        // Handles animal movement & "pathing"
        this.seekTarget(
            data.playerAnimals,
            data.computerAnimals,
            this.computerTree,
            data
        );
        this.seekTarget(
            data.computerAnimals,
            data.playerAnimals,
            this.playerTree,
            data
        );
        // Update attackCooldown values
        this.updateCooldown(data.playerAnimals);
        this.updateCooldown(data.computerAnimals);

        this.drawHP(data.playerAnimals, "#00FF3A", "#C7FFD4");
        this.drawHP(data.computerAnimals, "#FF0000", "#FFC7C7");

        // drawing tree/bases with: which tree, health colour, empty colour, "is tree playerTree?"
        this.drawTree(this.playerTree, "#00FF3A", "#C7FFD4", true);
        this.drawTree(this.computerTree, "#FF0000", "#FFC7C7", false);
    }

    drawHP(group, healthColour, backgroundColour) {
        let barHeight = $.h * (1 / 100);
        let barWidth = $.w * (3 / 100);
        if (group.length > 0) {
            for (let i = 0; i < group.length; i++) {
                // draw HP
                $.shape.alignment.x = "left";
                $.colour.stroke = "black";
                $.colour.fill = backgroundColour;
                $.shape.rectangle(
                    group[i].x - group[i].w,
                    group[i].y - (group[i].w + barHeight),
                    barWidth,
                    barHeight
                );
                if (group[i].currentHealth > 0) {
                    $.colour.fill = healthColour;
                    $.shape.rectangle(
                        group[i].x - group[i].w,
                        group[i].y - (group[i].w + barHeight),
                        barWidth *
                            (group[i].currentHealth / group[i].maxHealth),
                        barHeight
                    );
                    // #FF0000  -- Straight Red
                    // #FFC7C7  -- Pale Red  (lost health)
                    // #00FF3A  -- Straight Green
                    // #C7FFD4  -- Pale Green (lost health)
                }
            }
        }
    }

    drawTree(whichTree, healthColour, backgroundColour, player) {
        let barHeight = $.h * (5 / 100);
        let barWidth = $.w * (15 / 100);
        let barX = $.w * (5 / 100);
        let barY = $.h * (20 / 100);
        // draw a health bar
        $.shape.alignment.x = "left";
        $.colour.stroke = "black";
        $.colour.fill = backgroundColour;
        if (player == false) {
            $.shape.alignment.x = "right";
            barX = $.w - barX;
        }
        $.shape.rectangle(barX, barY, barWidth, barHeight);
        if (whichTree.currentHealth > 0) {
            $.colour.fill = healthColour;
            $.shape.rectangle(
                barX,
                barY,
                barWidth * (whichTree.currentHealth / whichTree.maxHealth),
                barHeight
            );
        }
    }

    updateCooldown(group) {
        // unit's attacks cool-down passively
        for (let i = 0; i < group.length; i++) {
            if (group[i].attackCooldown > 0) {
                group[i].attackCooldown -= 1;
            }
        }
    }

    attack(attacker, defender,data) {
        // when attack is ready, the defender takes damage or dies accordingly
        if (attacker.attackCooldown == 0) {
            if (defender.currentHealth <= attacker.damage) {
                if (defender.player == 0) {
                    if (defender.animaltype == "ant") {
                        data.resources.silkFromBattle += data.playerStats.ant.silkFromKill;
                    } else if (defender.animaltype == "eagle") {
                        data.resources.silkFromBattle += data.playerStats.eagle.silkFromKill;
                    } else if (defender.animaltype == "bear") {
                        data.resources.silkFromBattle += data.playerStats.bear.silkFromKill;
                    } else if (defender.tree == 1) {
                        data.resources.silkFromBattle += data.playerStats.tree.silkFromTreeKill;
                        data.resources.silk += data.resources.silkFromBattle;
                    } else {
                        throw new Error("skjdfyhsdjk")
                    }
                } else if (defender.player == 1) {
                    if (defender.tree == 1) {
                        data.resources.silk += data.resources.silkFromBattle;
                    }
                } else {
                    throw new Error("playe r1 defend",defender.player)
                }
                //justin from here
                /*
                if(defender.players==0){
                    if(defender.animaltype=="ant"){
                        this.requests.push({
                            type: "resources",
                            action: "playerkilledcomputer",
                            value: "ant",
                        })
                    }else if(defender.animaltype=="eagle"){
                        this.requests.push({
                            type: "resources",
                            action: "playerkilledcomputer",
                            value: "eagle",
                        })
                    }else if(defender.animaltype=="bear"){
                        this.requests.push({
                            type: "resources",
                            action: "playerkilledcomputer",
                            value: "bear",
                        })
                    }else if(defender.tree==1){
                        this.requests.push({
                            type: "resources",
                            action: "playerkilledcomputer",
                            value: "bear",
                        })
                    }else{
                        throw new Error("contact justin error in battle manager")
                    }
                }else if(defender.players==1){
                    if(defender.tree=1){
                        this.requests.push({
                            type: "resources",
                            action: "computerkilledplayer",
                            value: "tree",
                        })
                    }
                }else{
                    throw new Error("contact justin error in battle manager")
                }*/ //Justin to here
                defender.currentHealth = 0;
                defender.remove();

                console.log(
                    "Unit died",
                    "silkFromBattle: ",
                    data.resources.silkFromBattle,
                    "added with silkFromKill: ",
                    defender.silkFromKill
                );
            } else if (defender.currentHealth > attacker.damage) {
                defender.currentHealth -= attacker.damage;
            }
            if(!defender.exists){
                // data.resources.silkFromBattle += 1;
                if (defender.animaltype == "ant") {
                    data.resources.silkFromBattle += data.playerStats.ant.silkFromKill;
                } else if (defender.animaltype == "eagle") {
                    data.resources.silkFromBattle += data.playerStats.eagle.silkFromKill;
                } else if (defender.animaltype == "bear") {
                    data.resources.silkFromBattle += data.playerStats.bear.silkFromKill;
                } else if (defender.tree == 1) {
                    data.resources.silkFromBattle += data.playerStats.tree.silkFromTreeKill;
                    data.resources.silk += data.resources.silkFromBattle;
                }
            }
            // reset the attack cooldown
            attacker.attackCooldown = attacker.attackInterval;
            console.log(
                "ant #",
                attacker.id,
                "did",
                attacker.damage,
                "damage to ant #",
                defender.id
            );
        }
    }

    seekTarget(attacker, defender, defenderBase, data) {
        for (let i = 0; i < attacker.length; i++) {
            // make the enemy base the default target
            let minDistance = $.math.distance(
                attacker[i].x,
                attacker[i].y,
                defenderBase.x,
                defenderBase.y
            );
            let target = defenderBase;
            // but if enemies exist, we check if they are closer than the opponent's base
            if (defender.length > 0) {
                for (let j = 0; j < defender.length; j++) {
                    let newMinDistance = $.math.distance(
                        attacker[i].x,
                        attacker[i].y,
                        defender[j].x,
                        defender[j].y
                    );
                    // when they are, we make them the new target
                    if (newMinDistance < minDistance) {
                        target = defender[j];
                        minDistance = newMinDistance;
                    }
                }
            }
            // move towards their closest target & attack() when they collide
            attacker[i].direction = attacker[i].getAngleToPoint(
                target.x,
                target.y
            );
            if (attacker[i].collides(target)) {
                this.attack(attacker[i], target, data);
            }
        }
    }

    attackingAnimation() {
        // sprite move back, then lunge
    }

    getHitAnimation() {
        // quick sprite flash,
        // for animals maybe "lean back" sprite
    }

    /* OLD FUNCTION(S):

    * "accelerating" for after colliding etc.
    movement(group) {
        // have each unit accelerate up to it's speed level
        for (let i = 0; i < group.length; i++) {
            let acceleration = group[i].speed / 100;
            if ((group[i].speed + acceleration) > group[i].speed) {
                group[i].speed = 5;
            } else if (group[i].speed < 5) {
                group[i].speed += acceleration;
            }
            console.log("ant #", group[i].id, "speed: ", group[i].speed, "& direction: ", group[i].direction);
        }
    }

    * example of resource ticket push on unit death
    enemyDies() {
    Generate
        if (defender "was in" computerAnimals()): ++ silk
                    if "this.enemydata.#" == "bear" 
                        this.requests.push({
                            type: "animal",
                            acton: "died", 
                            value: "eagle",
                            playerSide: true
                        })
    }

    */
    getRequests() {
        const requestsToBeReturned = this.requests;
        this.requests = [];
        return requestsToBeReturned;
    }
}
