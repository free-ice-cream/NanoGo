// var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv' );
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameDiv' );
//{ preload: preload, create: create, update: update }
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('tutorial', tutorialState);
game.state.add('options1', optionsState1);
game.state.add('options2', optionsState2);
game.state.add('options3', optionsState3);
game.state.add('options4', optionsState4);
game.state.add('options5', optionsState5);
game.state.add('play', playState);
game.state.add('lose', loseState);
game.state.add('win', winState);
game.state.add('gameover', gameover);
//
game.state.start('boot');
