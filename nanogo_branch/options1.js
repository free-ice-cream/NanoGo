var optionsState1 = {
  // BASICS
  create: function() {
    console.log("optionsState1");
    var topbanner = game.add.sprite(0, 0, 'greenheadbg');
    nextbut = game.add.sprite(660, 473, 'tracknext');
    // howBut = game.add.sprite(360,288, 'tutbut');
    nextbut.inputEnabled = true;
    nextbut.events.onInputDown.add(this.nextsel, this);
    nextbut.events.onInputOver.add(this.nexthover, this);
    nextbut.events.onInputOut.add(this.nextout, this);
    //
    var nexthov1 = nextbut.animations.add('hover', [1], 1, false);
    var nexthov0 = nextbut.animations.add('no-hover', [0], 1, false);
    //
    oTo11 = this.add.text(165, 8, oto11, main28white);
    oTo12 = this.add.text(30, 100, oto12, first18greenc);
    oTo13 = this.add.text(30, 180, oto13, first18greenc);
    oTo14 = this.add.text(30, 230, oto14, first18greenc);
    oTo15 = this.add.text(30, 280, oto15, first18greenc);
    oTo16 = this.add.text(30, 330, oto16, first18greenc);
    oTo17 = this.add.text(30, 380, oto17, first18greenc);
    oTo18 = this.add.text(30, 530, oto18, first18greenc);
    //

    // console.log("bassLoop", bassLoop);
    // if(bassLoop === "undefined"){
    //   console.log("undefined bass");
    // }
    if (!options1Audio) {
      bassLoop = game.add.audio('bass-loop');
      if(audioLive){
      bassLoop.loopFull(0.8);
    }
      options1Audio = true;
    }
    //
    //all audio butt stuff
    // audioControl = game.add.sprite(100,100, 'soundcontrol');
    // volback = game.add.sprite(vbx, vby, 'volback');
    // volplus = game.add.sprite(pbx, pby, 'volplus');
    // volminus = game.add.sprite(mbx, mby, 'volminus');
    //
    // speaker but

    speakerbut = game.add.sprite(game.world.width - 50, 15, 'speakerbut');
    var speakerOn = speakerbut.animations.add('sp-on', [0], 1, false);
    var speakerOff= speakerbut.animations.add('sp-off', [1], 1, false);
    speakerbut.inputEnabled = true;
    speakerbut.events.onInputDown.add(this.speakerButContol, this);
    if(audioLive){
      speakerbut.animations.play('sp-on');
    }else{
      speakerbut.animations.play('sp-off');
    }
    //
    //
    // var audplus0 = volplus.animations.add('vp-rest', [0], 1, false);
    // var audplus1 = volplus.animations.add('vp-hov', [1], 1, false);
    // var audplus2 = volplus.animations.add('vp-down', [2], 1, false);
    // var audplus3 = volplus.animations.add('vp-max', [3], 1, false);
    // //
    // var audmin = volminus.animations.add('vm-rest', [0], 1, false);
    // var audmin1 = volminus.animations.add('vm-hov', [1], 1, false);
    // var audmin2 = volminus.animations.add('vm-down', [2], 1, false);
    // var audmin3 = volminus.animations.add('vm-min', [3], 1, false);
    //
    // var audioon = audioControl.animations.add('audioOn', [ 0], 1, false);
    // var audiooff = audioControl.animations.add('audioOff', [ 1], 1, false);
    // volplus.inputEnabled = true;
    // volminus.inputEnabled = true;
    // //
    // volplus.events.onInputDown.add(this.plusPlus, this);
    // volplus.events.onInputOver.add(this.plusOver, this);
    // volplus.events.onInputOut.add(this.plusOut, this);
    // //
    // volminus.events.onInputDown.add(this.minusPlus, this);
    // volminus.events.onInputOver.add(this.minusOver, this);
    // volminus.events.onInputOut.add(this.minusOut, this);
    //
    // console.log("bassLoop", bassLoop);
    console.log("options1 audioLive = ", audioLive);
  },
  update: function() {

  },
  nexthover: function() {
    // if(trackselection==1){
    nextbut.animations.play('hover', true);
    // }
  },
  nextout: function() {
    // if(trackselection== 1){
    nextbut.animations.play('no-hover', true);
    // }
  },
  nextsel: function() {
    // console.log("next");
    game.state.start('options2');
    // if(trackselection== 1){
    //nextbut.animations.play('no-hover', true);
    // }
  },
  audioToggle: function() {

    // audioLive = !audioLive;
    // options1Audio = !options1Audio;
    //
    // console.log("audio but");
    // if(audioLive){
    //     //audioControl.animations.play('audioOn', true);
    //     bassLoop.volume = 1;
    // }else{
    //     //audioControl.animations.play('audioOff', true);
    //     bassLoop.volume = 0.1;
    // }

  },
  //audio functions
  // plusPlus: function() {
  //   if (gameLiveVol <= 0.9) {
  //     gameLiveVol += 0.1;
  //     bassLoop.volume = gameLiveVol;
  //     volplus.animations.play('vp-down', true)
  //   }
  // },
  // plusOver: function() {
  //   volplus.animations.play('vp-hov', true)
  // },
  // plusOut: function() {
  //   volplus.animations.play('vp-rest', true)
  // },
  // minusPlus: function() {
  //
  //   if (gameLiveVol>= 0.1) {
  //     console.log(gameLiveVol);
  //     gameLiveVol -= 0.1;
  //     bassLoop.volume = gameLiveVol;
  //     volminus.animations.play('vm-down', true)
  //   }
  // },
  // minusOver: function() {
  //   volminus.animations.play('vm-hov', true)
  // },
  // minusOut: function() {
  //   volminus.animations.play('vm-rest', true)
  // },
  //
  speakerButContol: function() {
    if(audioLive){
      console.log("flipp");
      speakerbut.animations.play('sp-off', true);
      audioLive = false;
      bassLoop.stop();
    }else{
      console.log("flopp");
      speakerbut.animations.play('sp-on', true);
      audioLive = true;
      bassLoop.loopFull(.5);
    }

    }
  //end audio functions
}
