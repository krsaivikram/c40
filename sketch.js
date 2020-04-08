var gamestate=0,database,playercount,game,player,form,distance=0,allplayers;
var car1,car2,car3,car4,cars;
var car1img,car2img,car3img,car4img,groundimg,trackimg;


function preload(){
car1img = loadImage("images/car1.png");
car2img = loadImage("images/car2.png");
car3img = loadImage("images/car3.png");
car4img = loadImage("images/car4.png");
trackimg = loadImage("images/track.png");
groundimg = loadImage("images/ground.png");
}


function setup(){
    database = firebase.database();
    createCanvas(displayWidth,displayHeight);
     game = new Game();
     game.getstate();
     game.start();
}


function draw(){
    if(playercount===4){
        game.update(1);
    }
    if(gamestate===1){
        clear();
        game.play();
    }
    if(gamestate===2){
        game.end();
    }

}

