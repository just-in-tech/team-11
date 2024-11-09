import { $, text } from "../../lib/Pen.js";

export class BuildTreeScene {

    constructor() {

        //init varibles
        this.firstTime = 1

        //base images

        this.treeimg = $.loadImage($.w / 2, 450, "./engine/_buildtree/initialtrunk.png")
        this.background = $.loadImage($.w / 2, $.h / 2, "./engine/_buildtree/scene.jpg")

        //audio

        this.audio = new Audio("./engine/audio/buildtheme.mp3")

        // branches

        this.troopbranchinitial = $.loadImage($.w / 2, 450, "./engine/_buildtree/troopbranchinitial.png")
        this.troopbranchstage2 = $.loadImage($.w / 2, 450, "./engine/_buildtree/troopbranch2.png")
        this.troopbranchstage3 = $.loadImage($.w / 2, 450, "./engine/_buildtree/troopbranch3.png")

        this.healthbranchinitial = $.loadImage($.w / 2, 450, "./engine/_buildtree/initialhealthbranch.png")
        this.healthbranchstage2 = $.loadImage($.w / 2, 450, "./engine/_buildtree/healthbranch2.png")
        this.healthbranchstage3 = $.loadImage($.w / 2, 450, "./engine/_buildtree/healthbranch3.png")

        this.fibrebranchinitial = $.loadImage($.w / 2, 450, "./engine/_buildtree/initialfibrebranch.png")
        this.fibrebranchstage2 = $.loadImage($.w / 2, 450, "./engine/_buildtree/fibrebranch2.png")
        this.fibrebranchstage3 = $.loadImage($.w / 2, 450, "./engine/_buildtree/fibrebranch3.png")

        this.silkbranchinitial = $.loadImage($.w / 2, 450, "./engine/_buildtree/initialsilkbranch.png")
        this.silkbranchstage2 = $.loadImage($.w / 2, 450, "./engine/_buildtree/silkbranch2.png")
        this.silkbranchstage3 = $.loadImage($.w / 2, 450, "./engine/_buildtree/silkbranch3.png")

        this.speedbranchinitial = $.loadImage($.w / 2, 450, "./engine/_buildtree/initialspeedbranch.png")
        this.speedbranchstage2 = $.loadImage($.w / 2, 450, "./engine/_buildtree/speedbranch2.png")
        this.speedbranchstage3 = $.loadImage($.w / 2, 450, "./engine/_buildtree/speedbranch3.png")

        this.damagebranchinitial = $.loadImage($.w / 2, 450, "./engine/_buildtree/initialdamagebranch.png")
        this.damagebranchstage2 = $.loadImage($.w / 2, 450, "./engine/_buildtree/damagebranch2.png")
        this.damagebranchstage3 = $.loadImage($.w / 2, 450, "./engine/_buildtree/damagebranch3.png")

        // buttons

        this.activebutton = $.loadImage(660, 315, "./engine/_buildtree/button2.png")
        this.battlebutton = $.makeButton(720, 30, 130, 30, "TO BATTLE")

        this.troopbutton = $.loadImage(660, 315, "./engine/_buildtree/button1.png")
        this.fibrebutton = $.loadImage(65, 430, "./engine/_buildtree/button1.png")
        this.silkbutton = $.loadImage(740, 500, "./engine/_buildtree/button1.png")
        this.healthbutton = $.loadImage(620, 190, "./engine/_buildtree/button1.png")
        this.speedbutton = $.loadImage(120, 310, "./engine/_buildtree/button1.png")
        this.damagebutton = $.loadImage(270, 200, "./engine/_buildtree/button1.png")


        // pop-up box

        this.popup = $.loadImage($.w / 2, 670, "./engine/_buildtree/popup2.png")

        // font

        this.font = $.loadCustomFont("Pixelify Medium", "./engine/_buildtree/PixelifySans-Medium.ttf")
        this.fonttitle = $.loadCustomFont("Hachiro Undertale Battle Font", "./engine/_buildtree/HachicroUndertaleBattleFontRegular-L3zlg.ttf")


        // troop branch

        this.troopbranchcurrentstage = this.troopbranchinitial

        // health branch

        this.healthbranchcurrentstage = this.healthbranchinitial

        // fibre branch

        this.fibrebranchcurrentstage = this.fibrebranchinitial

        // silk branch

        this.silkbranchcurrentstage = this.silkbranchinitial

        // speed branch

        this.speedbranchcurrentstage = this.speedbranchinitial

        // damage branch

        this.damagebranchcurrentstage = this.damagebranchinitial

        // states

        this.troopbranchstate = 1
        this.healthbranchstate = 1
        this.fibrebranchstate = 1
        this.silkbranchstate = 1
        this.speedbranchstate = 1
        this.damagebranchstate = 1
        this.currentframe = $.frameCount

        this.requests = []
    }

