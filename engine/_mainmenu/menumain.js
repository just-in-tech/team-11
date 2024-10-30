import { $ } from "../../lib/Pen.js";
import { Gui } from "../gui.js";
export class mainmenu{
    constructor(){
        this.btnpositions=450
        this.playbtn = $.makeButton(450,this.btnpositions,100,50,"play");
        this.playbtn.background = "green";

        this.btnpositions+=80;
        this.creditsbtn = $.makeButton(450,this.btnpositions,100,50,"credits");
        this.creditsbtn.background = "white";
        
        this.requests=[];
    }

     draw(data){
    //console.log("mainmenu.draw")
    this.playbtn.draw()

    this.creditsbtn.draw()
    if(this.playbtn.up){
        data.gameState="battle";
    }


    }



 draw_credits(){
    
}

getRequests() {
    const requestsToBeReturned = this.requests;
    this.requests = [];
    return requestsToBeReturned;
}
}