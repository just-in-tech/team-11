import { $ } from "../../lib/Pen.js";

export class BattleManager {
    constructor() {
    }

    battleUpdate() {
        this.engage(data);
    }

    engage(data) {
        for (let i = 0; i < data.playerAnimals; i++) {
            for (let j = 0; j < data.enemyAnimals; j++) {
                // Subtract "playerAnimal x" (lower) from "enemyAnimal x" (bigger) as "proximity"
                let proximity = data.enemyAnimals[j].x - data.playerAnimals[i].x;
                if (0 < proximity < 100) {
                    console.log("Spotted!");
                    data.playerAnimals[i].getAngleToPoint(data.enemyAnimals[j].x, data.enemyAnimals[j].y);
                    
                }
            }
        }
        // let's make "proximity" = 2*"range"
            // base range? or scale with "size"?

        

        // "getAngleToPoint" -- angle to give this entity to face the location
        // asset -- holds image

        // if collides():
            // if (attackTimer == 0) {
            //      attack();
            //      attackTimer = attackCooldown;
            // } else if (attackTimer > 0) {
            //      attackTimer -= 1;
            // }
    }
    // attack() {       // defend? how do we reverse? 
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