    getFrameCount() {
        const currentframe = $.frameCount
        return currentframe
    }

    draw() {

        if (this.firstTime == 1) {
            this.troopbranchcurrentstage.w = 600
            this.troopbranchcurrentstage.h = 600

            this.healthbranchcurrentstage.w = 600
            this.healthbranchcurrentstage.h = 600

            this.fibrebranchcurrentstage.w = 600
            this.fibrebranchcurrentstage.h = 600

            this.silkbranchcurrentstage.w = 600
            this.silkbranchcurrentstage.h = 600

            this.speedbranchcurrentstage.w = 600
            this.speedbranchcurrentstage.h = 600

            this.damagebranchcurrentstage.w = 600
            this.damagebranchcurrentstage.h = 600

            this.treeimg.w = 600
            this.treeimg.h = 600

            this.fibrebutton.w = 60
            this.fibrebutton.h = 60


            this.troopbutton.w = 60
            this.troopbutton.h = 60


            this.silkbutton.w = 60
            this.silkbutton.h = 60


            this.damagebutton.w = 60
            this.damagebutton.h = 60


            this.speedbutton.w = 60
            this.speedbutton.h = 60


            this.healthbutton.w = 60
            this.healthbutton.h = 60

            this.activebutton.w = 65
            this.activebutton.h = 65

            this.firstTime = 0
        }

        // x,y locations

        this.troopbranchinitial.x = $.w / 2
        this.troopbranchstage2.x = $.w / 2
        this.troopbranchstage3.x = $.w / 2

        this.speedbranchinitial.x = $.w / 2
        this.speedbranchstage2.x = $.w / 2
        this.speedbranchstage3.x = $.w / 2

        this.healthbranchinitial.x = $.w / 2
        this.healthbranchstage2.x = $.w / 2
        this.healthbranchstage3.x = $.w / 2

        this.silkbranchinitial.x = $.w / 2
        this.silkbranchstage2.x = $.w / 2
        this.silkbranchstage3.x = $.w / 2

        this.damagebranchinitial.x = $.w / 2
        this.damagebranchstage2.x = $.w / 2
        this.damagebranchstage3.x = $.w / 2

        this.fibrebranchinitial.x = $.w / 2
        this.fibrebranchstage2.x = $.w / 2
        this.fibrebranchstage3.x = $.w / 2

        // BRANCHES AND SCALING

        //create background and initial tree

        this.background.draw()
        this.treeimg.draw()
        this.treeimg.w = 600
        this.treeimg.h = 600

        // troop branch

        this.troopbranchinitial.draw()
        this.troopbranchinitial.w = 600
        this.troopbranchinitial.h = 600
        this.troopbranchstage2.w = 600
        this.troopbranchstage2.h = 600
        this.troopbranchstage3.w = 600
        this.troopbranchstage3.h = 600

        // health branch

        this.healthbranchinitial.draw()
        this.healthbranchinitial.w = 600
        this.healthbranchinitial.h = 600
        this.healthbranchstage2.w = 900
        this.healthbranchstage2.h = 900
        this.healthbranchstage3.w = 900
        this.healthbranchstage3.h = 900

        // fibre branch

        this.fibrebranchinitial.draw()
        this.fibrebranchinitial.w = 600
        this.fibrebranchinitial.h = 600
        this.fibrebranchstage2.w = 600
        this.fibrebranchstage2.h = 600
        this.fibrebranchstage3.w = 900
        this.fibrebranchstage3.h = 900

        // silk branch

        this.silkbranchinitial.draw()
        this.silkbranchinitial.w = 600
        this.silkbranchinitial.h = 600
        this.silkbranchstage2.w = 600
        this.silkbranchstage2.h = 600
        this.silkbranchstage3.w = 600
        this.silkbranchstage3.h = 600

        // speed branch

        this.speedbranchinitial.draw()
        this.speedbranchinitial.w = 600
        this.speedbranchinitial.h = 600
        this.speedbranchstage2.w = 600
        this.speedbranchstage2.h = 600
        this.speedbranchstage3.w = 600
        this.speedbranchstage3.h = 600

        // damage branch

        this.damagebranchinitial.draw()
        this.damagebranchinitial.w = 600
        this.damagebranchinitial.h = 600
        this.damagebranchstage2.w = 900
        this.damagebranchstage2.h = 900
        this.damagebranchstage3.w = 900
        this.damagebranchstage3.h = 900

        //create buttons

        this.fibrebutton.draw()
        this.fibrebutton.w = 60
        this.fibrebutton.h = 60

        this.troopbutton.draw()
        this.troopbutton.w = 60
        this.troopbutton.h = 60

        this.silkbutton.draw()
        this.silkbutton.w = 60
        this.silkbutton.h = 60

        this.damagebutton.draw()
        this.damagebutton.w = 60
        this.damagebutton.h = 60

        this.speedbutton.draw()
        this.speedbutton.w = 60
        this.speedbutton.h = 60

        this.healthbutton.draw()
        this.healthbutton.w = 60
        this.healthbutton.h = 60

        //create background and initial tree

        this.background.draw()
        this.treeimg.draw()

        //draw buttons
        this.fibrebutton.draw()
        this.troopbutton.draw()
        this.silkbutton.draw()
        this.damagebutton.draw()
        this.speedbutton.draw()
        this.healthbutton.draw()

        this.battlebutton.draw()

        // popup

        //this.popup.draw()
        this.popup.h = 150
        //this.popup.w = 450

        $.text.size = 25
        $.colour.fill = "white"
        $.text.font = this.fonttitle
        $.text.print($.w / 2, 28, "BUILD YOUR TREE", 800)

    }

