
// Old Function trying to have "Ranged Units"
seekTarget(data) {
    // Player Animals Seeking Target
    for (let i = 0; i < data.playerAnimals.length; i++) {   // for every player animal (i)
        // have target "enemyTree" by default & set it as the "closest target"
        let minDistance = $.math.distance(data.playerAnimals[i].x, data.playerAnimals[i].y, this.enemyTree.x, this.enemyTree.y);
        let targetX = this.enemyTree.x;
        let targetY = this.enemyTree.y;
        let treeHitWidth = (this.enemyTree.w + data.playerAnimals[i].w)/2;  // "can player hit tree?"
        data.playerAnimals[i].speed = 5;
        // console.log(treeHitWidth + data.playerAnimals[i].range);
        // console.log((this.enemyTree.x - data.playerAnimals[i].x))
        if (data.enemyAnimals.length > 0) {
            for (let j = 0; j < data.enemyAnimals.length; j++) {
                // check distance & if they are closer then set a new minimum
                let newMinDistance = $.math.distance(data.playerAnimals[i].x, data.playerAnimals[i].y, data.enemyAnimals[j].x, data.enemyAnimals[j].y);
                if (newMinDistance < minDistance) {
                    targetX = data.enemyAnimals[j].x;
                    targetY = data.enemyAnimals[j].y;
                    minDistance = newMinDistance;
                }
                // use closest target as the direction
                data.playerAnimals[i].direction = data.playerAnimals[i].getAngleToPoint(targetX, targetY);
                // console.log(minDistance, data.playerAnimals[i].range);
                if (minDistance <= data.playerAnimals[i].range) {
                    this.attack(data.playerAnimals[i], data.enemyAnimals[j]);
                    data.playerAnimals[i].speed = 0;
                }
            }   
        } else if ((this.enemyTree.x - data.playerAnimals[i].x) <= treeHitWidth + data.playerAnimals[i].range) {
            this.attack(data.playerAnimals[i], this.enemyTree);
            data.playerAnimals[i].speed = 0;
            console.log("Enemy Tree Hit!");
        } else {
            data.playerAnimals[i].speed = 5; // otherwise, return speed to "5"   -- maybe we do acceleration instead
        }
    }
}

            // let damageDealt = attacker.attack   // damage calculation
            // let tenacity = 110;                 // affects "recoil" effect
            // // units still inside their tree receive half damage (optional)
            // if (defender.x <= ($.w/16) || defender.x >= $.w/8) {
            //     damageDealt = damageDealt/2;
            //     console.log(defender, "took a hit While Under Tree");
            // }