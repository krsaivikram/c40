class Form{
    constructor(){
        this.input =  createInput("name");
         this.button = createButton("hit me");
        this.greeting = createElement('h2');
        this.restart = createButton("restart");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement('h3')
        title.html("multiplayer real time racing game");
        title.position(displayWidth/2,25);
       this.restart.position(displayWidth/2,100);
       this.input.position(displayWidth/2,displayHeight/2-40);
      
        this.button.position(displayWidth/2,displayHeight/2);
  
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playercount+=1;
            player.index = playercount;
            player.update();
            player.updatecount(playercount);
            this.greeting.html("welcome"+player.name);
            this.greeting.position(displayWidth/2,displayHeight/2-70);
        })

        this.restart.mousePressed(()=>{
            player.updatecount(0);
            game.update(0);
        })
    }
}