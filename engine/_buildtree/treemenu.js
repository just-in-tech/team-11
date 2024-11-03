import { $ } from "../../lib/Pen.js";

export class BuildTreeScene {

    constructor() {
        this.treeimg = $.loadImage($.w / 2, 450, "initialtrunk.png")
        this.background = $.loadImage($.w / 2, $.h / 2, "scene.jpg")

        // branches

        this.troopbranchinitial = $.loadImage($.w / 2, 450, "troopbranchinitial.png")
        this.troopbranchstage2 = $.loadImage($.w / 2, 450, "troopbranch2.png")
        this.troopbranchstage3 = $.loadImage($.w / 2, 450, "troopbranch3.png")

        this.healthbranchinitial = $.loadImage($.w / 2, 450, "initialhealthbranch.png")
        this.healthbranchstage2 = $.loadImage($.w / 2, 450, "healthbranch2.png")
        this.healthbranchstage3 = $.loadImage($.w / 2, 450, "healthbranch3.png")

        this.fibrebranchinitial = $.loadImage($.w / 2, 450, "initialfibrebranch.png")
        this.fibrebranchstage2 = $.loadImage($.w / 2, 450, "fibrebranch2.png")
        this.fibrebranchstage3 = $.loadImage($.w / 2, 450, "fibrebranch3.png")

        this.silkbranchinitial = $.loadImage($.w / 2, 450, "initialsilkbranch.png")
        this.silkbranchstage2 = $.loadImage($.w / 2, 450, "silkbranch2.png")
        this.silkbranchstage3 = $.loadImage($.w / 2, 450, "silkbranch3.png")

        this.speedbranchinitial = $.loadImage($.w / 2, 450, "initialspeedbranch.png")
        this.speedbranchstage2 = $.loadImage($.w / 2, 450, "speedbranch2.png")
        this.speedbranchstage3 = $.loadImage($.w / 2, 450, "speedbranch3.png")

        this.damagebranchinitial = $.loadImage($.w / 2, 450, "initialdamagebranch.png")
        this.damagebranchstage2 = $.loadImage($.w / 2, 450, "damagebranch2.png")
        this.damagebranchstage3 = $.loadImage($.w / 2, 450, "damagebranch3.png")

        // buttons

        this.troopbutton = $.loadImage(660, 315, "button1.png")
        this.fibrebutton = $.loadImage(65, 430, "button1.png")
        this.silkbutton = $.loadImage(740, 500, "button1.png")
        this.healthbutton = $.loadImage(620, 190, "button1.png")
        this.speedbutton = $.loadImage(120, 310, "button1.png")
        this.damagebutton = $.loadImage(270, 200, "button1.png")

        this.troopbutton2 = $.loadImage(660, 315, "button2.png")
        this.fibrebutton2 = $.loadImage(65, 430, "button2.png")
        this.silkbutton2 = $.loadImage(740, 500, "button2.png")
        this.healthbutton2 = $.loadImage(620, 190, "button2.png")
        this.speedbutton2 = $.loadImage(120, 310, "button2.png")
        this.damagebutton2 = $.loadImage(270, 200, "button2.png")

        // pop-up box

        this.popup = $.loadImage($.w / 2, 670, "popup.png")

        // font

        this.font = $.loadCustomFont("Pixelify Medium", "PixelifySans-Medium.ttf")

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
        this.popup.h = 150
        //this.popup.w = 450

        // display opening text

        if ($.frameCount == this.currentframe || $.frameCount < this.currentframe + 1000) {

            $.text.size = 60
            $.colour.fill = "white"
            $.text.font = this.font
            $.text.print($.w / 2, 80, "BUILD YOUR TREE", 800)
        }


    }

