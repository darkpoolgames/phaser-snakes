var TopDownGame = TopDownGame || {};

TopDownGame.Preload = function(){};

TopDownGame.Preload.prototype = {
  preload: function() {
    //show loading screen
    // this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
    // this.preloadBar.anchor.setTo(0.5);
 
    // this.load.setPreloadSprite(this.preloadBar);
 
    //load game assets
    this.load.tilemap('level1', 'assets/tilemaps/firstlevel.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('gameTiles', 'assets/images/simples_pimples.png');
    this.load.image('player', 'assets/images/player.gif');
    // this.load.image('browndoor', 'assets/images/browndoor.png');



  },
  create: function() {
    this.state.start('Game');
  }
};