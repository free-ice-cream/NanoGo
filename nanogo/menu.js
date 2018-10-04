var menuState = {
  create: function(){
    var placeLabel = game.add.text(100,100, "Nano Go!", introStyle);
    startBut = game.add.sprite(300,200, 'hexsign');
    startBut.inputEnabled=true;
    startBut.events.onInputDown.add(this.startListening, this);

    var flip = startBut.animations.add('countdown', [1, 2, 3, 4], 1, false);
    flip.onComplete.add(this.start, this);

   console.log('menuState');
  },
  start: function(){
    console.log('pop- start ');
    game.state.start('play');

  },
  startListening: function(){
    console.log('pop - startListening');
    startBut.animations.play('countdown', true);

  },  tutStart: function(){
      console.log('pop- start ');
      game.state.start('tutorial');

    }

};
