var TopDownGame = TopDownGame || {};
 
//title screen
TopDownGame.Game = function(){};
 
TopDownGame.Game.prototype = {
  create: function() {
    this.player = this.game.add.sprite(0,0,'player');
    // this.rect = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, this.bmd);
    // this.rect.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(this.player);
    this.cursors = this.game.input.keyboard.createCursorKeys();

      //Draw rectangle & apply to object;
      var width = 100, height = 100;
      this.bmd = this.game.add.bitmapData(width,height);
      this.bmd.ctx.beginPath();
      this.bmd.ctx.rect(0,0,width,height);
      this.bmd.ctx.fillStyle = '#F00';
      this.bmd.ctx.fill();

      this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, this.bmd);

      this.grid = {};
      this.grid.height = 10;
      this.grid.width = 10;

      this.tickTime = 100; // tick time in ms;
      this.tickCurr = 0;

      this.player.grid = {x: 0, y: 0};
      this.player.direction = {x: 0, y: 0};
  },
    update: function() {

    this.tickCurr += this.game.time.elapsed;
    processInput(this.player, this.cursors);
    this.player.x = this.player.grid.x * 20;
    this.player.y = this.player.grid.y * 20;
        // console.log(this.player.x + "," + this.player.y);
        console.log(this.player.grid.x + "," + this.player.grid.y);
    if(this.tickCurr < this.tickTime){
      return;
    }
    this.tickCurr = 0;

    //Update position of player on interval
        this.player.grid.x += this.player.direction.x;
        this.player.grid.y += this.player.direction.y;
        if(this.player.grid.x < 0){
          this.player.grid.x = this.grid.width - 1;
        } else if(this.player.grid.x >= this.grid.width){
          this.player.grid.x = 0;
        }
        if(this.player.grid.y < 0){
            this.player.grid.y = this.grid.height - 1;
        } else if(this.player.grid.y >= this.grid.height){
            this.player.grid.y = 0;
        }
    },
}

function processInput(player, cursors) {
    if(cursors.left.isDown){
        console.log('Left down is clicked.');
        player.direction = {x: -1, y: 0};
    }
    if(cursors.right.isDown){
        console.log('Right down is clicked.');
        player.direction = {x: 1, y: 0};
    }
    if(cursors.up.isDown){
        console.log('Up Arrow is clicked.');
        player.direction = {x: 0, y: -1};
    }
    if(cursors.down.isDown){
        console.log('Down Arrow is clicked.');
        player.direction = {x: 0, y: 1};
    }
}