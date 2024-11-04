import { $ } from "../../lib/Pen.js";

export class BuildTreeScene {

    constructor() {
        this.treeimg = $.loadImage($.w / 2, 450, "./engine/_buildtree/initialtrunk.png")
        this.background = $.loadImage($.w / 2, $.h / 2, "./engine/_buildtree/scene.jpg")

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

        this.troopbutton = $.loadImage(660, 315, "./engine/_buildtree/button1.png")
        this.fibrebutton = $.loadImage(65, 430, "./engine/_buildtree/button1.png")
        this.silkbutton = $.loadImage(740, 500, "./engine/_buildtree/button1.png")
        this.healthbutton = $.loadImage(620, 190, "./engine/_buildtree/button1.png")
        this.speedbutton = $.loadImage(120, 310, "./engine/_buildtree/button1.png")
        this.damagebutton = $.loadImage(270, 200, "./engine/_buildtree/button1.png")

        this.troopbutton2 = $.loadImage(660, 315, "./engine/_buildtree/button2.png")
        this.fibrebutton2 = $.loadImage(65, 430, "./engine/_buildtree/button2.png")
        this.silkbutton2 = $.loadImage(740, 500, "./engine/_buildtree/button2.png")
        this.healthbutton2 = $.loadImage(620, 190, "./engine/_buildtree/button2.png")
        this.speedbutton2 = $.loadImage(120, 310, "./engine/_buildtree/button2.png")
        this.damagebutton2 = $.loadImage(270, 200, "./engine/_buildtree/button2.png")

        this.battlebutton = $.makeButton(100, 750, 150, 50, "BATTLE")

        // pop-up box

        this.popup = $.loadImage($.w / 2, 670, "./engine/_buildtree/popup1.png")

        // font

        this.font = $.loadCustomFont("Pixelify Medium", "./engine/_buildtree/PixelifySans-Medium.ttf")
        this.fonttitle = $.loadCustomFont("Hachiro Undertale Battle Font", "./engine/_buildtree/HachicroUndertaleBattleFontRegular-L3zlg.ttf")

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

        this.battlebutton.draw()


        // hover/pressed state of buttons

        this.troopbutton2.w = 65
        this.troopbutton2.h = 65

        this.healthbutton2.w = 65
        this.healthbutton2.h = 65

        this.fibrebutton2.w = 65
        this.fibrebutton2.h = 65

        this.silkbutton2.w = 65
        this.silkbutton2.h = 65

        this.speedbutton2.w = 65
        this.speedbutton2.h = 65

        this.damagebutton2.w = 65
        this.damagebutton2.h = 65

        // popup

        //this.popup.draw()
        this.popup.h = 280
        this.popup.w = 670

        // display opening text

        if ($.frameCount == this.currentframe || $.frameCount < this.currentframe + 1000) {

            $.text.size = 45
            $.colour.fill = "white"
            $.text.font = this.fonttitle
            $.text.print($.w / 2, 80, "BUILD YOUR TREE", 800)
        }
    }

