import { $ } from "../../lib/Pen.js";

    let playbtn;
    let creditsbtn;

    export function draw_menuscreen(){
        let btnpositions=450
        playbtn = $.makeButton(450,btnpositions,100,50,"play");
        playbtn.background = "green";
        playbtn.draw()

        btnpositions+=80;
        creditsbtn = $.makeButton(450,btnpositions,100,50,"credits");
        creditsbtn.background = "white";
        creditsbtn.draw()
    }

    export function remove_menuscreen(){
        playbtn.remove();
        creditsbtn.remove();
    }

    export function draw_credits(){

    }