    update(data, resources) {

        // check gamestate

        if (this.battlebutton.up) {
            data.gameState = "battle";
        }

        $.colour.fill = "white"
        $.text.font = this.font
        $.text.size = 30
        this.silktext = $.text.print(80, 30, "SILK: " + resources.silk, 200)

        // UPGRADE BRANCHES

        // troop branch

        //$.math.distance()
        //console.log(resources)
        if ($.math.distance(this.troopbutton.x, this.troopbutton.y, $.mouse.x, $.mouse.y) <= 30) {

            this.activebutton.x = this.troopbutton.x
            this.activebutton.y = this.troopbutton.y
            this.activebutton.draw()

            this.popupManager("troop", this.troopbranchstate, data, resources);
            if ($.mouse.leftReleased) {

                if (this.troopbranchstate == 2 - 1 && resources.silk >= data.statsUpgrades.troopBranch.eagle.upgradecost) {
                    this.requests.push({
                        type: "upgrade branch",
                        action: "unlockAnimalBranch",
                        value: "eagle",
                    })
                    this.setnewstage("troopbranchcurrentstage", this.troopbranchcurrentstage, this.troopbranchstage2, 600, 600, this.troopbutton, 680, 320)
                    this.troopbranchstate += 1
                } else if (this.troopbranchstate == 3 - 1 && resources.silk >= data.statsUpgrades.troopBranch.bear.upgradecost) {
                    this.requests.push({
                        type: "upgrade branch",
                        action: "unlockAnimalBranch",
                        value: "bear",
                    })
                    this.setnewstage("troopbranchcurrentstage", this.troopbranchcurrentstage, this.troopbranchstage3, 600, 600, this.troopbutton, 730, 280)
                    this.troopbranchstate += 1
                }

            }
        }

        this.troopbranchcurrentstage.draw()

        // damage branch

        if ($.math.distance(this.damagebutton.x, this.damagebutton.y, $.mouse.x, $.mouse.y) <= 30) {

            this.activebutton.x = this.damagebutton.x
            this.activebutton.y = this.damagebutton.y
            this.activebutton.draw()
            this.popupManager("damage", this.damagebranchstate, data, resources);
            if ($.mouse.leftReleased) {

                if (this.damagebranchstate == 2 - 1 && resources.silk >= data.statsUpgrades.damageBranch.level2.upgradecost) {
                    this.requests.push({
                        type: "upgrade branch",
                        action: "damageBranch",
                        value: "level2",
                    })
                    this.setnewstage("damagebranchcurrentstage", this.damagebranchcurrentstage, this.damagebranchstage2, 900, 900, this.damagebutton, 120, 160)
                    this.damagebranchstate += 1
                } else if (this.damagebranchstate == 3 - 1 && resources.silk >= data.statsUpgrades.damageBranch.level3.upgradecost) {
                    this.requests.push({
                        type: "upgrade branch",
                        action: "damageBranch",
                        value: "level3",
                    })
                    this.setnewstage("damagebranchcurrentstage", this.damagebranchcurrentstage, this.damagebranchstage3, 900, 900, this.damagebutton, 160, 70)
                    this.damagebranchstate += 1
                }
            }
        }
        this.damagebranchcurrentstage.draw()




        // speed branch

        if ($.math.distance(this.speedbutton.x, this.speedbutton.y, $.mouse.x, $.mouse.y) <= 30) {

            this.activebutton.x = this.speedbutton.x
            this.activebutton.y = this.speedbutton.y
            this.activebutton.draw()

            this.popupManager("speed", this.speedbranchstate, data, resources);
            if ($.mouse.leftReleased) {

                if (this.speedbranchstate == 2 - 1 && resources.silk >= data.statsUpgrades.speedBranch.level2.upgradecost) {
                    this.requests.push({
                        type: "upgrade branch",
                        action: "speedBranch",
                        value: "level2",
                    })
                    this.setnewstage("speedbranchcurrentstage", this.speedbranchcurrentstage, this.speedbranchstage2, 600, 600, this.speedbutton, 100, 310)
                    this.speedbranchstate += 1
                } else if (this.speedbranchstate == 3 - 1 && resources.silk >= data.statsUpgrades.speedBranch.level3.upgradecost) {
                    this.requests.push({
                        type: "upgrade branch",
                        action: "speedBranch",
                        value: "level3",
                    })
                    this.setnewstage("speedbranchcurrentstage", this.speedbranchcurrentstage, this.speedbranchstage3, 600, 600, this.speedbutton, 70, 270)
                    this.speedbranchstate += 1
                }
            }
        }
        this.speedbranchcurrentstage.draw()



        // silk branch

        if ($.math.distance(this.silkbutton.x, this.silkbutton.y, $.mouse.x, $.mouse.y) <= 30) {

            this.activebutton.x = this.silkbutton.x
            this.activebutton.y = this.silkbutton.y
            this.activebutton.draw()
            this.popupManager("silk", this.silkbranchstate, data, resources);
            if ($.mouse.leftReleased) {

                if (this.silkbranchstate == 2 - 1 && resources.silk >= data.statsUpgrades.silkBranch.level2.upgradecost) {
                    this.requests.push({
                        type: "upgrade branch",
                        action: "silkBranch",
                        value: "level2",
                    })
                    this.setnewstage("silkbranchcurrentstage", this.silkbranchcurrentstage, this.silkbranchstage2, 600, 600, this.silkbutton, 740, 500)
                    this.silkbranchstate += 1
                } else if (this.silkbranchstate == 3 - 1 && resources.silk >= data.statsUpgrades.silkBranch.level3.upgradecost) {
                    this.requests.push({
                        type: "upgrade branch",
                        action: "silkBranch",
                        value: "level3",
                    })
                    this.setnewstage("silkbranchcurrentstage", this.silkbranchcurrentstage, this.silkbranchstage3, 600, 600, this.silkbutton, 740, 500)
                    this.silkbranchstate += 1
                }
            }
        }
        this.silkbranchcurrentstage.draw()

        // fibre branch
        //console.log($.math.distance(this.fibrebutton.x,this.fibrebutton.y,$.mouse.x,$.mouse.y)<=30)

        if ($.math.distance(this.fibrebutton.x, this.fibrebutton.y, $.mouse.x, $.mouse.y) <= 30) {

            this.activebutton.x = this.fibrebutton.x
            this.activebutton.y = this.fibrebutton.y
            this.activebutton.draw()

            this.popupManager("fibre", this.fibrebranchstate, data, resources);
            if ($.mouse.leftReleased) {
                //console.log(data.statsUpgrades.fibreBranch.level2.upgradecost)

                if (this.fibrebranchstate == 2 - 1 && resources.silk >= data.statsUpgrades.fibreBranch.level2.upgradecost) {
                    this.requests.push({
                        type: "upgrade branch",
                        action: "fibreBranch",
                        value: "level2",
                    })
                    this.setnewstage("fibrebranchcurrentstage", this.fibrebranchcurrentstage, this.fibrebranchstage2, 600, 600, this.fibrebutton, 65, 430)
                    this.fibrebranchstate += 1
                } else if (this.fibrebranchstate == 3 - 1 && resources.silk >= data.statsUpgrades.fibreBranch.level3.upgradecost) {
                    this.requests.push({
                        type: "upgrade branch",
                        action: "fibreBranch",
                        value: "level3",
                    })
                    this.setnewstage("fibrebranchcurrentstage", this.fibrebranchcurrentstage, this.fibrebranchstage3, 900, 900, this.fibrebutton, 45, 380)
                    this.fibrebranchstate += 1
                }
            }
        }

        this.fibrebranchcurrentstage.draw()

        // health branch

        if ($.math.distance(this.healthbutton.x, this.healthbutton.y, $.mouse.x, $.mouse.y) <= 30) {

            this.activebutton.x = this.healthbutton.x
            this.activebutton.y = this.healthbutton.y
            this.activebutton.draw()

            this.popupManager("health", this.healthbranchstate, data, resources);

            if ($.mouse.leftReleased) {

                if (this.healthbranchstate == 2 - 1 && resources.silk >= data.statsUpgrades.healthBranch.level2.upgradecost) {
                    this.requests.push({
                        type: "upgrade branch",
                        action: "healthBranch",
                        value: "level2",
                    })
                    this.setnewstage("healthbranchcurrentstage", this.healthbranchcurrentstage, this.healthbranchstage2, 900, 900, this.healthbutton, 660, 190)
                    this.healthbranchstate += 1
                } else if (this.healthbranchstate == 3 - 1 && resources.silk >= data.statsUpgrades.healthBranch.level3.upgradecost) {
                    this.requests.push({
                        type: "upgrade branch",
                        action: "healthBranch",
                        value: "level3",
                    })
                    this.setnewstage("healthbranchcurrentstage", this.healthbranchcurrentstage, this.healthbranchstage3, 900, 900, this.healthbutton, 650, 110)
                    this.healthbranchstate += 1
                }

            }
        }
        this.healthbranchcurrentstage.draw()
    }

