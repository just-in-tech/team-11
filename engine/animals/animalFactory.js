

// if GUI button clicked "Ant" signal comes:
    // "playerAnt.push(new PlayerAnimal(ant));"

export class PlayerAnimal {
    contructor(type) {
        let spawn = type;
        // player base: x = 100, y = 500


        // i dont think I get "this" operator yet
        if (spawn == ant) {
            this.ant = $.makeBoxCollider(100, 500, 20, 10);
            this.ant.velocity.x = 1;
        } else if (spawn == eagle) {
            this.eagle = $.makeBoxCollider(100, 500, 10, 20);
            this.eagle.velocity.x = 1;
        } else if (spawn == bear) {
            this.bear = $.makeBoxCollider(100, 500, 30, 40);
            this.bear.velocity.x = 1;
        }
    }
}