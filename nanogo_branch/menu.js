var menuState = {
  create: function(){
    // var placeLabel = game.add.text(100,100, "Nano Go!", introStyle);
    logo = game.add.sprite(173,57, 'logo');
    startSeq = game.add.sprite(102,208, 'startSeq');
    howBut = game.add.sprite(360,288, 'tutbut');
    //
    // properStart = game.add.sprite(360,288, 'outRigger');
    // properStart.inputEnabled=true;
    // properStart.events.onInputDown.add(this.pStartDown, this);
    // properStart.events.onInputOver.add(this.pStartOver,this);
    // properStart.events.onInputOut.add(this.pStartOut,this);
    // audioControl = game.add.sprite(100,100, 'soundcontrol');

    startSeq.inputEnabled=true;
    startSeq.events.onInputDown.add(this.startListening, this);
    startSeq.events.onInputOver.add(this.starthover,this);
    startSeq.events.onInputOut.add(this.startnohover,this);
    //
    // audioControl.inputEnabled = true;
    // audioControl.events.onInputDown.add(this.audioToggle, this);
    //
    howBut.inputEnabled = true;
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



//all audio butt stuff
    // audioControl = game.add.sprite(100,100, 'soundcontrol');
    // var audioon = audioControl.animations.add('audioOn', [ 0], 1, false);
    // var audiooff = audioControl.animations.add('audioOff', [ 1], 1, false);
    // audioControl.inputEnabled = true;
    // audioControl.events.onInputDown.add(this.audioToggle, this);
    //

// speaker but
mainTheme = game.add.audio('theme');
speakerbut = game.add.sprite(game.world.width - 50, 15, 'speakerbut');
var speakerOn = speakerbut.animations.add('sp-on', [0], 1, false);
var speakerOff= speakerbut.animations.add('sp-off', [1], 1, false);
speakerbut.inputEnabled = true;
speakerbut.events.onInputDown.add(this.speakerButContol, this);
console.log("menu audioLive = ", audioLive);
if(audioLive){
  speakerbut.animations.play('sp-on');
}else{
  speakerbut.animations.play('sp-off');
}
//
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
    if(!countDown){
    startSeq.animations.play('start-hover', true);
  }
  },
  startnohover: function(){
    if(!countDown){
      startSeq.animations.play('start-no-hover', true);
    }

  },
  howButDown: function(){
      // console.log('pop- tutorial ');
      // game.state.start('tutorial');
      // game.state.start('options1');
      game.state.start('pstart1');
  },
  howButOver: function(){
      howBut.animations.play('tut-hover',true)

  },
  howButOut: function(){
        howBut.animations.play('tut-no-hover',true)

  },
  audioToggle:function(){

    audioLive = !audioLive;

  },
  speakerButContol: function() {
    if(audioLive){
      speakerbut.animations.play('sp-off', true);
      audioLive = false;
      mainTheme.stop();
      console.log("flip");
    }else{
      speakerbut.animations.play('sp-on', true);
      audioLive = true;
      mainTheme.loopFull(.5);
      console.log("flop");
    }

  },
  pStartDown: function(){
      // console.log('pop- tutorial ');
      // game.state.start('tutorial');
      game.state.start('pstart1');

  },
  pStartOver: function(){
      // howBut.animations.play('tut-hover',true)

  },
  pStartOut: function(){
        // howBut.animations.play('tut-no-hover',true)

  },

};
function quickSet(){
  // score = 0;
  // gameTime=gameDuration;
  // homeTime=false;
  carType=1;
  trackselection=2;
}
