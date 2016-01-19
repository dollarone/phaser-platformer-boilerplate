var PlatformerGame = PlatformerGame || {};

PlatformerGame.Boot = function(){};

//setting game configuration and loading the assets for the loading screen
PlatformerGame.Boot.prototype = {
  preload: function() {
    //assets we'll use in the loading screen
    this.load.image('preloadbar', 'assets/images/loadingbar.png');
  },
  create: function() {
    //loading screen will have a black background
    this.game.stage.backgroundColor = '#000';

    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    
    //have the game centered horizontally
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    //this.scale.setScreenSize(true);

    //physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.state.start('Preload');
  }
};