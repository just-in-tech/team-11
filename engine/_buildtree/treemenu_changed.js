import { $, text } from "../../lib/Pen.js";



export class BuildTreeScene {

    constructor() {

        //init varibles
        this.firstTime=1

        //base images

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

        this.activebutton=$.loadImage(660, 315, "./engine/_buildtree/button2.png")

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

        this.troopbranchcurrentstage=this.troopbranchinitial
        
        // health branch

        this.healthbranchcurrentstage=this.healthbranchinitial

        // fibre branch

        this.fibrebranchcurrentstage=this.fibrebranchinitial

        // silk branch

        this.silkbranchcurrentstage=this.silkbranchinitial

        // speed branch

        this.speedbranchcurrentstage=this.speedbranchinitial

        // damage branch

        this.damagebranchcurrentstage=this.damagebranchinitial

        //create buttons

        
        


        

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
        if(this.firstTime==1){
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

            this.firstTime=0
        }



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

        // popup

        //this.popup.draw()
        this.popup.h = 150
        //this.popup.w = 450

        // display opening text

        //if ($.frameCount == this.currentframe || $.frameCount < this.currentframe + 1000) {

            $.text.size = 60
            $.colour.fill = "blue"
            $.text.font = this.font
            $.text.print($.w / 2, 80, "BUILD YOUR TREE", 800)
        //}
    }

    update(data) {

        // check gamestate

        // if(this.battlebtn.up){
        //     data.gameState="battle";
        //     }



        // UPGRADE BRANCHES

        // troop branch

        //$.math.distance()

        if ($.math.distance(this.troopbutton.x,this.troopbutton.y,$.mouse.x,$.mouse.y)<=30) {
            
            this.activebutton.x = this.troopbutton.x
            this.activebutton.y = this.troopbutton.y
            this.activebutton.draw()
            
            //this.popupManager("troop",this.troopbranchstate,data);
            if ($.mouse.leftReleased) {
                this.troopbranchstate += 1
                if(this.troopbranchstate == 2){
                    this.setnewstage("troopbranchcurrentstage",this.troopbranchcurrentstage,this.troopbranchstage2,600,600,this.troopbutton,680,320)
                    
                }else if (this.troopbranchstate == 3){
                    this.setnewstage("troopbranchcurrentstage",this.troopbranchcurrentstage,this.troopbranchstage3,600,600,this.troopbutton,730,280)

                }
            }
        }
        
        this.troopbranchcurrentstage.draw()

        // damage branch

        if ($.math.distance(this.damagebutton.x,this.damagebutton.y,$.mouse.x,$.mouse.y)<=30) {
            
            this.activebutton.x = this.damagebutton.x
            this.activebutton.y = this.damagebutton.y
            this.activebutton.draw()
            this.popupManager("damage",this.damagebranchstate,data);
            if ($.mouse.leftReleased) {
                this.damagebranchstate += 1
                if (this.damagebranchstate == 2) {
                    this.setnewstage("damagebranchcurrentstage",this.damagebranchcurrentstage,this.damagebranchstage2,900,900,this.damagebutton,120,160)

                }else if (this.damagebranchstate == 3) {
                    this.setnewstage("damagebranchcurrentstage",this.damagebranchcurrentstage,this.damagebranchstage3,900,900,this.damagebutton,160,70)
                    
                }
            }
        }
        this.damagebranchcurrentstage.draw()

        


        // speed branch

        if ($.math.distance(this.speedbutton.x,this.speedbutton.y,$.mouse.x,$.mouse.y)<=30) {
            
            this.activebutton.x = this.speedbutton.x
            this.activebutton.y = this.speedbutton.y
            this.activebutton.draw()

            this.popupManager("speed",this.speedbranchstate,data);
            if ($.mouse.leftReleased) {
                this.speedbranchstate += 1
                if (this.speedbranchstate == 2) {
                    this.setnewstage("speedbranchcurrentstage",this.speedbranchcurrentstage,this.speedbranchstage2,600,600,this.speedbutton,100,310)

                }else if (this.speedbranchstate == 3) {
                    this.setnewstage("speedbranchcurrentstage",this.speedbranchcurrentstage,this.speedbranchstage3,600,600,this.speedbutton,70,270)

                }
            }
        }
        this.speedbranchcurrentstage.draw()

        

        // silk branch

        if ($.math.distance(this.silkbutton.x,this.silkbutton.y,$.mouse.x,$.mouse.y)<=30) {
            
            this.activebutton.x = this.silkbutton.x
            this.activebutton.y = this.silkbutton.y
            this.activebutton.draw()
            if ($.mouse.leftReleased) {
                this.silkbranchstate += 1
                if (this.silkbranchstate == 2) {
                    this.setnewstage("silkbranchcurrentstage",this.silkbranchcurrentstage,this.silkbranchstage2,600,600,this.silkbutton,740,500)

                }else if (this.silkbranchstate == 3) {
                    this.setnewstage("silkbranchcurrentstage",this.silkbranchcurrentstage,this.silkbranchstage3,600,600,this.silkbutton,740,500)

                }
            }
        }
        this.silkbranchcurrentstage.draw()

        // fibre branch
        console.log($.math.distance(this.fibrebutton.x,this.fibrebutton.y,$.mouse.x,$.mouse.y)<=30)

        if ($.math.distance(this.fibrebutton.x,this.fibrebutton.y,$.mouse.x,$.mouse.y)<=30) {
            
            this.activebutton.x = this.fibrebutton.x
            this.activebutton.y = this.fibrebutton.y
            this.activebutton.draw()
            if ($.mouse.leftReleased) {
                this.fibrebranchstate += 1
                if (this.fibrebranchstate == 2) {
                    this.setnewstage("fibrebranchcurrentstage",this.fibrebranchcurrentstage,this.fibrebranchstage2,600,600,this.fibrebutton,65,430)
                    
                }else if (this.fibrebranchstate == 3) {
                    this.setnewstage("fibrebranchcurrentstage",this.fibrebranchcurrentstage,this.fibrebranchstage3,900,900,this.fibrebutton,45,380)
                    
                }
            }
        }

        this.fibrebranchcurrentstage.draw()

        // health branch

        if ($.math.distance(this.healthbutton.x,this.healthbutton.y,$.mouse.x,$.mouse.y)<=30) {
            
            this.activebutton.x = this.healthbutton.x
            this.activebutton.y = this.healthbutton.y
            this.activebutton.draw()

            this.popupManager("health",this.healthbranchstate,data);
            if ($.mouse.leftReleased) {
                this.healthbranchstate += 1
                if (this.healthbranchstate == 2) {
                    this.setnewstage("healthbranchcurrentstage",this.healthbranchcurrentstage,this.healthbranchstage2,900,900,this.healthbutton,660,190)        
                    
                }else if (this.healthbranchstate == 3 ) {
                    this.setnewstage("healthbranchcurrentstage",this.healthbranchcurrentstage,this.healthbranchstage3,900,900,this.healthbutton,650,110) 
                }
            }
        }
        this.healthbranchcurrentstage.draw()
    }

