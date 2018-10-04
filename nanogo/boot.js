var bootState = {

  create: function(){

      game.physics.startSystem(Phaser.Physics.ARCADE);
      game.physics.startSystem(Phaser.Physics.P2JS);
      //
      game.physics.p2.setImpactEvents(true);
      game.physics.p2.restitution = 0.8;// TODO what is this value??
      //
      console.log('bootState');
      game.state.start('load');
  }
};
