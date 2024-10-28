import { $ } from "../../lib/Pen.js";

    

    export function draw_screen(){
        let play = $.makeButton(100,100,100,50,"play");
        play.background = "white";
        play.draw()
    }