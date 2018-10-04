var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv' );
//{ preload: preload, create: create, update: update }
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('tutorial', tutorialState);
game.state.add('play', playState);
game.state.add('lose', loseState);
game.state.add('win', winState);
game.state.add('gameover', gameover);
//
game.state.start('boot');
