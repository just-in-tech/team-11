import { $ } from "../../lib/Pen.js";

export class MainMenu {
    constructor() {
        this.font = $.loadCustomFont("Pixelify Medium", "./engine/_mainmenu/PixelifySans-Medium.ttf")
        this.background = $.loadImage($.w / 2, $.h / 2, "./engine/_mainmenu/menubackground.png")

        // buttons

        this.playbutton = $.makeButton($.w / 2, $.h / 2 + 50, 200, 70, "START")
        this.instructionsbutton = $.makeButton($.w / 2, $.h / 2 + 150, 200, 70, "INSTRUCTIONS")

        // pop-up instructions

        //this.popupbackground = $.loadImage($.w / 2, $.h / 2, "./engine/_mainmenu/pixelborder.png")
        this.exitinstbutton = $.makeButton(720, 80, 30, 30, "X")

        // states

        this.instructionstate = 0

        this.requests = []
    }

    draw() {
        this.background.draw()
        this.background.w = 950
        this.background.h = 1000

        $.text.size = 80
        $.text.font = this.font

        $.text.print($.w / 2, 120, "'TREE GAME'", 800)

        this.playbutton.draw()
        this.instructionsbutton.draw()

        // this.popupbackground.h = 700
        // this.popupbackground.w = 700
    }

    update(data) {
        if (this.playbutton.down) {
            // change to tree build gamestate
            data.gameState = "treemenu";
        }

        if (this.instructionsbutton.down) {
            // instructions pop-up
            this.instructionstate = 1
        }
        if (this.instructionstate == 1) {
            $.colour.fill = "#e8e8e8"
            $.shape.rectangle($.w / 2, $.h / 2, 700, 700)
            //this.popupbackground.draw()
            $.colour.fill = "#d1d1d1"
            $.shape.rectangle(250, 250, 295, 270)
            $.shape.rectangle(550, 250, 295, 270)
            $.shape.rectangle(250, 525, 295, 270)
            $.shape.rectangle(550, 525, 295, 270)
            $.colour.fill = "black"
            $.text.size = 15
            $.text.print(250, 260, "Images to be added here later", 285)
            $.text.print(250, 160, "1. Use silk to upgrade tree branches to increase your chances of beating the enemy in battle", 285)
            $.text.print(550, 160, "2. Head to battle - use fibre to spawn the best combination of allies to defeat the enemy", 285)
            $.text.print(250, 435, "3. Lost? Use silk won in battle to continue upgrading tree", 285)
            $.text.print(550, 435, "4. Keep strategising and upgrading until you defeat the enemy", 285)
            this.exitinstbutton.draw()
            if (this.exitinstbutton.down) {
                this.instructionstate = 0
            }
        }
    }

    getRequests() {
        const requestsToBeReturned = this.requests;
        this.requests = [];
        return requestsToBeReturned;
    }
}
