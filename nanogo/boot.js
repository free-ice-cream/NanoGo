var bootState = {

  create: function(){

      game.physics.startSystem(Phaser.Physics.ARCADE);
      console.log('bootState');
      console.log(gameBuild);
      //clearGameCache () ;
      game.state.start('load');

  }
};
function clearGameCache () {
  console.log("clear cache called");
game.cache = new Phaser.Cache(game);
game.load.reset();
game.load.removeAll();
}