    setnewstage(currentBranchString, currentBranchStage, newBranchStage, w, h, button, buttonx, buttony) {
        //console.log(currentBranchStage, newBranchStage)
        //currentBranchStage=newBranchStage
        this[currentBranchString] = newBranchStage
        this[currentBranchString].w = w
        this[currentBranchString].h = h

        button.x = buttonx
        button.y = buttony
    }

    drawBattleTree() {

        // trunk

        // this.treeimg.draw()
        // this.treeimg.w = 270
        // this.treeimg.h = 270
        // this.treeimg.x = 60
        // this.treeimg.y = 450

        // troop branch

        this.troopbranchinitial.x = 60
        this.troopbranchstage2.x = 60
        this.troopbranchstage3.x = 60

        this.troopbranchinitial.w = 270
        this.troopbranchinitial.h = 270
        this.troopbranchstage2.w = 270
        this.troopbranchstage2.h = 270
        this.troopbranchstage3.w = 270
        this.troopbranchstage3.h = 270

        // health branch

        this.healthbranchinitial.x = 60
        this.healthbranchstage2.x = 60
        this.healthbranchstage3.x = 60

        this.healthbranchinitial.w = 270
        this.healthbranchinitial.h = 270
        this.healthbranchstage2.w = 405
        this.healthbranchstage2.h = 405
        this.healthbranchstage3.w = 405
        this.healthbranchstage3.h = 405

        // fibre branch

        this.fibrebranchinitial.x = 60
        this.fibrebranchstage2.x = 60
        this.fibrebranchstage3.x = 60

        this.fibrebranchinitial.w = 270
        this.fibrebranchinitial.h = 270
        this.fibrebranchstage2.w = 270
        this.fibrebranchstage2.h = 270
        this.fibrebranchstage3.w = 405
        this.fibrebranchstage3.h = 405

        // silk branch

        this.silkbranchinitial.x = 60
        this.silkbranchstage2.x = 60
        this.silkbranchstage3.x = 60

        this.silkbranchinitial.w = 270
        this.silkbranchinitial.h = 270
        this.silkbranchstage2.w = 270
        this.silkbranchstage2.h = 270
        this.silkbranchstage3.w = 270
        this.silkbranchstage3.h = 270

        // speed branch

        this.speedbranchinitial.x = 63
        this.speedbranchstage2.x = 63
        this.speedbranchstage3.x = 63

        this.speedbranchinitial.w = 270
        this.speedbranchinitial.h = 270
        this.speedbranchstage2.w = 270
        this.speedbranchstage2.h = 270
        this.speedbranchstage3.w = 270
        this.speedbranchstage3.h = 270

        // damage branch

        this.damagebranchinitial.x = 60
        this.damagebranchstage2.x = 60
        this.damagebranchstage3.x = 60

        this.damagebranchinitial.w = 270
        this.damagebranchinitial.h = 270
        this.damagebranchstage2.w = 405
        this.damagebranchstage2.h = 405
        this.damagebranchstage3.w = 405
        this.damagebranchstage3.h = 405

        // damage branch checker

        if (this.damagebranchstate == 1) {
            this.damagebranchinitial.draw()
        }

        if (this.damagebranchstate == 2) {
            this.damagebranchstage2.draw()
        }

        if (this.damagebranchstate >= 3) {
            this.damagebranchstage3.draw()
        }

        // health branch checker

        if (this.healthbranchstate == 1) {
            this.healthbranchinitial.draw()
        }

        if (this.healthbranchstate == 2) {
            this.healthbranchstage2.draw()
        }

        if (this.healthbranchstate >= 3) {
            this.healthbranchstage3.draw()
        }

        // silk branch checker

        if (this.silkbranchstate == 1) {
            this.silkbranchinitial.draw()
        }

        if (this.silkbranchstate == 2) {
            this.silkbranchstage2.draw()
        }

        if (this.silkbranchstate >= 3) {
            this.silkbranchstage3.draw()
        }

        // fibre branch checker

        if (this.fibrebranchstate == 1) {
            this.fibrebranchinitial.draw()
        }

        if (this.fibrebranchstate == 2) {
            this.fibrebranchstage2.draw()
        }

        if (this.fibrebranchstate >= 3) {
            this.fibrebranchstage3.draw()
        }

        // speed branch checker

        if (this.speedbranchstate == 1) {
            this.speedbranchinitial.draw()
        }

        if (this.speedbranchstate == 2) {
            this.speedbranchstage2.draw()
        }

        if (this.speedbranchstate >= 3) {
            this.speedbranchstage3.draw()
        }

        // troop branch checker

        if (this.troopbranchstate == 1) {
            this.troopbranchinitial.draw()
        }

        if (this.troopbranchstate == 2) {
            this.troopbranchstage2.draw()
        }

        if (this.troopbranchstate >= 3) {
            this.troopbranchstage3.draw()
        }
    }

