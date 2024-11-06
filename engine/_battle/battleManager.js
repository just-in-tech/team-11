import { $ } from "../../lib/Pen.js";

export class BattleManager {
    constructor(data) {
        // "Lane Walls"
        this.topWall = $.makeBoxCollider($.w/2, $.h/3, $.w, 2);
        this.topWall.static = true;
        this.bottomWall = $.makeBoxCollider($.w/2, ($.h * 2/3), $.w, 2);
        this.bottomWall.static = true;
        // Player Tree
        this.playerTree = $.makeBoxCollider(0, $.h/2, $.w/8, $.h/2);
        this.playerTree.static = true;
        this.playerTree.fill = "green";
        this.playerTree.currentHealth = data.playerStats.treeHealth;
        this.playerTree.maxHealth = data.playerStats.treeHealth;

        // Enemy Tree
        this.computerTree = $.makeBoxCollider($.w, $.h/2, $.w/8, $.h/2);
        this.computerTree.static = true;
        this.computerTree.fill = "brown";
        this.computerTree.currentHealth = data.computerStats.treeHealth;
        this.computerTree.maxHealth = data.computerStats.treeHealth;
    }

    battleUpdate(data) {
        // establish collider rules exist
        this.bottomWall.static = $.collide
        data.playerAnimals.collides(data.playerAnimals);

        data.playerAnimals.collides(data.computerAnimals);
        data.playerAnimals.collides(this.topWall);
        data.playerAnimals.collides(this.bottomWall);
        data.playerAnimals.collides(this.computerTree);
        // enemy animal colliding rules
        data.computerAnimals.collides(data.playerAnimals);
        data.computerAnimals.collides(data.computerAnimals);
        data.computerAnimals.collides(this.topWall);
        data.computerAnimals.collides(this.bottomWall);
        data.computerAnimals.collides(this.playerTree);
        // Animals Seek A Target
        this.seekTarget(data, data.playerAnimals, data.computerAnimals, this.computerTree);  
        this.seekTarget(data, data.computerAnimals, data.playerAnimals, this.playerTree);

        this.drawHP(data.playerAnimals, "#00FF3A", "#C7FFD4");
        this.drawHP(data.computerAnimals, "#FF0000", "#FFC7C7");

        this.drawTree(this.playerTree, "#00FF3A", "#C7FFD4");
    }

    drawHP(group, healthColour, backgroundColour) {
        let barHeight = $.h * (1/100);
        let barWidth = $.w * (3/100);
        if (group.length > 0) {
            for (let i = 0; i < group.length; i++) {
                // draw HP
                $.shape.alignment.x = "left";
                $.colour.stroke = "black";
                $.colour.fill = backgroundColour;
                $.shape.rectangle(group[i].x - (group[i].w), group[i].y - (group[i].w + barHeight), barWidth, barHeight);
                if (group[i].currentHealth > 0) {
                    $.colour.fill = healthColour;
                    $.shape.rectangle(group[i].x - (group[i].w), group[i].y - (group[i].w + barHeight), barWidth * (group[i].currentHealth / group[i].maxHealth), barHeight);
                // #FF0000  -- Straight Red
                // #FFC7C7  -- Pale Red  (lost health)
                // #00FF3A  -- Straight Green
                // #C7FFD4  -- Pale Green (lost health) 
                }
            }
        }
    }

    drawTree(whichTree, healthColour, backgroundColour) {
        let barHeight = $.h * (10/100);
        let barWidth = $.w * (30/100);
        let barX = $.w * (5/100);
        let barY = $.h * (20/100);
        // draw a health bar
        $.shape.alignment.x = "left";
        $.colour.stroke = "black";
        $.colour.fill = backgroundColour;
        $.shape.rectangle(barX, barY, barWidth, barHeight);
        if (whichTree.currentHealth > 0) {
            $.colour.fill = healthColour;
            $.shape.rectangle(barX, barY, barWidth * (whichTree.currentHealth / whichTree.maxHealth), barHeight);
        }
    }

    accelerate(group) {
        if ((group.speed + group.acceleration) > 5) {
            group.speed = 5;
        } else if (group.speed < 5) {
            group.speed += group.acceleration/100;
        }
    }

    seekTarget(data, attacker, defender, defenderBase) {
        // Player Animals Seeking Target
        
        for (let i = 0; i < attacker.length; i++) {   // for every player animal (i)
            // have target "computerTree" by default & set it as the "closest target"
            let minDistance = $.math.distance(attacker[i].x, attacker[i].y, defenderBase.x, defenderBase.y);
            let target = defenderBase;
            this.accelerate(attacker[i]);
            if (defender.length > 0) {
                for (let j = 0; j < defender.length; j++) {
                    // check distance & if they are closer then set a new minimum
                    let newMinDistance = $.math.distance(attacker[i].x, attacker[i].y, defender[j].x, defender[j].y);
                    if (newMinDistance < minDistance) {
                        target = defender[j];
                        minDistance = newMinDistance;
                    }
                    // use closest target as the direction
                    attacker[i].direction = attacker[i].getAngleToPoint(target.x, target.y);
                    // console.log(minDistance, attacker[i].range);
                    if (attacker[i].collides(target)) {
                        this.attack(attacker[i], target);
                    } else {
                        this.accelerate(attacker[i]); // otherwise, return speed to "5"   -- maybe we do acceleration instead
                    }
                }
            }
            if (attacker[i].overlaps(attacker)) {
                //attacker[i].direction += attacker.direction;
            }
        }
    }

    attack(attacker, defender) {
        // if defender == Tree ??    -- we will first try 'static' for Tree as well..

        // when attack is ready, the defender takes damage or dies accordingly
        if (attacker.attackCooldown == 0) {
            if (defender.currentHealth <= attacker.damage) {
                defender.remove();
                // *TODO* PUSH REQUEST: UNIT KILL
            } else if (defender.currentHealth > attacker.damage) {
                defender.currentHealth -= attacker.damage;
            }
            // reset the attack cooldown
            attacker.attackCooldown = attacker.attackInterval;
        } else if (attacker.attackCooldown > 0) {
            attacker.attackCooldown -= 1;
        }
    }

    attackingAnimation() {
        // sprite move back, then lunge
    }

    getHitAnimation() {
        // quick sprite flash,
        // for animals maybe "lean back" sprite
    }

    // enemyDies() {
    // Generate
        // if (defender "was in" computerAnimals()): ++ silk
                    // if "this.enemydata.#" == "bear" 
                        // this.requests.push({
                        //     type: "animal",
                        //     acton: "died", 
                        //     value: "eagle",
                        //     playerSide: true
                        // })
    //}
}