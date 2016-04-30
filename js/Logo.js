var PlatformerGame = PlatformerGame || {};

//title screen
PlatformerGame.Logo = function(){};

PlatformerGame.Logo.prototype = {
  create: function() {

    //Change the background colour
    this.game.stage.backgroundColor = "#333";

    this.platforms = this.game.add.group();

    logo_top_x = 5;
    logo_top_y = 110;
    tile_space = 17;

    this.createTile(logo_top_x+tile_space*4, logo_top_y+tile_space*0, 2);
    this.createTile(logo_top_x+tile_space*8, logo_top_y+tile_space*0, 2);
    this.createTile(logo_top_x+tile_space*10, logo_top_y+tile_space*0, 2);

    this.createTile(logo_top_x+tile_space*2, logo_top_y+tile_space*1, 0);
    this.createTile(logo_top_x+tile_space*3, logo_top_y+tile_space*1, 1);
    this.createTile(logo_top_x+tile_space*4, logo_top_y+tile_space*1, 2);
    this.createTile(logo_top_x+tile_space*5, logo_top_y+tile_space*1, 0);
    this.createTile(logo_top_x+tile_space*6, logo_top_y+tile_space*1, 1);
    this.createTile(logo_top_x+tile_space*7, logo_top_y+tile_space*1, 4);
    this.createTile(logo_top_x+tile_space*8, logo_top_y+tile_space*1, 2);
    this.createTile(logo_top_x+tile_space*10, logo_top_y+tile_space*1, 2);
    this.createTile(logo_top_x+tile_space*12, logo_top_y+tile_space*1, 0);
    this.createTile(logo_top_x+tile_space*13, logo_top_y+tile_space*1, 1);
    this.createTile(logo_top_x+tile_space*14, logo_top_y+tile_space*1, 2);
    this.createTile(logo_top_x+tile_space*15, logo_top_y+tile_space*1, 0);
    this.createTile(logo_top_x+tile_space*16, logo_top_y+tile_space*1, 2);
    this.createTile(logo_top_x+tile_space*17, logo_top_y+tile_space*1, 0);
    this.createTile(logo_top_x+tile_space*18, logo_top_y+tile_space*1, 1);
    this.createTile(logo_top_x+tile_space*19, logo_top_y+tile_space*1, 4);
    this.createTile(logo_top_x+tile_space*20, logo_top_y+tile_space*1, 1);
    this.createTile(logo_top_x+tile_space*21, logo_top_y+tile_space*1, 1);
    this.createTile(logo_top_x+tile_space*22, logo_top_y+tile_space*1, 4);
    this.createTile(logo_top_x+tile_space*23, logo_top_y+tile_space*1, 0);
    this.createTile(logo_top_x+tile_space*24, logo_top_y+tile_space*1, 1);
    this.createTile(logo_top_x+tile_space*25, logo_top_y+tile_space*1, 4);

    this.createTile(logo_top_x+tile_space*2, logo_top_y+tile_space*2, 2);
    this.createTile(logo_top_x+tile_space*4, logo_top_y+tile_space*2, 2);
    this.createTile(logo_top_x+tile_space*5, logo_top_y+tile_space*2, 2);
    this.createTile(logo_top_x+tile_space*7, logo_top_y+tile_space*2, 2);
    this.createTile(logo_top_x+tile_space*8, logo_top_y+tile_space*2, 2);
    this.createTile(logo_top_x+tile_space*10, logo_top_y+tile_space*2, 2);
    this.createTile(logo_top_x+tile_space*12, logo_top_y+tile_space*2, 2);
    this.createTile(logo_top_x+tile_space*14, logo_top_y+tile_space*2, 2);
    this.createTile(logo_top_x+tile_space*15, logo_top_y+tile_space*2, 2);
    this.createTile(logo_top_x+tile_space*17, logo_top_y+tile_space*2, 2);
    this.createTile(logo_top_x+tile_space*19, logo_top_y+tile_space*2, 2);
    this.createTile(logo_top_x+tile_space*20, logo_top_y+tile_space*2, 2);
    this.createTile(logo_top_x+tile_space*22, logo_top_y+tile_space*2, 2);
    this.createTile(logo_top_x+tile_space*23, logo_top_y+tile_space*2, 2);
    this.createTile(logo_top_x+tile_space*25, logo_top_y+tile_space*2, 5);

    this.createTile(logo_top_x+tile_space*2, logo_top_y+tile_space*3, 3);
    this.createTile(logo_top_x+tile_space*3, logo_top_y+tile_space*3, 1);
    this.createTile(logo_top_x+tile_space*4, logo_top_y+tile_space*3, 2);
    this.createTile(logo_top_x+tile_space*5, logo_top_y+tile_space*3, 3);
    this.createTile(logo_top_x+tile_space*6, logo_top_y+tile_space*3, 1);
    this.createTile(logo_top_x+tile_space*7, logo_top_y+tile_space*3, 5);
    this.createTile(logo_top_x+tile_space*8, logo_top_y+tile_space*3, 3);
    this.createTile(logo_top_x+tile_space*9, logo_top_y+tile_space*3, 2);
    this.createTile(logo_top_x+tile_space*10, logo_top_y+tile_space*3, 3);
    this.createTile(logo_top_x+tile_space*11, logo_top_y+tile_space*3, 2);
    this.createTile(logo_top_x+tile_space*12, logo_top_y+tile_space*3, 3);
    this.createTile(logo_top_x+tile_space*13, logo_top_y+tile_space*3, 1);
    this.createTile(logo_top_x+tile_space*14, logo_top_y+tile_space*3, 2);
    this.createTile(logo_top_x+tile_space*15, logo_top_y+tile_space*3, 2);
    this.createTile(logo_top_x+tile_space*17, logo_top_y+tile_space*3, 3);
    this.createTile(logo_top_x+tile_space*18, logo_top_y+tile_space*3, 1);
    this.createTile(logo_top_x+tile_space*19, logo_top_y+tile_space*3, 5);
    this.createTile(logo_top_x+tile_space*20, logo_top_y+tile_space*3, 2);
    this.createTile(logo_top_x+tile_space*22, logo_top_y+tile_space*3, 2);
    this.createTile(logo_top_x+tile_space*23, logo_top_y+tile_space*3, 3);
    this.createTile(logo_top_x+tile_space*24, logo_top_y+tile_space*3, 1);
    this.createTile(logo_top_x+tile_space*25, logo_top_y+tile_space*3, 2);


// prod

    this.createTile(logo_top_x+tile_space*19, logo_top_y+tile_space*4, 6);

    this.createTile(logo_top_x+tile_space*11, logo_top_y+tile_space*5, 2);
    this.createTile(logo_top_x+tile_space*17, logo_top_y+tile_space*5, 2);
    this.createTile(logo_top_x+tile_space*19, logo_top_y+tile_space*5, 7);

    this.createTile(logo_top_x+tile_space*1, logo_top_y+tile_space*6, 1);
    this.createTile(logo_top_x+tile_space*2, logo_top_y+tile_space*6, 1);
    this.createTile(logo_top_x+tile_space*3, logo_top_y+tile_space*6, 4);
    this.createTile(logo_top_x+tile_space*4, logo_top_y+tile_space*6, 0);
    this.createTile(logo_top_x+tile_space*5, logo_top_y+tile_space*6, 2);
    this.createTile(logo_top_x+tile_space*6, logo_top_y+tile_space*6, 0);
    this.createTile(logo_top_x+tile_space*7, logo_top_y+tile_space*6, 1);
    this.createTile(logo_top_x+tile_space*8, logo_top_y+tile_space*6, 4);
    this.createTile(logo_top_x+tile_space*9, logo_top_y+tile_space*6, 0);
    this.createTile(logo_top_x+tile_space*10, logo_top_y+tile_space*6, 1);
    this.createTile(logo_top_x+tile_space*11, logo_top_y+tile_space*6, 2);
    this.createTile(logo_top_x+tile_space*12, logo_top_y+tile_space*6, 2);
    this.createTile(logo_top_x+tile_space*14, logo_top_y+tile_space*6, 2);
    this.createTile(logo_top_x+tile_space*15, logo_top_y+tile_space*6, 0);
    this.createTile(logo_top_x+tile_space*16, logo_top_y+tile_space*6, 2);
    this.createTile(logo_top_x+tile_space*17, logo_top_y+tile_space*6, 1);
    this.createTile(logo_top_x+tile_space*18, logo_top_y+tile_space*6, 2);
    this.createTile(logo_top_x+tile_space*19, logo_top_y+tile_space*6, 2);
    this.createTile(logo_top_x+tile_space*20, logo_top_y+tile_space*6, 0);
    this.createTile(logo_top_x+tile_space*21, logo_top_y+tile_space*6, 1);
    this.createTile(logo_top_x+tile_space*22, logo_top_y+tile_space*6, 4);
    this.createTile(logo_top_x+tile_space*23, logo_top_y+tile_space*6, 1);
    this.createTile(logo_top_x+tile_space*24, logo_top_y+tile_space*6, 1);
    this.createTile(logo_top_x+tile_space*25, logo_top_y+tile_space*6, 4);
    this.createTile(logo_top_x+tile_space*26, logo_top_y+tile_space*6, 0);
    this.createTile(logo_top_x+tile_space*27, logo_top_y+tile_space*6, 2);

    this.createTile(logo_top_x+tile_space*1, logo_top_y+tile_space*7, 2);
    this.createTile(logo_top_x+tile_space*3, logo_top_y+tile_space*7, 2);
    this.createTile(logo_top_x+tile_space*4, logo_top_y+tile_space*7, 2);
    this.createTile(logo_top_x+tile_space*6, logo_top_y+tile_space*7, 2);
    this.createTile(logo_top_x+tile_space*8, logo_top_y+tile_space*7, 2);
    this.createTile(logo_top_x+tile_space*9, logo_top_y+tile_space*7, 2);
    this.createTile(logo_top_x+tile_space*11, logo_top_y+tile_space*7, 2);
    this.createTile(logo_top_x+tile_space*12, logo_top_y+tile_space*7, 2);
    this.createTile(logo_top_x+tile_space*14, logo_top_y+tile_space*7, 2);
    this.createTile(logo_top_x+tile_space*15, logo_top_y+tile_space*7, 2);
    this.createTile(logo_top_x+tile_space*17, logo_top_y+tile_space*7, 2);
    this.createTile(logo_top_x+tile_space*19, logo_top_y+tile_space*7, 2);
    this.createTile(logo_top_x+tile_space*20, logo_top_y+tile_space*7, 2);
    this.createTile(logo_top_x+tile_space*22, logo_top_y+tile_space*7, 2);
    this.createTile(logo_top_x+tile_space*23, logo_top_y+tile_space*7, 2);
    this.createTile(logo_top_x+tile_space*25, logo_top_y+tile_space*7, 2);
    this.createTile(logo_top_x+tile_space*26, logo_top_y+tile_space*7, 3);
    this.createTile(logo_top_x+tile_space*27, logo_top_y+tile_space*7, 4);

    this.createTile(logo_top_x+tile_space*1, logo_top_y+tile_space*8, 1);
    this.createTile(logo_top_x+tile_space*2, logo_top_y+tile_space*8, 1);
    this.createTile(logo_top_x+tile_space*3, logo_top_y+tile_space*8, 5);
    this.createTile(logo_top_x+tile_space*4, logo_top_y+tile_space*8, 2);
    this.createTile(logo_top_x+tile_space*6, logo_top_y+tile_space*8, 3);
    this.createTile(logo_top_x+tile_space*7, logo_top_y+tile_space*8, 1);
    this.createTile(logo_top_x+tile_space*8, logo_top_y+tile_space*8, 5);
    this.createTile(logo_top_x+tile_space*9, logo_top_y+tile_space*8, 3);
    this.createTile(logo_top_x+tile_space*10, logo_top_y+tile_space*8, 1);
    this.createTile(logo_top_x+tile_space*11, logo_top_y+tile_space*8, 2);
    this.createTile(logo_top_x+tile_space*12, logo_top_y+tile_space*8, 3);
    this.createTile(logo_top_x+tile_space*13, logo_top_y+tile_space*8, 1);
    this.createTile(logo_top_x+tile_space*14, logo_top_y+tile_space*8, 5);
    this.createTile(logo_top_x+tile_space*15, logo_top_y+tile_space*8, 3);
    this.createTile(logo_top_x+tile_space*16, logo_top_y+tile_space*8, 2);
    this.createTile(logo_top_x+tile_space*17, logo_top_y+tile_space*8, 3);
    this.createTile(logo_top_x+tile_space*18, logo_top_y+tile_space*8, 2);
    this.createTile(logo_top_x+tile_space*19, logo_top_y+tile_space*8, 2);
    this.createTile(logo_top_x+tile_space*20, logo_top_y+tile_space*8, 3);
    this.createTile(logo_top_x+tile_space*21, logo_top_y+tile_space*8, 1);
    this.createTile(logo_top_x+tile_space*22, logo_top_y+tile_space*8, 5);
    this.createTile(logo_top_x+tile_space*23, logo_top_y+tile_space*8, 2);
    this.createTile(logo_top_x+tile_space*25, logo_top_y+tile_space*8, 2);
    this.createTile(logo_top_x+tile_space*26, logo_top_y+tile_space*8, 1);
    this.createTile(logo_top_x+tile_space*27, logo_top_y+tile_space*8, 5);

    this.createTile(logo_top_x+tile_space*1, logo_top_y+tile_space*9, 2);

    this.startLogoAnimationTimer = 1000; 
  
    this.game.input.keyboard.addCallbacks(this, this.skip, null, null);
    this.pressed = false;

  },

  skip : function() {
    if (!this.pressed) {
        this.pressed = true;
        this.state.start('Game');
    }
  },

  update: function() {

    this.startLogoAnimationTimer--;
    if (this.startLogoAnimationTimer < 0 && !this.pressed) {
        this.pressed = true;
        this.state.start('Game');
    }
  },

  createTile : function(x, y, frame) {
    ledge = this.platforms.create(x, y, 'logo-tiles');
    ledge.frame = frame;
  },
};
