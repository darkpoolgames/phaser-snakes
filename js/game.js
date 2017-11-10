var TopDownGame = TopDownGame || {};
 
//title screen
TopDownGame.Game = function(){};
 
TopDownGame.Game.prototype = {
  create: function() {
    this.player = this.game.add.sprite(100,100,'player');
    this.game.physics.arcade.enable(this.player);
    this.cursors = this.game.input.keyboard.createCursorKeys();
    // this.map = this.game.add.tilemap('level1');
    //
    // //the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
    // this.map.addTilesetImage('simples_pimples', 'gameTiles');
    //
    // //create layer
    // this.backgroundlayer = this.map.createLayer('backgroundLayer');
    // this.blockedLayer = this.map.createLayer('blockedLayer');
    //
    // //collision on blockedLayer
    // this.map.setCollisionBetween(1, 2000, true, 'blockedLayer');
    //
    // //resizes the game world to match the layer dimensions
    // this.backgroundlayer.resizeWorld();
  },
    update: function() {
    this.player.body.velocity.x = 0;
      if(this.cursors.left.isDown){
        console.log('Left down is clicked.');
        this.player.x = 50;
          this.player.y = 100;
      }
        if(this.cursors.right.isDown){
            console.log('Right down is clicked.');
            this.player.x = 150;
            this.player.y = 100;
        }
        if(this.cursors.up.isDown){
            console.log('Up Arrow is clicked.');
            this.player.x = 100;
            this.player.y = 50;
        }
        if(this.cursors.down.isDown){
            console.log('Down Arrow is clicked.');
            this.player.x = 100;
            this.player.y = 150;
        }
    },
  // createItems: function() {
  //   //create items
  //   this.items = this.game.add.group();
  //   this.items.enableBody = true;
  //   var item;
  //   result = this.findObjectsByType('item', this.map, 'objectsLayer');
  //   result.forEach(function(element){
  //     this.createFromTiledObject(element, this.items);
  //   }, this);
  // },
  // //find objects in a Tiled layer that containt a property called "type" equal to a certain value
  // findObjectsByType: function(type, map, layer) {
  //   var result = new Array();
  //   map.objects[layer].forEach(function(element){
  //     if(element.properties.type === type) {
  //       //Phaser uses top left, Tiled bottom left so we have to adjust
  //       //also keep in mind that the cup images are a bit smaller than the tile which is 16x16
  //       //so they might not be placed in the exact position as in Tiled
  //       element.y -= map.tileHeight;
  //       result.push(element);
  //     }
  //   });
  //   return result;
  // },
  // //create a sprite from an object
  // createFromTiledObject: function(element, group) {
  //   var sprite = group.create(element.x, element.y, element.properties.sprite);
  //
  //     //copy all properties to the sprite
  //     Object.keys(element.properties).forEach(function(key){
  //       sprite[key] = element.properties[key];
  //     });
  // },createDoors: function() {
  //   //create doors
  //   this.doors = this.game.add.group();
  //   this.doors.enableBody = true;
  //   result = this.findObjectsByType('door', this.map, 'objectsLayer');
  //
  //   result.forEach(function(element){
  //     this.createFromTiledObject(element, this.doors);
  //   }, this);
  // },
}