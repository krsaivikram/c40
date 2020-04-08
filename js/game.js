class Game{
    constructor(){}
    getstate(){
        var gamestateref = database.ref('gamestate');
        gamestateref.on("value",function(data){
            gamestate = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gamestate:state
        })
    }
    async start(){
        if(gamestate===0){
            player = new Player();
            var playercountref = await database.ref('playercount').once("value");
            if(playercountref.exists()){

         playercount = playercountref.val();   
            player.getcount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(200,50);
        car1.addImage(car1img);
        car2 = createSprite(400,50);
        car2.addImage(car2img);
        car3 = createSprite(600,50);
        car3.addImage(car3img);
        car4 = createSprite(800,50);
        car4.addImage(car4img);
        cars = [car1,car2,car3,car4];
    }
    play(){
        form.hide();
        textSize(24);
        text("start playing!!",150,30);
        Player.playerinfo();
        player.getrank();
        if(allplayers!==undefined){
            background("#c68767");
            image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5);
           var index = 0;
           var x =200;
           var y;
            for(var plr in allplayers){
             index+=1;
             x = x+200;
             y = displayHeight-allplayers[plr].distance;
             cars[index-1].x = x;
             cars[index-1].y = y;
             if(index===player.index){
                 stroke("green");
                 fill("yellow");
                 ellipse(x,y,70,50);
                 cars[index-1].shapeColor = "blue";
                 camera.position.x = displayWidth/2;
                 camera.position.y = cars[index-1].y;
             }
             
                    
               
              
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!==null){
            player.distance+=50;
            player.update();

        }
        if(player.distance>4000){
            gamestate = 2;
            player.rank =player.rank+1;
            Player.updatecars(player.rank);
        }
       
        drawSprites();

    }
    end(){
        console.log("GAME ENDED");
        console.log(player.rank);
       // game.update(2);
    }
}