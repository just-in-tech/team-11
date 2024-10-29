import { draw_menuscreen, remove_menuscreen } from "./_mainmenu/main.js";
let current_gamestate;
export function change_gamestate(wantedstate){
    //remove what is no the screen currently
    if(current_gamestate=="mainmenu"){
    remove_menuscreen()
    }
    //put the wanted thing on the screen
    if(wantedstate=="mainmenu"){
        draw_menuscreen()
        current_gamestate="mainmenu"
    }else if(wantedstate=="creditsscreen"){

    }else if(treemenu){

    }

}