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
        this.playerTree.health = 300;
        // Enemy Tree
        this.enemyTree = $.makeBoxCollider($.w, $.h/2, $.w/8, $.h/2);
        this.enemyTree.static = true;
        this.enemyTree.fill = "brown";
        this.enemyTree.health = 300;
    }

    battleUpdate(data) {
        // establish collider rules exist
        this.bottomWall.static = $.collide
        data.playerAnimals.collides(data.playerAnimals);
        data.playerAnimals.collides(data.enemyAnimals);
        data.playerAnimals.collides(this.topWall);
        data.playerAnimals.collides(this.bottomWall);
        data.playerAnimals.collides(this.enemyTree);
        // enemy animal colliding rules
        data.enemyAnimals.collides(data.playerAnimals);
        data.enemyAnimals.collides(data.enemyAnimals);
        data.enemyAnimals.collides(this.topWall);
        data.enemyAnimals.collides(this.bottomWall);
        data.enemyAnimals.collides(this.playerTree);
        // Animals Seek A Target
        this.seekTarget(data, data.playerAnimals, data.enemyAnimals, this.enemyTree);  
        this.seekTarget(data, data.enemyAnimals, data.playerAnimals, this.playerTree);
        // this.engage(data.enemyAnimals);

        this.drawHP(data.playerAnimals, "#00FF3A", "#C7FFD4");
        this.drawHP(data.enemyAnimals, "#FF0000", "#FFC7C7");
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
                if (group[i].health > 0) {
                    $.colour.fill = healthColour;
                    $.shape.rectangle(group[i].x - (group[i].w), group[i].y - (group[i].w + barHeight), barWidth * (group[i].health / group[i].maxHealth), barHeight);
                // #FF0000 -- Straight Red
                // #FFC7C7  -- Pale Red  (lost health)
                // #00FF3A  -- Straight Green
                // #C7FFD4  -- Pale Green (lost health) 
                }
            }
        }
    }

    accelerate(group) {
        if (group.speed > 5) {
            group.speed = 5;
        } else if (group.speed < 5) {
            group.speed += 5/100;
        }
    }

    seekTarget(data, attacker, defender, defenderBase) {
        // Player Animals Seeking Target
        for (let i = 0; i < attacker.length; i++) {   // for every player animal (i)
            // have target "enemyTree" by default & set it as the "closest target"
            let minDistance = $.math.distance(attacker[i].x, attacker[i].y, defenderBase.x, defenderBase.y);
            let target = defenderBase;
            // let treeHitWidth = (defenderBase.w + attacker[i].w)/2;  // "can player hit tree?"
            this.accelerate(attacker[i]);
            // console.log(attacker[i].speed);
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
                        attacker[i].speed = 0;
                    } else {
                        this.accelerate(attacker[i]); // otherwise, return speed to "5"   -- maybe we do acceleration instead
                    }
                }   
            }
        }
    }

    attack(attacker, defender) {
        // if defender == Tree ??    -- we will first try 'static' for Tree as well..
        if (attacker.attackCooldown == 0) {
            let damageDealt = attacker.attack;
            // if the defender will die: assign a short lifespan & "knock back" with "attacker size"
            if (defender.health <= damageDealt) {
                defender.lifespan = 20;
                // this.enemyDies(+silk);
            } else if (defender.health > damageDealt) {
                defender.health -= damageDealt;
                console.log(defender, " took a hit!");
            }
            defender.speed -= 200;   // "knockback"
            console.log(defender, " was knocked back");
            attacker.attackCooldown = attacker.attackSpeed;
        } else if (attacker.attackCooldown > 0) {
            attacker.attackCooldown -= 1;
            // console.log(attacker.attackCooldown);
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
        // if (defender "was in" enemyAnimals()): ++ silk
                    // if "this.enemydata.#" == "bear" 
                        // this.requests.push({
                        //     type: "animal",
                        //     acton: "died", 
                        //     value: "eagle",
                        //     playerSide: true
                        // })
    //}
}