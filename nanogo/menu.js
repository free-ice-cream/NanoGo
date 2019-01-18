var menuState = {
  create: function(){
    // var placeLabel = game.add.text(100,100, "Nano Go!", introStyle);
    logo = game.add.sprite(173,57, 'logo');
    startSeq = game.add.sprite(102,208, 'startSeq');
    howBut = game.add.sprite(360,288, 'tutbut');
    startSeq.inputEnabled=true;
    startSeq.events.onInputDown.add(this.startListening, this);
    startSeq.events.onInputOver.add(this.starthover,this);
    startSeq.events.onInputOut.add(this.startnohover,this);
    //
    howBut.inputEnabled=true;
    howBut.events.onInputDown.add(this.howButDown, this);
    howBut.events.onInputOver.add(this.howButOver, this);
    howBut.events.onInputOut.add(this.howButOut, this);
    //

    // var hov1 =
    var hov1 = startSeq.animations.add('start-hover', [ 1], 1, false);
    var hov0 = startSeq.animations.add('start-no-hover', [ 0], 1, false);
    //
    var hov2= howBut.animations.add('tut-no-hover', [ 0], 1, false);
    var hov3 = howBut.animations.add('tut-hover', [ 1], 1, false);

    var flip = startSeq.animations.add('countdown', [ 2, 3, 4], 1, false);
    flip.onComplete.add(this.start, this);

   console.log('menuState');
   
  },
  start: function(){
    console.log('pop- start ');
    quickSet();
    game.state.start('play');
    countDown=false;
  },
  startListening: function(){
    console.log('pop - startListening');
    startSeq.animations.play('countdown', true);
    countDown=true;
  },

  starthover: function(){
    startSeq.animations.play('start-hover', true);
  },
  startnohover: function(){
    if(!countDown){
      startSeq.animations.play('start-no-hover', true);
    }

  },
  howButDown: function(){
      // console.log('pop- tutorial ');
      // game.state.start('tutorial');
      game.state.start('options1');

  },
  howButOver: function(){
      howBut.animations.play('tut-hover',true)

  },
  howButOut: function(){
        howBut.animations.play('tut-no-hover',true)

  },

};
function quickSet(){
  // score = 0;
  // gameTime=gameDuration;
  // homeTime=false;
  carType=1;
  trackselection=1;
}
