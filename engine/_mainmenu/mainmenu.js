import { $ } from "../../lib/Pen.js";

export class MainMenu {
    constructor() {
        this.font = $.loadCustomFont("Pixelify Medium", "./engine/_mainmenu/PixelifySans-Medium.ttf")
        this.background = $.loadImage($.w / 2, $.h / 2, "./engine/_mainmenu/menubackground.png")

        // buttons

        this.playbutton = $.makeButton($.w / 2, $.h / 2 + 50, 200, 70, "START")
        this.instructionsbutton = $.makeButton($.w / 2, $.h / 2 + 150, 200, 70, "INSTRUCTIONS")

        // pop-up instructions

        //this.popupbackground = $.makeBoxCollider($.w / 2, $.h / 2 + 100, 700, 700)
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
    }

    update(data) {
        if (this.playbutton.down) {
            // change to tree build gamestate
            data.gameState="treemenu";
        }

        if (this.instructionsbutton.down) {
            // instructions pop-up
            this.instructionstate = 1
        }
        if (this.instructionstate == 1) {
            //this.popupbackground.draw()
            $.shape.rectangle($.w / 2, $.h / 2 + 100, 700, 700)
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

// export class mainmenu{
//     constructor(){
//         this.btnpositions=$.h/2
//         this.playbtn = $.makeButton($.w/2,this.btnpositions,100,50,"play");
//         this.playbtn.background = "green";

//         this.btnpositions+=80;
//         this.creditsbtn = $.makeButton($.w/2,this.btnpositions,100,50,"instructions");
//         this.creditsbtn.background = "white";

//         this.btnpositions+=80;
//         this.creditsbtn = $.makeButton($.w/2,this.btnpositions,100,50,"credits");
//         this.creditsbtn.background = "white";
//         this.popupState="none"
        
        
//         this.requests=[];
//     }

//      draw(data){
    
//     this.playbtn.draw()
//     if(this.playbtn.up){
//         data.gameState="treemenu";
//     }

//     this.creditsbtn.draw()
//     if(this.creditsbtn.up){
//         this.popupState="credits";
//         }
    
//     this.popupManager();

//     }





// creditsPopup(){
//     let spaceround=50

//     this.popuptemplate(spaceround,spaceround,$.h-spaceround*2,$.w-spaceround*2,"Credits")

// }

// popupManager(){
//     if (this.popupState == "instructions") {
        

        
//     } else if (this.popupState == "credits") {
//         this.creditsPopup()
//     }
//  }

//  popuptemplate(x,y,h,w,title){
//     $.shape.roundedRectangle(x,y,w,h,10)
//     this.closebtnWidth=35
//     this.closebtnHeight=35



//     this.closebtn = $.makeButton(w+x-this.closebtnWidth/2-10,y+this.closebtnHeight/2+10,this.closebtnWidth,this.closebtnHeight,"X");
//     this.closebtn.background="red"
//     this.closebtn.border="red"
//     this.closebtn.draw();
//     if(this.closebtn.up){
//         this.popupState="none";
//     }
//     $.colour.fill="black"
//     $.text.print(w/2+x,y+20,title,);
    

//  }

// getRequests() {
//     const requestsToBeReturned = this.requests;
//     this.requests = [];
//     return requestsToBeReturned;
// }
// }