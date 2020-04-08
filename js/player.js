class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = null;
    }
getcount(){
    var playercountref = database.ref('playercount');
   playercountref.on("value",function(data){
        playercount = data.val();
   })
}
updatecount(count){
    database.ref('/').update({
        playercount:count
    })
}
update(){
    var playerindex = "players/player"+this.index;
    database.ref(playerindex).set({
        name:this.name,
        distance:this.distance
    })
}
static playerinfo(){
    var playerinforef = database.ref('players');
    playerinforef.on("value",(data)=>{
        allplayers=data.val();
    })
}

getrank(){
    database.ref('carsatend').on("value",(data)=>{
        this.rank = data.val();
    })
}
static updatecars(rank){
database.ref('/').update({
    carsatend : rank
 })

}
}