    getRequests() {
        const requestsToBeReturned = this.requests;
        this.requests = [];
        return requestsToBeReturned;
    }
    popupTemplate(h, y, heading, secondline) {
        let textpos = y + 10

        this.popup.h = h
        this.popup.w = $.w * 0.65

        this.popup.y = y + h / 2
        this.popup.draw()
        $.colour.fill = "black"
        $.text.alignment.y = "top"
        $.text.font = this.fonttitle
        $.text.size = 20
        $.text.print($.w / 2, textpos, heading, this.popup.w);
        if (secondline != undefined) {
            textpos += 30
            $.text.print($.w / 2, textpos, secondline, this.popup.w);
        }


    }


    popupManager(branchname, branchlevel, data, resources) {
        //console.log(resources)
        this.notices = {
            troopBranch: {
                display: "custom text", //options "customText",statstable
                level2: "eagle",
                level3: "bear",
                eagle: {
                    heading: "unlock eagle",
                    description: "can attack at range, moves faster then the ant and also has more",
                    secondline: "health"
                },
                bear: {
                    heading: "unlock bear",
                    description: "moves slower then the eagle and faster then the ant but can do ",
                    secondline: "more damage and has more health",
                },
            },
            damageBranch: {
                display: "statstable", //options "customText",statstable
                stat: "damage", //the name of the stat in the object playerStats
            },
            speedBranch: {
                display: "statstable", //options "customText",statstable
                stat: "speed", //the name of the stat in the object playerStats
            },
            silkBranch: {
                display: "silkstats",
                stat: "silkFromKill",

            },
            fibreBranch: {
                display: "fibrestats",

            },
            healthBranch: {
                display: "statstable", //options "customText",statstable
                stat: "maxHealth", //the name of the stat in the object playerStats
            },
        }

        let varbranchname = branchname + "Branch";
        //console.log(varbranchname)
        let nextbranchlevel = branchlevel + 1
        let varbranchlevel = "level" + nextbranchlevel
        //console.log(varbranchlevel)
        //console.log(this.notices[varbranchname].stat,branchname,branchlevel);






        let textposition = 610
        if (branchlevel < 3) {
            if (this.notices[varbranchname].display === "statstable") {
                //console.log(varbranchlevel, varbranchname, data.statsUpgrades[varbranchname][varbranchlevel].ant,this.notices[varbranchname].stat)
                this.popupTemplate(160, textposition, "upgrade " + branchname + " branch to", "level " + nextbranchlevel)
                textposition += 70
                $.text.font = this.font
                $.text.size = 15
                $.text.print($.w / 2, textposition, "Upgrade ant " + branchname + " to " + data.statsUpgrades[varbranchname][varbranchlevel].ant[this.notices[varbranchname].stat] + " from " + data.playerStats.ant[this.notices[varbranchname].stat])
                textposition += 18
                $.text.print($.w / 2, textposition, "Upgrade eagle " + branchname + " to " + data.statsUpgrades[varbranchname][varbranchlevel].eagle[this.notices[varbranchname].stat] + " from " + data.playerStats.eagle[this.notices[varbranchname].stat])
                textposition += 18
                $.text.print($.w / 2, textposition, "Upgrade bear " + branchname + " to " + data.statsUpgrades[varbranchname][varbranchlevel].bear[this.notices[varbranchname].stat] + " from " + data.playerStats.bear[this.notices[varbranchname].stat])
                textposition += 23
                $.text.size = 17
                if (resources.silk >= data.statsUpgrades[varbranchname][varbranchlevel].upgradecost) {
                    $.colour.fill = "green"
                    $.text.print($.w / 2, textposition, "Use " + data.statsUpgrades[varbranchname][varbranchlevel].upgradecost + " silk to purchase?")
                } else {
                    $.colour.fill = "red"
                    $.text.print($.w / 2, textposition, "You require " + data.statsUpgrades[varbranchname][varbranchlevel].upgradecost + " silk to purchase")
                }

            } else if (this.notices[varbranchname].display == "silkstats") {

                this.popupTemplate(160, textposition, "Upgrade " + branchname + " branch to", "level " + nextbranchlevel)
                textposition += 70
                $.text.font = this.font
                $.text.size = 15
                $.text.print($.w / 2, textposition, "Upgrade silk production per ant kill from " + data.playerStats.ant.silkFromKill + " to " + data.statsUpgrades[varbranchname][varbranchlevel].ant.silkFromKill)
                textposition += 18
                $.text.print($.w / 2, textposition, "Upgrade silk production per eagle kill from " + data.playerStats.eagle.silkFromKill + " to " + data.statsUpgrades[varbranchname][varbranchlevel].eagle.silkFromKill)
                textposition += 18
                $.text.print($.w / 2, textposition, "Upgrade silk production per bear kill from " + data.playerStats.bear.silkFromKill + " to " + data.statsUpgrades[varbranchname][varbranchlevel].bear.silkFromKill)
                textposition += 23
                $.text.size = 17
                if (resources.silk >= data.statsUpgrades[varbranchname][varbranchlevel].upgradecost) {
                    $.colour.fill = "green"
                    $.text.print($.w / 2, textposition, "Use " + data.statsUpgrades[varbranchname][varbranchlevel].upgradecost + " silk to purchase?")
                } else {
                    $.colour.fill = "red"
                    $.text.print($.w / 2, textposition, "You require " + data.statsUpgrades[varbranchname][varbranchlevel].upgradecost + " silk to purchase")
                }


            } else if (this.notices[varbranchname].display == "fibrestats") {
                textposition = 620
                this.popupTemplate(140, textposition, "Upgrade " + branchname + " branch to", "level " + nextbranchlevel)
                textposition += 70
                $.text.font = this.font
                $.text.size = 15
                $.text.print($.w / 2, textposition, "Upgrade fibre production per interval to " + data.statsUpgrades[varbranchname][varbranchlevel].fibrePerInterval + " from " + resources.fibre.fibrePerInterval)
                textposition += 18
                $.text.print($.w / 2, textposition, "Upgrade fibre production interval to " + data.statsUpgrades[varbranchname][varbranchlevel].fibreInterval / 60 + " (in seconds) from " + resources.fibre.fibreInterval / 60)

                textposition += 23
                $.text.size = 17
                if (resources.silk >= data.statsUpgrades[varbranchname][varbranchlevel].upgradecost) {
                    $.colour.fill = "green"
                    $.text.print($.w / 2, textposition, "Use " + data.statsUpgrades[varbranchname][varbranchlevel].upgradecost + " silk to purchase?")
                } else {
                    $.colour.fill = "red"
                    $.text.print($.w / 2, textposition, "You require " + data.statsUpgrades[varbranchname][varbranchlevel].upgradecost + " silk to purchase")
                }


            } else if (this.notices[varbranchname].display == "custom text") {
                textposition = 660
                //console.log(this.notices[varbranchname][varbranchlevel])
                this.popupTemplate(110, textposition, this.notices[varbranchname][this.notices[varbranchname][varbranchlevel]].heading)
                $.text.font = this.font
                $.text.size = 15
                textposition += 40
                $.text.print($.w / 2, textposition, this.notices[varbranchname][this.notices[varbranchname][varbranchlevel]].description)
                textposition += 18
                $.text.print($.w / 2, textposition, this.notices[varbranchname][this.notices[varbranchname][varbranchlevel]].secondline)
                textposition += 23
                $.text.size = 17
                if (resources.silk >= data.statsUpgrades[varbranchname][this.notices[varbranchname][varbranchlevel]].upgradecost) {
                    $.colour.fill = "green"
                    $.text.print($.w / 2, textposition, "Use " + data.statsUpgrades[varbranchname][this.notices[varbranchname][varbranchlevel]].upgradecost + " silk to purchase")
                } else {
                    $.colour.fill = "red"
                    $.text.print($.w / 2, textposition, "You require " + data.statsUpgrades[varbranchname][this.notices[varbranchname][varbranchlevel]].upgradecost + " silk to purchase")
                }
            } else {

            }

        } else if (branchlevel >= 3) {
            textposition = 670
            this.popupTemplate(100, textposition, branchname + " branch is fully", "upgraded")
            textposition += 70
            $.text.font = this.font
            $.text.size = 20
            $.colour.fill = "green"
            $.text.print($.w / 2, textposition, "Fully upgraded")
        }

    }

}

// export class treemenu{
//     constructor(){
//         this.battlebtn = $.makeButton($.w/2,650,100,50,"credits");
//         this.battlebtn.background = "green";
//         this.requests=[];
//     }
// draw_treemenu(data){
//     this.battlebtn.draw();
//     if(this.battlebtn.up){
//     data.gameState="battle";
//     }
// }

// getRequests() {
//     const requestsToBeReturned = this.requests;
//     this.requests = [];
//     return requestsToBeReturned;
// }
// }