    update(data) {

        // check gamestate

        // if(this.battlebtn.up){
        //     data.gameState="battle";
        //     }

        // UPGRADE BRANCHES

        // troop branch

        if (($.mouse.x > scene.troopbutton.x - 20 && $.mouse.x < scene.troopbutton.x + 20) && ($.mouse.y > scene.troopbutton.y - 20 && $.mouse.y < scene.troopbutton.y + 20)) {
            scene.troopbutton2.draw()
            this.popup.draw()
            $.text.size = 30
            $.colour.fill = "black"
            $.text.font = this.font
            $.text.print($.w / 2, 680, "BUY {TROOP} FOR {XXX} SILK?", 800)
            if ($.mouse.leftReleased) {
                scene.troopbranchstate += 1
            }
        }

        if (scene.troopbranchstate == 2) {
            scene.troopbranchstage2.draw()
            scene.troopbutton.x = 680
            scene.troopbutton.y = 320

            scene.troopbutton2.x = 680
            scene.troopbutton2.y = 320
        }

        if (scene.troopbranchstate == 3 || scene.troopbranchstate > 3) {
            scene.troopbranchstage3.draw()
            scene.troopbutton.x = 730
            scene.troopbutton.y = 280

            scene.troopbutton2.x = 730
            scene.troopbutton2.y = 280
        }

        // damage branch

        if (($.mouse.x > scene.damagebutton.x - 20 && $.mouse.x < scene.damagebutton.x + 20) && ($.mouse.y > scene.damagebutton.y - 20 && $.mouse.y < scene.damagebutton.y + 20)) {
            scene.damagebutton2.draw()
            if ($.mouse.leftReleased) {
                scene.damagebranchstate += 1
            }
        }

        if (scene.damagebranchstate == 2) {
            scene.damagebranchstage2.draw()
            scene.damagebutton.x = 120
            scene.damagebutton.y = 160

            scene.damagebutton2.x = 120
            scene.damagebutton2.y = 160
        }

        if (scene.damagebranchstate == 3 || scene.damagebranchstate > 3) {
            scene.damagebranchstage3.draw()
            scene.damagebutton.x = 160
            scene.damagebutton.y = 70

            scene.damagebutton2.x = 160
            scene.damagebutton2.y = 70
        }


        // speed branch

        if (($.mouse.x > scene.speedbutton.x - 20 && $.mouse.x < scene.speedbutton.x + 20) && ($.mouse.y > scene.speedbutton.y - 20 && $.mouse.y < scene.speedbutton.y + 20)) {
            scene.speedbutton2.draw()
            if ($.mouse.leftReleased) {
                scene.speedbranchstate += 1
            }
        }

        if (scene.speedbranchstate == 2) {
            scene.speedbranchstage2.draw()
            scene.speedbutton.x = 100
            scene.speedbutton.y = 310

            scene.speedbutton2.x = 100
            scene.speedbutton2.y = 310
        }

        if (scene.speedbranchstate == 3 || scene.speedbranchstate > 3) {
            scene.speedbranchstage3.draw()
            scene.speedbutton.x = 70
            scene.speedbutton.y = 270

            scene.speedbutton2.x = 70
            scene.speedbutton2.y = 270
        }

        // silk branch

        if (($.mouse.x > scene.silkbutton.x - 20 && $.mouse.x < scene.silkbutton.x + 20) && ($.mouse.y > scene.silkbutton.y - 20 && $.mouse.y < scene.silkbutton.y + 20)) {
            scene.silkbutton2.draw()
            if ($.mouse.leftReleased) {
                scene.silkbranchstate += 1
            }
        }

        if (scene.silkbranchstate == 2) {
            scene.silkbranchstage2.draw()
            scene.silkbutton.x = 740
            scene.silkbutton.y = 500

            scene.silkbutton2.x = 740
            scene.silkbutton2.y = 500
        }

        if (scene.silkbranchstate == 3 || scene.silkbranchstate > 3) {
            scene.silkbranchstage3.draw()
            scene.silkbutton.x = 740
            scene.silkbutton.y = 500

            scene.silkbutton2.x = 740
            scene.silkbutton2.y = 500
        }


        // fibre branch

        if (($.mouse.x > scene.fibrebutton.x - 20 && $.mouse.x < scene.fibrebutton.x + 20) && ($.mouse.y > scene.fibrebutton.y - 20 && $.mouse.y < scene.fibrebutton.y + 20)) {
            scene.fibrebutton2.draw()
            if ($.mouse.leftReleased) {
                scene.fibrebranchstate += 1
            }
        }

        if (scene.fibrebranchstate == 2) {
            scene.fibrebranchstage2.draw()
            scene.fibrebutton.x = 65
            scene.fibrebutton.y = 430

            scene.fibrebutton2.x = 65
            scene.fibrebutton2.y = 430
        }

        if (scene.fibrebranchstate == 3 || scene.fibrebranchstate > 3) {
            scene.fibrebranchstage3.draw()
            scene.fibrebutton.x = 45
            scene.fibrebutton.y = 380

            scene.fibrebutton2.x = 45
            scene.fibrebutton2.y = 380
        }


        // health branch

        if (($.mouse.x > scene.healthbutton.x - 20 && $.mouse.x < scene.healthbutton.x + 20) && ($.mouse.y > scene.healthbutton.y - 20 && $.mouse.y < scene.healthbutton.y + 20)) {
            scene.healthbutton2.draw()
            if ($.mouse.leftReleased) {
                scene.healthbranchstate += 1
            }
        }

        if (scene.healthbranchstate == 2) {
            scene.healthbranchstage2.draw()
            scene.healthbutton.x = 660
            scene.healthbutton.y = 190

            scene.healthbutton2.x = 660
            scene.healthbutton2.y = 190
        }

        if (scene.healthbranchstate == 3 || scene.healthbranchstate > 3) {
            scene.healthbranchstage3.draw()
            scene.healthbutton.x = 650
            scene.healthbutton.y = 110

            scene.healthbutton2.x = 650
            scene.healthbutton2.y = 110
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