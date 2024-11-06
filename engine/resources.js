import { $ } from "../lib/Pen.js";

export class Resources {
    constructor() {
        this.fibre = 40; 
        this.silk = 0;
        this.fibrePerInterval=1
        this.fibreInterval=30
    }

    // 'frame-based' resource generation
    update(gameState) {
        if (gameState == "battle") {
            if ($.frameCount % this.fibreInterval === 0) {
                this.fibre += this.fibrePerInterval;
                // console.log("Current Fibre:", this.fibre);   // debug: log fibre value each time
            }
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
                    if (request.action == "playerkilledcomputer") {
                        if (request.value == "ant") {
                            
                        } else if (request.value == "eagle") {
                            
                        } else if (request.value == "bear") {

                        }else if (request.value == "tree") {

                        }else{
                            throw new Error("request value dosen't exist")
                        }
                    } else if (request.action == "computerkilledplayer") {
                        if (request.value == "ant") {
                            
                        } else if (request.value == "eagle") {
                            
                        } else if (request.value == "bear") {

                        }else if (request.value == "tree") {

                        }else{
                            throw new Error("request value dosen't exist")
                        }
                    }else{
                        throw new Error("request action dosen't exist")
                    }
                    // we can simplify these to include: "request.playerSide" and "request.value" 
                
                // to unlock animal on the treemenu
                
                // will be one per branch
                
            }
        }
    

    }


}

