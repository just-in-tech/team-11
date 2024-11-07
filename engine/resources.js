import { $ } from "../lib/Pen.js";

export class Resources {
    constructor() { 
        this.silk = 0;
        this.silkFromBattle=0;
        this.fibre={
            fibre:40,
            fibreInterval:60,
            fibrePerInterval:20,
        }
    }

    // 'frame-based' resource generation
    generateFibre() {
        if ($.frameCount % this.fibre.fibreInterval === 0) {
            this.fibre.fibre += this.fibre.fibrePerInterval;
            // console.log("Current Fibre:", this.fibre);   // debug: log fibre value each time
        }
    }

    // add a resource value
    gain(resource, cost) {
        if (request.value == "fibre") {
            this.fibre += request.value;
        } else if (request == "silk") {
            this.silk += request.value
        }
    }
    spend(resource, cost) {
        if (resource == "fibre") {
            this.fibre -= cost;
        } else if (resource == "silk") {
            this.silk -= cost;
        }
    }


    processRequests(requests, data) {
        for (const request of requests) {
            if (request.type == "resources") {
                if(request.action=="endTheGame"){
                    this.silk+=this.silkFromBattle
                }
                if (request.action == "playerkilledcomputer") {
                    if (request.value == "ant") {
                        this.silkFromBattle+=data.playerStats.ant.silkFromKill
                    } else if (request.value == "eagle") {
                        this.silkFromBattle+=data.playerStats.eagle.silkFromKill
                    } else if (request.value == "bear") {
                        this.silkFromBattle+=data.playerStats.bear.silkFromKill
                    }else if (request.value == "tree") {
                        this.silkFromBattle+=data.playerStats.silkFromTreeKill
                        this.silk+=this.silkFromBattle

                    }else{
                        throw new Error("request value dosen't exist")
                    }
                } else if (request.action == "computerkilledplayer") {
                    if (request.value == "ant") {
                        
                    } else if (request.value == "eagle") {
                        
                    } else if (request.value == "bear") {

                    }else if (request.value == "tree") {
                        this.silk+=this.silkFromBattle

                    }else{
                        throw new Error("request value dosen't exist")
                    }
                }else{
                    throw new Error("request action dosen't exist")
                }
                    
                
            }
        }
    

    }


}