    setnewstage(currentBranchString,currentBranchStage,newBranchStage,w,h,button,buttonx,buttony){
        console.log(currentBranchStage, newBranchStage)
        //currentBranchStage=newBranchStage
        this[currentBranchString]=newBranchStage
        this[currentBranchString].w = w
        this[currentBranchString].h = h
                    
        button.x = buttonx
        button.y = buttony
    }

    getRequests() {
        const requestsToBeReturned = this.requests;
        this.requests = [];
        return requestsToBeReturned;
    }
    popupTemplate(heading,h,y){
        let textpos=y+10
        
        this.popup.h=h
        this.popup.w=$.w*0.65
        
        this.popup.y=y+h/2
        this.popup.draw()
        $.colour.fill = "black"
        $.text.alignment.y="top"
        $.text.font = this.fonttitle
        $.text.size = 20
        $.text.print($.w / 2, textpos, heading, this.popup.w);


    }
    
    
    popupManager(branchname,branchlevel,data){
        this.notices={
            troopbranch:{
                display:"custom text", //options "customText",statstable
                level2:{
                    heading:"unlock eagle",
                    description:"can attack at range, moves faster then the ant and also has more health",
                },
                level3:{
                    heading:"unlock bear",
                    discription:"moves slower then the eagle and faster then the ant but can do more damage and has more health",

                },
            },
            damagebranch:{
                display:"statstable", //options "customText",statstable
                stat:"damage", //the name of the stat in the object playerStats
            },
            speedbranch:{
                display:"statstable", //options "customText",statstable
                stat:"speed", //the name of the stat in the object playerStats
            },
            silkbranch:{
                level2:{

                },
                level3:{

                },
            },
            fibrebranch:{
                level2:{

                },
                level3:{

                },
            },
            healthbranch:{
                display:"statstable", //options "customText",statstable
                stat:"maxhealth", //the name of the stat in the object playerStats
            },
        }

        let varbranchname=branchname+"branch";
            console.log(varbranchname)
            let nextbranchlevel=branchlevel+1
            let varbranchlevel="level"+nextbranchlevel
            console.log(varbranchlevel)
        console.log(this.notices[varbranchname].stat,branchname,branchlevel);
        if(this.notices[varbranchname].display==="statstable"){


            
            
            
            let textposition=600
            if(branchlevel<3){
                this.popupTemplate("upgrade " +branchname+" branch to level "+nextbranchlevel,170,textposition)
                textposition+=80
                $.text.font = this.font
                $.text.size = 15
                $.text.print($.w/2,textposition,"upgrade ant "+branchname+" to "+data.statsUpgrades[varbranchname][varbranchlevel].ant[this.notices[varbranchname].stat]+" from "+data.playerStats.ant[this.notices[varbranchname].stat])
                textposition+=18
                $.text.print($.w/2,textposition,"upgrade eagle "+branchname+" to "+data.statsUpgrades[varbranchname][varbranchlevel].eagle[this.notices[varbranchname].stat]+" from "+data.playerStats.eagle[this.notices[varbranchname].stat])
                textposition+=18
                $.text.print($.w/2,textposition,"upgrade bear "+branchname+" to "+data.statsUpgrades[varbranchname][varbranchlevel].bear[this.notices[varbranchname].stat]+" from "+data.playerStats.bear[this.notices[varbranchname].stat])
                textposition+=18
                if(1){
                    $.colour.fill = "green"
                    $.text.print($.w/2,textposition,"use .... silk to purchurse")
                }else{
                    $.colour.fill = "red"
                    $.text.print($.w/2,textposition,"you require .... silk to purchuse")
                }

            }else if(branchlevel>=3){
                textposition=700
                this.popupTemplate(branchname+" branch is fully upgraded",70,textposition)
                textposition+=40
                $.text.font = this.font
                $.text.size = 20
                $.colour.fill = "green"
                $.text.print($.w/2,textposition,"fully upgraded")
            }
            
            
        }else if(this.notices[varbranchname][varbranchlevel].display=="custom text"){
            $.text.font = this.font
            $.text.size = 15
            


            this.popupTemplate(this.notices[varbranchname].heading,height,600)

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