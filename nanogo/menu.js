var menuState = {
  create: function(){
    // var placeLabel = game.add.text(100,100, "Nano Go!", introStyle);
    logo = game.add.sprite(173,57, 'logo');
    startBut = game.add.sprite(102,208, 'hexsign');
    howBut = game.add.sprite(360,288, 'tutbut');
    startBut.inputEnabled=true;
    startBut.events.onInputDown.add(this.startListening, this);
    startBut.events.onInputOver.add(this.starthover,this);
    startBut.events.onInputOut.add(this.startnohover,this);
    //
    howBut.inputEnabled=true;
    howBut.events.onInputDown.add(this.howButDown, this);
    howBut.events.onInputOver.add(this.howButOver, this);
    howBut.events.onInputOut.add(this.howButOut, this);
    //

    // var hov1 =
    var hov1 = startBut.animations.add('start-hover', [ 1], 1, false);
    var hov0 = startBut.animations.add('start-no-hover', [ 0], 1, false);
    //
    var hov2= howBut.animations.add('tut-no-hover', [ 0], 1, false);
    var hov3 = howBut.animations.add('tut-hover', [ 1], 1, false);

    var flip = startBut.animations.add('countdown', [ 2, 3, 4], 1, false);
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

  },

  starthover: function(){
    startBut.animations.play('start-hover', true);
  },
  startnohover: function(){
    startBut.animations.play('start-no-hover', true);
  },
  howButDown: function(){
      console.log('pop- tutorial ');
      game.state.start('tutorial');

  },
  howButOver: function(){
      howBut.animations.play('tut-hover',true)

  },
  howButOut: function(){
        howBut.animations.play('tut-no-hover',true)

  },

};