    update(data) {

        // check gamestate

        if (this.battlebutton.up) {
            data.gameState = "battle";
        }

        // UPGRADE BRANCHES

        // troop branch

        if (($.mouse.x > this.troopbutton.x - 20 && $.mouse.x < this.troopbutton.x + 20) && ($.mouse.y > this.troopbutton.y - 20 && $.mouse.y < this.troopbutton.y + 20)) {
            this.troopbutton2.draw()
            if (this.troopbranchstate == 1) {
                this.popup.draw()
                $.colour.fill = "black"
                $.text.font = this.fonttitle
                $.text.size = 20
                $.text.print($.w / 2, 640, "TROOP BRANCH LEVEL 1", 800)
                $.text.font = this.font
                $.text.size = 20
                $.colour.fill = "green"
                $.text.print($.w / 2, 675, "UPGRADE AND BUY EAGLE FOR {XXX} SILK?", 800)
            }

            if ($.mouse.leftReleased) {
                this.troopbranchstate += 1
            }
        }

        if (this.troopbranchstate == 2) {
            this.troopbranchstage2.draw()
            this.troopbutton.x = 680
            this.troopbutton.y = 320

            this.troopbutton2.x = 680
            this.troopbutton2.y = 320

            if (($.mouse.x > this.troopbutton.x - 20 && $.mouse.x < this.troopbutton.x + 20) && ($.mouse.y > this.troopbutton.y - 20 && $.mouse.y < this.troopbutton.y + 20)) {
                this.popup.draw()
                $.colour.fill = "black"
                $.text.font = this.fonttitle
                $.text.size = 20
                $.text.print($.w / 2, 640, "TROOP BRANCH LEVEL 2", 800)
                $.text.font = this.font
                $.text.size = 20
                $.colour.fill = "green"
                $.text.print($.w / 2, 675, "UPGRADE AND BUY BEAR FOR {XXX} SILK?", 800)
            }
        }

        if (this.troopbranchstate == 3 || this.troopbranchstate > 3) {
            this.troopbranchstage3.draw()
            this.troopbutton.x = 730
            this.troopbutton.y = 280

            this.troopbutton2.x = 730
            this.troopbutton2.y = 280

            if (($.mouse.x > this.troopbutton.x - 20 && $.mouse.x < this.troopbutton.x + 20) && ($.mouse.y > this.troopbutton.y - 20 && $.mouse.y < this.troopbutton.y + 20)) {
                this.popup.draw()
                $.colour.fill = "black"
                $.text.font = this.fonttitle
                $.text.size = 20
                $.text.print($.w / 2, 640, "TROOP BRANCH LEVEL 3", 800)
                $.text.font = this.font
                $.text.size = 20
                $.colour.fill = "red"
                $.text.print($.w / 2, 675, "MAX LEVEL REACHED", 800)
            }
        }

        // damage branch

        if (($.mouse.x > this.damagebutton.x - 20 && $.mouse.x < this.damagebutton.x + 20) && ($.mouse.y > this.damagebutton.y - 20 && $.mouse.y < this.damagebutton.y + 20)) {
            this.damagebutton2.draw()
            if (this.damagebranchstate == 1) {
                this.popup.draw()
                $.colour.fill = "black"
                $.text.font = this.fonttitle
                $.text.size = 20
                $.text.print($.w / 2, 640, "DAMAGE BRANCH LEVEL 1", 800)
                $.text.font = this.font
                $.text.size = 16
                $.colour.fill = "green"
                $.text.print($.w / 2, 675, "UPGRADE AND INCREASE TROOP DAMAGE BY {X}% FOR {XXX} SILK?", 450)
            }

            if ($.mouse.leftReleased) {
                this.damagebranchstate += 1
            }
        }

        if (this.damagebranchstate == 2) {
            this.damagebranchstage2.draw()
            this.damagebutton.x = 120
            this.damagebutton.y = 160

            this.damagebutton2.x = 120
            this.damagebutton2.y = 160

            if (($.mouse.x > this.damagebutton.x - 20 && $.mouse.x < this.damagebutton.x + 20) && ($.mouse.y > this.damagebutton.y - 20 && $.mouse.y < this.damagebutton.y + 20)) {
                this.popup.draw()
                $.colour.fill = "black"
                $.text.font = this.fonttitle
                $.text.size = 20
                $.text.print($.w / 2, 640, "DAMAGE BRANCH LEVEL 2", 800)
                $.text.font = this.font
                $.text.size = 16
                $.colour.fill = "green"
                $.text.print($.w / 2, 675, "UPGRADE AND INCREASE TROOP DAMAGE BY {X}% FOR {XXX} SILK?", 450)
            }
        }

        if (this.damagebranchstate == 3 || this.damagebranchstate > 3) {
            this.damagebranchstage3.draw()
            this.damagebutton.x = 160
            this.damagebutton.y = 70

            this.damagebutton2.x = 160
            this.damagebutton2.y = 70

            if (($.mouse.x > this.damagebutton.x - 20 && $.mouse.x < this.damagebutton.x + 20) && ($.mouse.y > this.damagebutton.y - 20 && $.mouse.y < this.damagebutton.y + 20)) {
                this.popup.draw()
                $.colour.fill = "black"
                $.text.font = this.fonttitle
                $.text.size = 20
                $.text.print($.w / 2, 640, "DAMAGE BRANCH LEVEL 3", 800)
                $.text.font = this.font
                $.text.size = 20
                $.colour.fill = "red"
                $.text.print($.w / 2, 675, "MAX LEVEL REACHED", 450)
            }
        }


        // speed branch

        if (($.mouse.x > this.speedbutton.x - 20 && $.mouse.x < this.speedbutton.x + 20) && ($.mouse.y > this.speedbutton.y - 20 && $.mouse.y < this.speedbutton.y + 20)) {
            this.speedbutton2.draw()
            if (this.speedbranchstate == 1) {
                this.popup.draw()
                $.colour.fill = "black"
                $.text.font = this.fonttitle
                $.text.size = 20
                $.text.print($.w / 2, 640, "SPEED BRANCH LEVEL 1", 800)
                $.text.font = this.font
                $.text.size = 16
                $.colour.fill = "green"
                $.text.print($.w / 2, 675, "UPGRADE AND INCREASE TROOP SPEED BY {X}% FOR {XXX} SILK?", 450)
            }

            if ($.mouse.leftReleased) {
                this.speedbranchstate += 1
            }
        }

        if (this.speedbranchstate == 2) {
            this.speedbranchstage2.draw()
            this.speedbutton.x = 100
            this.speedbutton.y = 310

            this.speedbutton2.x = 100
            this.speedbutton2.y = 310

            if (($.mouse.x > this.speedbutton.x - 20 && $.mouse.x < this.speedbutton.x + 20) && ($.mouse.y > this.speedbutton.y - 20 && $.mouse.y < this.speedbutton.y + 20)) {
                this.popup.draw()
                $.colour.fill = "black"
                $.text.font = this.fonttitle
                $.text.size = 20
                $.text.print($.w / 2, 640, "SPEED BRANCH LEVEL 2", 800)
                $.text.font = this.font
                $.text.size = 16
                $.colour.fill = "green"
                $.text.print($.w / 2, 675, "UPGRADE AND INCREASE TROOP SPEED BY {X}% FOR {XXX} SILK?", 450)
            }
        }

        if (this.speedbranchstate == 3 || this.speedbranchstate > 3) {
            this.speedbranchstage3.draw()
            this.speedbutton.x = 70
            this.speedbutton.y = 270

            this.speedbutton2.x = 70
            this.speedbutton2.y = 270

            if (($.mouse.x > this.speedbutton.x - 20 && $.mouse.x < this.speedbutton.x + 20) && ($.mouse.y > this.speedbutton.y - 20 && $.mouse.y < this.speedbutton.y + 20)) {
                this.popup.draw()
                $.colour.fill = "black"
                $.text.font = this.fonttitle
                $.text.size = 20
                $.text.print($.w / 2, 640, "SPEED BRANCH LEVEL 3", 800)
                $.text.font = this.font
                $.text.size = 20
                $.colour.fill = "red"
                $.text.print($.w / 2, 675, "MAX LEVEL REACHED", 450)
            }
        }

        // silk branch

        if (($.mouse.x > this.silkbutton.x - 20 && $.mouse.x < this.silkbutton.x + 20) && ($.mouse.y > this.silkbutton.y - 20 && $.mouse.y < this.silkbutton.y + 20)) {
            this.silkbutton2.draw()
            if (this.silkbranchstate == 1) {
                this.popup.draw()
                $.colour.fill = "black"
                $.text.font = this.fonttitle
                $.text.size = 20
                $.text.print($.w / 2, 640, "SILK BRANCH LEVEL 1", 800)
                $.text.font = this.font
                $.text.size = 15
                $.colour.fill = "green"
                $.text.print($.w / 2, 675, "UPGRADE AND INCREASE SILK PRODUCTION BY {X}% FOR {XXX} SILK?", 450)
            }
            if ($.mouse.leftReleased) {
                this.silkbranchstate += 1
            }
        }

        if (this.silkbranchstate == 2) {
            this.silkbranchstage2.draw()
            this.silkbutton.x = 740
            this.silkbutton.y = 500

            this.silkbutton2.x = 740
            this.silkbutton2.y = 500

            if (($.mouse.x > this.silkbutton.x - 20 && $.mouse.x < this.silkbutton.x + 20) && ($.mouse.y > this.silkbutton.y - 20 && $.mouse.y < this.silkbutton.y + 20)) {
                this.popup.draw()
                $.colour.fill = "black"
                $.text.font = this.fonttitle
                $.text.size = 20
                $.text.print($.w / 2, 640, "SILK BRANCH LEVEL 2", 800)
                $.text.font = this.font
                $.text.size = 15
                $.colour.fill = "green"
                $.text.print($.w / 2, 675, "UPGRADE AND INCREASE SILK PRODUCTION BY {X}% FOR {XXX} SILK?", 450)
            }
        }

        if (this.silkbranchstate == 3 || this.silkbranchstate > 3) {
            this.silkbranchstage3.draw()
            this.silkbutton.x = 740
            this.silkbutton.y = 500

            this.silkbutton2.x = 740
            this.silkbutton2.y = 500

            if (($.mouse.x > this.silkbutton.x - 20 && $.mouse.x < this.silkbutton.x + 20) && ($.mouse.y > this.silkbutton.y - 20 && $.mouse.y < this.silkbutton.y + 20)) {
                this.popup.draw()
                $.colour.fill = "black"
                $.text.font = this.fonttitle
                $.text.size = 20
                $.text.print($.w / 2, 640, "SILK BRANCH LEVEL 3", 800)
                $.text.font = this.font
                $.text.size = 20
                $.colour.fill = "red"
                $.text.print($.w / 2, 675, "MAX LEVEL REACHED", 450)
            }
        }


        // fibre branch

        if (($.mouse.x > this.fibrebutton.x - 20 && $.mouse.x < this.fibrebutton.x + 20) && ($.mouse.y > this.fibrebutton.y - 20 && $.mouse.y < this.fibrebutton.y + 20)) {
            this.fibrebutton2.draw()
            if (this.fibrebranchstate == 1) {
                this.popup.draw()
                $.colour.fill = "black"
                $.text.font = this.fonttitle
                $.text.size = 20
                $.text.print($.w / 2, 640, "FIBRE BRANCH LEVEL 1", 800)
                $.text.font = this.font
                $.text.size = 15
                $.colour.fill = "green"
                $.text.print($.w / 2, 675, "UPGRADE AND INCREASE FIBRE PRODUCTION BY {X}% FOR {XXX} SILK?", 450)
            }
            if ($.mouse.leftReleased) {
                this.fibrebranchstate += 1
            }
        }

        if (this.fibrebranchstate == 2) {
            this.fibrebranchstage2.draw()
            this.fibrebutton.x = 65
            this.fibrebutton.y = 430

            this.fibrebutton2.x = 65
            this.fibrebutton2.y = 430

            if (($.mouse.x > this.fibrebutton.x - 20 && $.mouse.x < this.fibrebutton.x + 20) && ($.mouse.y > this.fibrebutton.y - 20 && $.mouse.y < this.fibrebutton.y + 20)) {
                this.popup.draw()
                $.colour.fill = "black"
                $.text.font = this.fonttitle
                $.text.size = 20
                $.text.print($.w / 2, 640, "FIBRE BRANCH LEVEL 2", 800)
                $.text.font = this.font
                $.text.size = 15
                $.colour.fill = "green"
                $.text.print($.w / 2, 675, "UPGRADE AND INCREASE FIBRE PRODUCTION BY {X}% FOR {XXX} SILK?", 450)
            }
        }

        if (this.fibrebranchstate == 3 || this.fibrebranchstate > 3) {
            this.fibrebranchstage3.draw()
            this.fibrebutton.x = 45
            this.fibrebutton.y = 380

            this.fibrebutton2.x = 45
            this.fibrebutton2.y = 380

            if (($.mouse.x > this.fibrebutton.x - 20 && $.mouse.x < this.fibrebutton.x + 20) && ($.mouse.y > this.fibrebutton.y - 20 && $.mouse.y < this.fibrebutton.y + 20)) {
                this.popup.draw()
                $.colour.fill = "black"
                $.text.font = this.fonttitle
                $.text.size = 20
                $.text.print($.w / 2, 640, "FIBRE BRANCH LEVEL 3", 800)
                $.text.font = this.font
                $.text.size = 20
                $.colour.fill = "red"
                $.text.print($.w / 2, 675, "MAX LEVEL REACHED", 450)
            }
        }


        // health branch

        if (($.mouse.x > this.healthbutton.x - 20 && $.mouse.x < this.healthbutton.x + 20) && ($.mouse.y > this.healthbutton.y - 20 && $.mouse.y < this.healthbutton.y + 20)) {
            this.healthbutton2.draw()
            if (this.healthbranchstate == 1) {
                this.popup.draw()
                $.colour.fill = "black"
                $.text.font = this.fonttitle
                $.text.size = 20
                $.text.print($.w / 2, 640, "HEALTH BRANCH LEVEL 1", 800)
                $.text.font = this.font
                $.text.size = 16
                $.colour.fill = "green"
                $.text.print($.w / 2, 675, "UPGRADE AND INCREASE TREE HEALTH BY {X} FOR {XXX} SILK?", 450)
            }
            if ($.mouse.leftReleased) {
                this.healthbranchstate += 1
            }
        }

        if (this.healthbranchstate == 2) {
            this.healthbranchstage2.draw()
            this.healthbutton.x = 660
            this.healthbutton.y = 190

            this.healthbutton2.x = 660
            this.healthbutton2.y = 190

            if (($.mouse.x > this.healthbutton.x - 20 && $.mouse.x < this.healthbutton.x + 20) && ($.mouse.y > this.healthbutton.y - 20 && $.mouse.y < this.healthbutton.y + 20)) {
                this.popup.draw()
                $.colour.fill = "black"
                $.text.font = this.fonttitle
                $.text.size = 20
                $.text.print($.w / 2, 640, "HEALTH BRANCH LEVEL 2", 800)
                $.text.font = this.font
                $.text.size = 16
                $.colour.fill = "green"
                $.text.print($.w / 2, 675, "UPGRADE AND INCREASE TREE HEALTH BY {X} FOR {XXX} SILK?", 450)
            }
        }

        if (this.healthbranchstate == 3 || this.healthbranchstate > 3) {
            this.healthbranchstage3.draw()
            this.healthbutton.x = 650
            this.healthbutton.y = 110

            this.healthbutton2.x = 650
            this.healthbutton2.y = 110

            if (($.mouse.x > this.healthbutton.x - 20 && $.mouse.x < this.healthbutton.x + 20) && ($.mouse.y > this.healthbutton.y - 20 && $.mouse.y < this.healthbutton.y + 20)) {
                this.popup.draw()
                $.colour.fill = "black"
                $.text.font = this.fonttitle
                $.text.size = 20
                $.text.print($.w / 2, 640, "HEALTH BRANCH LEVEL 3", 800)
                $.text.font = this.font
                $.text.size = 20
                $.colour.fill = "red"
                $.text.print($.w / 2, 675, "MAX LEVEL REACHED", 450)
            }
        }

    }

    getRequests() {
        const requestsToBeReturned = this.requests;
        this.requests = [];
        return requestsToBeReturned;
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