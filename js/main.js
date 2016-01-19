var PlatformerGame = PlatformerGame || {};

PlatformerGame.game = new Phaser.Game(800, 600, Phaser.AUTO, '');
//, '', { preload: preload, create: create, update: update });

PlatformerGame.game.state.add('Boot', PlatformerGame.Boot);
PlatformerGame.game.state.add('Preload', PlatformerGame.Preload);
PlatformerGame.game.state.add('Logo', PlatformerGame.Logo);
PlatformerGame.game.state.add('Game', PlatformerGame.Game);

PlatformerGame.game.state.start('Boot');