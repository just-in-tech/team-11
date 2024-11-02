import { $ } from "../../lib/Pen.js";

export class BattleManager {
    constructor() {
        // "Lane Walls"
        this.topWall = $.makeBoxCollider($.w/2, $.h/3, $.w, 10);
        this.bottomWall = $.makeBoxCollider($.w/2, ($.h * 2/3), $.w, 10);
    }

    battleUpdate(data) {
        this.engage(data);
        // this.engage(data.enemyAnimals);
    }

    engage(data) {
        for (let i = 0; i < data.playerAnimals.length; i++) {
            for (let j = 0; j < data.enemyAnimals.length; j++) {
                let proximity = (data.enemyAnimals[j].x - data.playerAnimals[i].x); // doesnt account for Y
                // rewrite for "finding closest enemy" -- like finding min proximity per player


                // for each playerAnimal[i];
                    // find closest enemyAnimal (if no enemyAnimal, target tree);
                    // i.e. target ~= "minimum distance"
                // if "target" <= playerAnimal.range:\
                    // attack(attacker, defender)



                // console.log(proximity);
                data.playerAnimals[i].collides(data.playerAnimals[i], data.enemyAnimals[j], this.topWall, this.bottomWall);
                data.playerAnimals[i].collides(data.enemyAnimals[j]);
                data.enemyAnimals[j].collides(data.enemyAnimals[j], this.topWall, this.bottomWall);
                // (for playerAnimal[i]): if(proximity <= playerAnimal.range) {
                //      attack(playerAnimal[i])
                // }
                if (data.playerAnimals[i].range >= proximity) {
                    this.attack(data.playerAnimals[i], data.enemyAnimals[j]);
                    data.playerAnimals[i].speed = 0;
                } else {
                    data.playerAnimals[i].speed = 4;    // for testing
                }
                if (data.enemyAnimals[j].range >= proximity) {
                    this.attack(data.enemyAnimals[j], data.playerAnimals[i]);
                    data.enemyAnimals[j].speed = 0;
                } else {
                    data.enemyAnimals[j].speed = 4;     // also testing
                }



                // If "unit[i] INFRONT OF unit[j]" move towards eachother
                if (proximity <= 0) {
                    // & not if they are behind them
                    data.playerAnimals[i].direction = 90;
                    data.enemyAnimals[j].direction = 270;
                } else if (proximity < 100) {
                    // console.log("Spotted!", data.playerAnimals[i].direction);
                    data.enemyAnimals[j].direction = data.enemyAnimals[j].getAngleToPoint(data.playerAnimals[i].x, data.playerAnimals[i].y);
                    data.playerAnimals[i].direction = data.playerAnimals[i].getAngleToPoint(data.enemyAnimals[j].x, data.enemyAnimals[j].y);
                }
            }
        }
    }

    attack(attacker, defender) {
        if (attacker.attackCooldown == 0) {
            if (defender.health <= attacker.attack) {
                defender.lifespan = 20;
                // TODO: if enemy die: +silk
            } else if (defender.health > attacker.attack) {
                defender.health -= attacker.attack;
            }
            attacker.attackCooldown = attacker.attackSpeed;
            defender.speed -= attacker.attack *2;  // "velocity" is VERY unfriendly with remove()

        } else if (attacker.attackCooldown > 0) {
            attacker.attackCooldown -= 1;
            console.log(attacker.attackCooldown);
        }

    }
    // attack(unit1, unit2) {       // defend? how do we reverse? 
        // if (this.timer > 0) {
        //   this.windUpAnimation()  (like, move sprite left for now)
        //   this.timer -= 1;
        // } else if (this.timer == 0) {
        //   this.attackAnimation()  (move sprite to the right)
        //   enemyAnimal(front).hp -= this.playerAnimal.damage;
        //   enemyAnimal(front).speed += this.playerAnimal.weight;    (like, "knock" the collider based on 'attacker weight')
    // }

        // (HAVE "attackTimer/Cooldown" on each Animal)
    // meleeCollide();
        // IF playerAnimal(front) MELEE enemyAnimal(front):
            // attack()

    // rangedCollide();
        // IF playerAnimal(ranged) "NEAR" enemyAnimal(front):
            // attack()
        // IF enemyAnimal(ranged)  "NEAR" playerAnimal(front)
            // attack()

    // function enemyDies() {
    //      remove()
    //      tokenRNG --
    // }
}