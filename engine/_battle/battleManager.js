import { $ } from "../../lib/Pen";

export class BattleManager {
    constructor() {
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
    //      enemy.pull();
    //      tokenRNG --
    // }
}