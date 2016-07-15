// Create our 'main' state that will contain the game
var mainState = {
    preload: function() {
      game.load.image('bird', 'assets/bird.png')
    },

    create: function() {

      game.stage.backgroundcolor = '#71c5cf'
      game.physics.startSystem(Phaser.Physics.ARCADE);

      this.bird = game.add.sprite(100, 245, 'bird');
      game.physics.arcade.enable(this.bird);
      this.bird.body.gravity.y = 1000;

      var spacekey = game.input.keyboard.addkey(
                      Phaser.Keyboard.SPACEBAR);

      spaceKey.onDown.add(this.jump, this);
    },

    update: function() {
      if (this.bird.y < 0 || this.bird.y > 490){
        this.restartGame();
      }
    },

    // jump: function() {
    //   this.bird.body.velocity.y = -350;
    // },
    //
    // restartGame: function() {
    //   game.state.start('main');
    // },
};

// Initialize Phaser, and create a 400px by 490px game
var game = new Phaser.Game(400, 490);

// Add the 'mainState' and call it 'main'
game.state.add('main', mainState);

// Start the state to actually start the game
game.state.start('main');
