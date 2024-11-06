import { $ } from "../lib/Pen.js";

export class Data {
    constructor() {
        this.gameState = "mainmenu"; // gameState = "loading" | "mainmenu" | "treemenu" | "battle"
        
        this.playerAnimals = $.makeGroup();
        this.computerAnimals = $.makeGroup();

        this.playerStats={  // PLAYER ANT IS GOOD
            ant:{
                unlocked:1,   //bool true (1) is unlocked
                unlockPrice: 0,
                damage: 3 , //damage to other animal
                maxHealth: 10 , //
                speed:  5, //speed the animal moves
                acceleration: 1,
                attackInterval: 200, //how offen the animal attacks (in frames)
                priceInGame: 10, //price to put on the track
                silkFromKill: 5,
            },
            eagle:{
                unlocked: 0 ,   //bool true (1) is unlocked
                unlockPrice: 200 ,
                damage: 4 , //damage to other animal
                maxHealth: 20 ,
                speed:  9, //
                acceleration: 1,
                attackInterval: 200,
                priceInGame: 50, //
                silkFromKill: 10,
            },
            bear:{
                unlocked:0,   //bool true (1) is unlocked
                unlockPrice: 500,
                damage: 10 , //damage to other animal
                maxHealth: 60 , 
                speed:  3, //
                acceleration: 1,
                attackInterval: 200,
                priceInGame: 110,
                silkfromKill:20
            },
            treeHealth: 200,
            silkFromTreekill:50,
        };

        this.computerStats={
            ant:{
                unlocked:1,   //bool true (1) is unlocked
                damage: 3 , //damage to other animal
                maxHealth: 10 , //
                speed:  5, //speed the animal moves
                acceleration: 1,
                attackInterval: 200, //how offen the animal attacks (in frames)
                priceInGame: 10, //price to put on the track
                silkFromKill: 10,
            },
            eagle:{
                unlocked: 0 ,   //bool true (1) is unlocked
                damage: 3 , //damage to other animal
                maxHealth: 100 ,
                speed:  9, //
                acceleration: 1,
                attackInterval: 200,
                priceInGame: 40, //
                silkFromKill: 10,
            },
            bear:{
                unlocked:0,   //bool true (1) is unlocked
                damage: 3 , //damage to other animal
                maxHealth: 5 , 
                speed:  3, //
                acceleration: 1,
                attackInterval: 10,
                priceInGame: 100,
                silkFromKill: 10,
            },
            treeHealth: 200,
            silkfromtreekill:50,
        };

        this.statsUpgrades={
            troopbranch:{
                eagle:{
                    upgradecost:200,
                },
                bear:{
                    upgradecost:350,
                },
            },
            damagebranch:{
                
                level2:{
                    upgradecost:200,
                    ant:{
                        newingamepirce:10,
                        damage:10,
                        attackInterval:10,
                    },
                    eagle:{
                        newingamepirce:10,
                        damage:10,
                        attackInterval:10,
                    },
                    bear:{
                        newingamepirce:10,
                        damage:10,
                        attackInterval:10,
                    }
                },
                level3:{
                    upgradecost:200,
                    ant:{
                        newingamepirce:10,
                        damage:10,
                        attackInterval:10,
                    },
                    eagle:{
                        newingamepirce:10,
                        damage:10,
                        attackInterval:10,
                    },
                    bear:{
                        newingamepirce:10,
                        damage:10,
                        attackInterval:10,
                    }
                },
            },
            speedbranch:{
                level2:{
                    upgradecost:200,
                    ant:{
                        newingamepirce:10,
                        speed:10,
                    },
                    eagle:{
                        newingamepirce:10,
                        speed:10,
                    },
                    bear:{
                        newingamepirce:10,
                        speed:10,
                    }
                },
                level3:{
                    upgradecost:200,
                    ant:{
                        newingamepirce:10,
                        speed:10,
                    },
                    eagle:{
                        newingamepirce:10,
                        speed:10,
                    },
                    bear:{
                        newingamepirce:10,
                        speed:10,
                    }
                },
            },
            silkbranch:{
                level2:{
                    upgradecost:200,
                    ant:{
                        silkFromKill: 10,
                        maxHealth:10,
                    },
                    eagle:{
                        silkFromKill: 10,
                        maxHealth:10,
                    },
                    bear:{
                        silkFromKill: 10,
                        maxHealth:10,
                    }

                },
                level3:{
                    upgradecost:200,
                    ant:{
                        silkFromKill: 10,
                        maxHealth: 10,
                    },
                    eagle:{
                        silkFromKill: 10,
                        maxHealth:10,
                    },
                    bear:{
                        silkFromKill: 10,
                        maxHealth:10,
                    },
                    tree:{

                    },

                },
            },
            fibrebranch:{
                level2:{
                    upgradecost:200,

                },
                level3:{
                    upgradecost:200,

                },
            },
            healthbranch:{
                level2:{
                    upgradecost:200,
                    ant:{
                        newingamepirce:10,
                        maxHealth:10,
                    },
                    eagle:{
                        newingamepirce:10,
                        maxHealth:10,
                    },
                    bear:{
                        newingamepirce:10,
                        maxHealth:10,
                    }
                },
                level3:{
                    upgradecost:200,
                    ant:{
                        newingamepirce:10,
                        maxHealth:10,
                    },
                    eagle:{
                        newingamepirce:10,
                        maxHealth:10,
                    },
                    bear:{
                        newingamepirce:10,
                        maxHealth:10,
                    }
                },
            },
        };
    }

    update(requests) {
    }
}