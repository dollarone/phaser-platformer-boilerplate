var PlatformerGame = PlatformerGame || {};

//title screen
PlatformerGame.Logo = function(){};

PlatformerGame.Logo.prototype = {
  create: function() {

    //Change the background colour
    this.game.stage.backgroundColor = "#333";

    this.platforms = this.game.add.group();

    logo_top_x = 175;
    logo_top_y = 210;

    this.createTile(logo_top_x+16*4, logo_top_y+16*0, 2);
    this.createTile(logo_top_x+16*8, logo_top_y+16*0, 2);
    this.createTile(logo_top_x+16*10, logo_top_y+16*0, 2);

    this.createTile(logo_top_x+16*2, logo_top_y+16*1, 0);
    this.createTile(logo_top_x+16*3, logo_top_y+16*1, 1);
    this.createTile(logo_top_x+16*4, logo_top_y+16*1, 2);
    this.createTile(logo_top_x+16*5, logo_top_y+16*1, 0);
    this.createTile(logo_top_x+16*6, logo_top_y+16*1, 1);
    this.createTile(logo_top_x+16*7, logo_top_y+16*1, 4);
    this.createTile(logo_top_x+16*8, logo_top_y+16*1, 2);
    this.createTile(logo_top_x+16*10, logo_top_y+16*1, 2);
    this.createTile(logo_top_x+16*12, logo_top_y+16*1, 0);
    this.createTile(logo_top_x+16*13, logo_top_y+16*1, 1);
    this.createTile(logo_top_x+16*14, logo_top_y+16*1, 4);
    this.createTile(logo_top_x+16*15, logo_top_y+16*1, 0);
    this.createTile(logo_top_x+16*16, logo_top_y+16*1, 2);
    this.createTile(logo_top_x+16*17, logo_top_y+16*1, 0);
    this.createTile(logo_top_x+16*18, logo_top_y+16*1, 1);
    this.createTile(logo_top_x+16*19, logo_top_y+16*1, 4);
    this.createTile(logo_top_x+16*20, logo_top_y+16*1, 1);
    this.createTile(logo_top_x+16*21, logo_top_y+16*1, 1);
    this.createTile(logo_top_x+16*22, logo_top_y+16*1, 4);
    this.createTile(logo_top_x+16*23, logo_top_y+16*1, 0);
    this.createTile(logo_top_x+16*24, logo_top_y+16*1, 1);
    this.createTile(logo_top_x+16*25, logo_top_y+16*1, 4);

    this.createTile(logo_top_x+16*2, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*4, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*5, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*7, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*8, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*10, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*12, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*14, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*15, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*17, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*19, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*20, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*22, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*23, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*25, logo_top_y+16*2, 5);

    this.createTile(logo_top_x+16*2, logo_top_y+16*3, 3);
    this.createTile(logo_top_x+16*3, logo_top_y+16*3, 1);
    this.createTile(logo_top_x+16*4, logo_top_y+16*3, 2);
    this.createTile(logo_top_x+16*5, logo_top_y+16*3, 3);
    this.createTile(logo_top_x+16*6, logo_top_y+16*3, 1);
    this.createTile(logo_top_x+16*7, logo_top_y+16*3, 5);
    this.createTile(logo_top_x+16*8, logo_top_y+16*3, 3);
    this.createTile(logo_top_x+16*9, logo_top_y+16*3, 2);
    this.createTile(logo_top_x+16*10, logo_top_y+16*3, 3);
    this.createTile(logo_top_x+16*11, logo_top_y+16*3, 2);
    this.createTile(logo_top_x+16*12, logo_top_y+16*3, 3);
    this.createTile(logo_top_x+16*13, logo_top_y+16*3, 1);
    this.createTile(logo_top_x+16*14, logo_top_y+16*3, 2);
    this.createTile(logo_top_x+16*15, logo_top_y+16*3, 2);
    this.createTile(logo_top_x+16*17, logo_top_y+16*3, 3);
    this.createTile(logo_top_x+16*18, logo_top_y+16*3, 1);
    this.createTile(logo_top_x+16*19, logo_top_y+16*3, 5);
    this.createTile(logo_top_x+16*20, logo_top_y+16*3, 2);
    this.createTile(logo_top_x+16*22, logo_top_y+16*3, 2);
    this.createTile(logo_top_x+16*23, logo_top_y+16*3, 3);
    this.createTile(logo_top_x+16*24, logo_top_y+16*3, 1);
    this.createTile(logo_top_x+16*25, logo_top_y+16*3, 2);


// prod

    this.createTile(logo_top_x+16*19, logo_top_y+16*4, 6);

    this.createTile(logo_top_x+16*11, logo_top_y+16*5, 2);
    this.createTile(logo_top_x+16*17, logo_top_y+16*5, 2);
    this.createTile(logo_top_x+16*19, logo_top_y+16*5, 7);

    this.createTile(logo_top_x+16*1, logo_top_y+16*6, 1);
    this.createTile(logo_top_x+16*2, logo_top_y+16*6, 1);
    this.createTile(logo_top_x+16*3, logo_top_y+16*6, 4);
    this.createTile(logo_top_x+16*4, logo_top_y+16*6, 0);
    this.createTile(logo_top_x+16*5, logo_top_y+16*6, 2);
    this.createTile(logo_top_x+16*6, logo_top_y+16*6, 0);
    this.createTile(logo_top_x+16*7, logo_top_y+16*6, 1);
    this.createTile(logo_top_x+16*8, logo_top_y+16*6, 4);
    this.createTile(logo_top_x+16*9, logo_top_y+16*6, 0);
    this.createTile(logo_top_x+16*10, logo_top_y+16*6, 1);
    this.createTile(logo_top_x+16*11, logo_top_y+16*6, 2);
    this.createTile(logo_top_x+16*12, logo_top_y+16*6, 2);
    this.createTile(logo_top_x+16*14, logo_top_y+16*6, 2);
    this.createTile(logo_top_x+16*15, logo_top_y+16*6, 0);
    this.createTile(logo_top_x+16*16, logo_top_y+16*6, 2);
    this.createTile(logo_top_x+16*17, logo_top_y+16*6, 1);
    this.createTile(logo_top_x+16*18, logo_top_y+16*6, 2);
    this.createTile(logo_top_x+16*19, logo_top_y+16*6, 2);
    this.createTile(logo_top_x+16*20, logo_top_y+16*6, 0);
    this.createTile(logo_top_x+16*21, logo_top_y+16*6, 1);
    this.createTile(logo_top_x+16*22, logo_top_y+16*6, 4);
    this.createTile(logo_top_x+16*23, logo_top_y+16*6, 1);
    this.createTile(logo_top_x+16*24, logo_top_y+16*6, 1);
    this.createTile(logo_top_x+16*25, logo_top_y+16*6, 4);
    this.createTile(logo_top_x+16*26, logo_top_y+16*6, 0);
    this.createTile(logo_top_x+16*27, logo_top_y+16*6, 2);

    this.createTile(logo_top_x+16*1, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*3, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*4, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*6, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*8, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*9, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*11, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*12, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*14, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*15, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*17, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*19, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*20, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*22, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*23, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*25, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*26, logo_top_y+16*7, 3);
    this.createTile(logo_top_x+16*27, logo_top_y+16*7, 4);

    this.createTile(logo_top_x+16*1, logo_top_y+16*8, 1);
    this.createTile(logo_top_x+16*2, logo_top_y+16*8, 1);
    this.createTile(logo_top_x+16*3, logo_top_y+16*8, 5);
    this.createTile(logo_top_x+16*4, logo_top_y+16*8, 2);
    this.createTile(logo_top_x+16*6, logo_top_y+16*8, 3);
    this.createTile(logo_top_x+16*7, logo_top_y+16*8, 1);
    this.createTile(logo_top_x+16*8, logo_top_y+16*8, 5);
    this.createTile(logo_top_x+16*9, logo_top_y+16*8, 3);
    this.createTile(logo_top_x+16*10, logo_top_y+16*8, 1);
    this.createTile(logo_top_x+16*11, logo_top_y+16*8, 2);
    this.createTile(logo_top_x+16*12, logo_top_y+16*8, 3);
    this.createTile(logo_top_x+16*13, logo_top_y+16*8, 1);
    this.createTile(logo_top_x+16*14, logo_top_y+16*8, 5);
    this.createTile(logo_top_x+16*15, logo_top_y+16*8, 3);
    this.createTile(logo_top_x+16*16, logo_top_y+16*8, 2);
    this.createTile(logo_top_x+16*17, logo_top_y+16*8, 3);
    this.createTile(logo_top_x+16*18, logo_top_y+16*8, 2);
    this.createTile(logo_top_x+16*19, logo_top_y+16*8, 2);
    this.createTile(logo_top_x+16*20, logo_top_y+16*8, 3);
    this.createTile(logo_top_x+16*21, logo_top_y+16*8, 1);
    this.createTile(logo_top_x+16*22, logo_top_y+16*8, 5);
    this.createTile(logo_top_x+16*23, logo_top_y+16*8, 2);
    this.createTile(logo_top_x+16*25, logo_top_y+16*8, 2);
    this.createTile(logo_top_x+16*26, logo_top_y+16*8, 1);
    this.createTile(logo_top_x+16*27, logo_top_y+16*8, 5);

    this.createTile(logo_top_x+16*1, logo_top_y+16*9, 2);

    this.startLogoAnimationTimer = 100; 
  
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
