var tutorialState = {
  create: function(){
    howToScreen = game.add.sprite(0,0,'tutorialScreen');
    howToStartBut = game.add.sprite(500,497,'ministartss');
    howToStartBut.inputEnabled = true;
    howToStartBut.events.onInputDown.add(this.tshowButDown, this);
    howToStartBut.events.onInputOver.add(this.tshowButOver, this);
    howToStartBut.events.onInputOut.add(this.tshowButOut, this);
    // //
    var hov4= howToStartBut.animations.add('tut-no-hover', [ 0], 1, false);
    var hov5 = howToStartBut.animations.add('tut-hover', [ 1], 1, false);
  },
  tshowButDown: function(){
      // console.log('pop- start ');
      // game.state.start('play');
game.state.start('options1');
  },
  tshowButOver: function(){
      howToStartBut.animations.play('tut-hover',true)

  },
  tshowButOut: function(){
        howToStartBut.animations.play('tut-no-hover',true)

  }

};
