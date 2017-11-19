
//  Here is a custom game object
MonsterBunny = function (game, x, y, rotateSpeed) {

    Phaser.Sprite.call(this, game, x, y, 'bunny');

    this.rotateSpeed = rotateSpeed;

};

MonsterBunny.prototype = Object.create(Phaser.Sprite.prototype);
MonsterBunny.prototype.constructor = MonsterBunny;

/**
 * Automatically called by World.update
 */
MonsterBunny.prototype.update = function() {

    this.angle += this.rotateSpeed;

};

Snake = function(game, x, y, timeTillDeath, tickTime) {
    Phaser.Sprite.call(this, game, x, y, 'snake');
    this.game = game;
    this.timeTillDeath = timeTillDeath;

    this.tickTime = tickTime; // tick time in ms;
    this.tickCurr = 0;
}

Snake.prototype = Object.create(Phaser.Sprite.prototype);
Snake.prototype.constructor = Snake;

Snake.prototype.update = function() {
    if(this.timeTillDeath <= 0){
        this.destroy();
    }

    this.tickCurr += game.time.elapsed;
    if(this.tickCurr >= this.tickTime){
        this.tickCurr = 0;
        this.updateTick();
    }
}

Snake.prototype.updateTick = function() {
    // console.log("Update tick for " + this);
    this.timeTillDeath--;
}

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update});

function preload() {

    game.load.image('bunny', 'assets/sprites/bunny.png');
    game.load.image('snake', 'assets/images/player.gif');
}

function create() {

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.tickTime = 80; // tick time in ms;
    this.tickCurr = 0;

    // this.snakeHead = new Snake(game, 25,25, 4, this.tickTime);
    // this.snakeHead.anchor.setTo(0.5, 0.5);
    // game.add.existing(this.snakeHead);

    this.grid = createArray(game.world.width / 25, game.world.height / 25);
    // this.grid[1][1] = this.snakeHead;

    this.player = {x : 0, y : 0};
    this.player.direction = {x: 1, y: 0};
}

function update() {
    processInput(this.player, this.cursors);
    this.tickCurr += game.time.elapsed;
    if(this.tickCurr >= this.tickTime){
        this.tickCurr = 0;
        updateState(this.player, this.grid, this.tickTime);

    }
}

function updateState(player, grid, tickTime) {
    player.x += player.direction.x;
    player.y += player.direction.y;
    checkPlayerBounds(player);

    //Check for collisions & game over if returned true
    if(detectCollision(player, grid)){
        console.log("Game over man, Game over!");
    }

    grid[player.x][player.y] =
        new Snake(game, player.x * 25, player.y * 25, 8, tickTime);

    grid[player.x][player.y].anchor.setTo(0.5, 0.5);
    game.add.existing(grid[player.x][player.y]);
}

function checkPlayerBounds(player) {
    if(player.x < 0){
        player.x = (game.world.width / 25) - 1;
    }
    if(player.x >= (game.world.width / 25))
        player.x = 0;

    if(player.y < 0){
        player.y = (game.world.height / 25) - 1;
    }
    if(player.y >= (game.world.height / 25))
        player.y = 0;
}

function detectCollision(player, grid){
    // console.log(grid[player.x][player.y]);
    return grid[player.x][player.y] != undefined
        && grid[player.x][player.y].renderable;
}

function processInput(player, cursors) {
    if(cursors.left.isDown){
        // console.log('Left down is clicked.');
        player.direction = {x: -1, y: 0};
    }
    if(cursors.right.isDown){
        // console.log('Right down is clicked.');
        player.direction = {x: 1, y: 0};
    }
    if(cursors.up.isDown){
        // console.log('Up Arrow is clicked.');
        player.direction = {x: 0, y: -1};
    }
    if(cursors.down.isDown){
        // console.log('Down Arrow is clicked.');
        player.direction = {x: 0, y: 1};
    }
}

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}