export class treemenu{
    constructor(){
        this.battlebtn = $.makeButton($.w/2,650,100,50,"credits");
        this.battlebtn.background = "green";
        this.requests=[];
    }
draw_treemenu(data){
    this.battlebtn.draw();
    if(this.battlebtn.up){
    data.gameState="battle";
    }
}

getRequests() {
    const requestsToBeReturned = this.requests;
    this.requests = [];
    return requestsToBeReturned;
}


}