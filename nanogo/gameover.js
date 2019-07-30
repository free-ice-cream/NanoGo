var gameover = {
  create: function() {
    console.log("State =gameover ");
    console.log("gameDuration = " + gameDuration);
    console.log("gameTime = " + gameTime);
    // var topbanner = game.add.sprite(0,0, 'greenheadbg');
    var newEnd = game.add.sprite(0, 0, 'endscreen');
    restartButt = game.add.sprite(386, 410, 'restart');
    //
    restartButt.inputEnabled = true;
    restartButt.events.onInputDown.add(this.ressel, this);
    restartButt.events.onInputOver.add(this.reshover, this);
    restartButt.events.onInputOut.add(this.resout, this);
    //
    alarmButt = game.add.sprite(586, 410, 'alarm');
    //
    alarmButt.inputEnabled = true;
    alarmButt.events.onInputDown.add(this.alarmsel, this);
    alarmButt.events.onInputOver.add(this.alarmhover, this);
    alarmButt.events.onInputOut.add(this.alarmout, this);


    //var resultsScreen = game.add.sprite(0,0,'resultsScreen');
    this.gameOver();
    mainTheme.stop();
    endlich = game.add.audio('endlich');
    if(audioLive){

      endlich.loopFull();
      endlich.volume = gameLiveVol;

    }


    //

    //all audio butt stuff


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
    // audioControl = game.add.sprite(100,100, 'soundcontrol');
    // volback = game.add.sprite(vbx, vby, 'volback');
    // volplus = game.add.sprite(pbx, pby, 'volplus');
    // volminus = game.add.sprite(mbx, mby, 'volminus');
    // //
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
    // //

  },
  // ---------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------------
  // END CREATE
  // ---------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------------


  update: function() {

  },
  gameOver: function() {
    homeTime = true;
    //playsoundTrack();
    // mainTheme.stop();gameOverChime.play();

    // if( gameDuration - gameTime ==gameDuration){
    // gameOverChime.play();
    // var spentTime = gameDuration - gameTime;
    var spentTime = gameTime;
    var clicksPerSecond = score / spentTime;
    fullTimeS = 1000000 / clicksPerSecond;
    var fullTimeM = fullTimeS / 60;
    var fullTimeH = fullTimeM / 60;
    var fullTimeD = fullTimeH / 24;
    var roundTime = Number(fullTimeD).toFixed(1);
    var nTimes = Number(1000000 / score).toFixed(0);
    var fini = this.getFinishTime(fullTimeS);
    var roundedCicks = Number(clicksPerSecond).toFixed(1);
    //

    //
    //this.(fullTimeS);

    // goT = this.add.text(5, 8, goTitle, main28white);
    console.log("spentTime= " + spentTime);
    console.log("gameTime= " + gameTime);
    goTo1 = this.add.text(40, 187, goto1a + score + goto1b + spentTime + goto1c + roundedCicks + goto1d, collumOne);
    goTo2 = this.add.text(40, 355, goto2a + fini + goto2c, collumOne);
    goTo3 = this.add.text(418, 53, goto3, collumTwo);

    // distanceTraveled = game.add.text( 236,240,score+si, endStyle);
    // timeTaken = game.add.text(439,240, gameDuration - gameTime+"s", endStyle);
    // nTimesThisTime = game.add.text(544,288, nTimes, endStyle);
    // finishDayTime = game.add.text(399,420,fini, endStyle);

  },
  getFinishTime: function(s) {
    var cd = new Date(); //currentDate
    var fDays;
    var fHours;
    var fMins;
    var fSecs;
    //
    fDays = Math.floor(s / 60 / 60 / 24);
    // console.log("fDays = "+fDays);
    s = s - (fDays * 24 * 60 * 60);
    fHours = Math.floor(s / 60 / 60);
    // console.log("fHours = "+fHours);
    s = s - (fHours * 60 * 60);
    fMins = Math.floor(s / 60);
    // console.log("fMins = "+fMins);
    s = s - (fMins * 60);
    fSecs = s;
    // console.log("fSecs= "+fSecs);
    //
    cd.setSeconds(cd.getSeconds() + s);
    cd.setMinutes(cd.getMinutes() + fMins);
    cd.setHours(cd.getHours() + fHours);
    cd.setDate(cd.getDate() + fDays);
    //
    var zMins = cd.getMinutes();
    if (parseInt(zMins) <= 9) {
      zMins = "0" + zMins;
    }
    var zSecs = cd.getSeconds();
    if (parseInt(zSecs) <= 9) {
      zSecs = "0" + zSecs;
    }

    finishTime = dayNames[cd.getDay()] + " at " + cd.getHours() + ":" + zMins + ":" + zSecs;

    return finishTime;
  },
  getEndDate: function(s) {
    var cd = new Date(); //currentDate
    var fDays;
    var fHours;
    var fMins;
    var fSecs;
    //
    fDays = Math.floor(s / 60 / 60 / 24);
    // console.log("fDays = "+fDays);
    s = s - (fDays * 24 * 60 * 60);
    fHours = Math.floor(s / 60 / 60);
    // console.log("fHours = "+fHours);
    s = s - (fHours * 60 * 60);
    fMins = Math.floor(s / 60);
    // console.log("fMins = "+fMins);
    s = s - (fMins * 60);
    fSecs = s;
    // console.log("fSecs= "+fSecs);
    //
    cd.setSeconds(cd.getSeconds() + s);
    cd.setMinutes(cd.getMinutes() + fMins);
    cd.setHours(cd.getHours() + fHours);
    cd.setDate(cd.getDate() + fDays);
    //
    var zMins = cd.getMinutes();
    if (parseInt(zMins) <= 9) {
      zMins = "0" + zMins;
    }
    var zSecs = cd.getSeconds();
    if (parseInt(zSecs) <= 9) {
      zSecs = "0" + zSecs;
    }

    // finishTime = dayNames[cd.getDay()]+" at "+cd.getHours()+":"+zMins+":"+zSecs;

    return cd;
  },
  ressel: function() {
    gameReset();
    game.state.start('menu');
  },
  reshover: function() {
    restartButt.frame = 1;

  },
  resout: function() {
    restartButt.frame = 0;
  },
  //
  alarmsel: function() {
    console.log("CALENDAR EVENT");
    // projectPop();
    calPop(this.getEndDate(fullTimeS));
    // console.log(hats);


    // document.querySelector('.new-cal2').appendhild(myCalendar2);
  },
  alarmhover: function() {
    alarmButt.frame = 1;

  },
  alarmout: function() {
    alarmButt.frame = 0;
  },
  //
  //audio functions
  // plusPlus: function() {
  //   console.log("bassLoop.volume ", bassLoop.volume);
  //   if (gameLiveVol <= 0.9) {
  //     gameLiveVol += 0.1;
  //     mainTheme.volume = gameLiveVol;
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
  //   if (gameLiveVol >= 0.1) {
  //     gameLiveVol -= 0.1;
  //     mainTheme.volume = gameLiveVol;
  //     volminus.animations.play('vm-down', true)
  //   }
  // },
  // minusOver: function() {
  //   volminus.animations.play('vm-hov', true)
  // },
  // minusOut: function() {
  //   volminus.animations.play('vm-rest', true)
  // },
  speakerButContol: function() {
    if(audioLive){
      speakerbut.animations.play('sp-off', true);
      audioLive = false;
      endlich.stop();
    }else{
      speakerbut.animations.play('sp-on', true);
      audioLive = true;
      endlich.loopFull(.5);
    }

    }
  //end audio functions


};
//
//end of gameover state
//
function gameReset() {
  score = 0; //reset the score
  homeTime = false;
  lives = livesBase; // reset the lives to full
  holeFull = false; // make sure the holes are empty
  currentTemp = startTemp; // reset teh tempereature
  endlich.stop(); // stop the end music
  gameLive = true; // set teh game state to !live
  phaseShift = false; //reset the boling point effects
  drift = driftBase; // reset the amount the car skids by : nb this
  distCheck = 0; // reset teh distance traveles checking var to 0
  outBool1 = false; // make sure we dont have any outriggers
  outBool2 = false;
  outBool3 = false;
  outBool4 = false;
  sheildScale = 0; // reset the heatsheild to 0
  barCounter = [];

  // get rid of the unwanted sprites
  for (let i = 0; i < holeArray.length; i++) {
    holeArray[i].destroy();
    holeArray.splice(i, 1);
  }
  for (let i = 0; i < zombies.length; i++) {
    zombies[0].destroy();
    zombies.splice(0, 1)
  }
  //
}
