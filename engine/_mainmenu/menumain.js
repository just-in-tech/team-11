import { $ } from "../../lib/Pen.js";

export class mainmenu{
    constructor(){
        this.btnpositions=$.h/2
        this.playbtn = $.makeButton($.w/2,this.btnpositions,100,50,"play");
        this.playbtn.background = "green";

        this.btnpositions+=80;
        this.creditsbtn = $.makeButton($.w/2,this.btnpositions,100,50,"instructions");
        this.creditsbtn.background = "white";

        this.btnpositions+=80;
        this.creditsbtn = $.makeButton($.w/2,this.btnpositions,100,50,"credits");
        this.creditsbtn.background = "white";
        this.popupState="none"
        
        
        this.requests=[];
    }

     draw(data){
    
    this.playbtn.draw()
    if(this.playbtn.up){
        data.gameState="treemenu";
    }

    this.creditsbtn.draw()
    if(this.creditsbtn.up){
        this.popupState="credits";
        }
    
    this.popupManager();

    }





creditsPopup(){
    let spaceround=50

    this.popuptemplate(spaceround,spaceround,$.h-spaceround*2,$.w-spaceround*2,"Credits")

}

popupManager(){
    if (this.popupState == "instructions") {
        

        
    } else if (this.popupState == "credits") {
        this.creditsPopup()
    }
 }

 popuptemplate(x,y,h,w,title){
    $.shape.roundedRectangle(x,y,w,h,10)
    this.closebtnWidth=35
    this.closebtnHeight=35



    this.closebtn = $.makeButton(w+x-this.closebtnWidth/2-10,y+this.closebtnHeight/2+10,this.closebtnWidth,this.closebtnHeight,"X");
    this.closebtn.background="red"
    this.closebtn.border="red"
    this.closebtn.draw();
    if(this.closebtn.up){
        this.popupState="none";
    }
    $.text.colour.fill="black"
    $.text.background="black"
    $.text.print(w/2+x,y+20,title,);
    

 }

getRequests() {
    const requestsToBeReturned = this.requests;
    this.requests = [];
    return requestsToBeReturned;
}
}