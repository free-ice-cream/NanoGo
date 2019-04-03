var gameover = {
  create: function(){
    console.log("State =gameover ");
    console.log("gameDuration = "+gameDuration);
    console.log("gameTime = "+gameTime);
    // var topbanner = game.add.sprite(0,0, 'greenheadbg');
    var newEnd = game.add.sprite(0,0, 'endscreen');
      restartButt = game.add.sprite(386,410, 'restart');
      //
      restartButt.inputEnabled=true;
      restartButt.events.onInputDown.add(this.ressel, this);
      restartButt.events.onInputOver.add(this.reshover,this);
      restartButt.events.onInputOut.add(this.resout,this);
      //
      alarmButt = game.add.sprite(586,410, 'alarm');
      //
      alarmButt.inputEnabled=true;
      alarmButt.events.onInputDown.add(this.alarmsel, this);
      alarmButt.events.onInputOver.add(this.alarmhover,this);
      alarmButt.events.onInputOut.add(this.alarmout,this);


    //var resultsScreen = game.add.sprite(0,0,'resultsScreen');
    this.gameOver();
    mainTheme.stop();
endlich = game.add.audio('endlich');
endlich.loopFull();

  },
  // ---------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------------
  // END CREATE
  // ---------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------------


  update: function(){

  },
  gameOver: function(){
    homeTime = true;
    //playsoundTrack();
    // mainTheme.stop();gameOverChime.play();

    // if( gameDuration - gameTime ==gameDuration){
    // gameOverChime.play();
    // var spentTime = gameDuration - gameTime;
    var spentTime = gameTime;
    var clicksPerSecond =score/spentTime;
     fullTimeS= 1000000/clicksPerSecond;
    var fullTimeM= fullTimeS/60;
    var fullTimeH = fullTimeM/60;
    var fullTimeD = fullTimeH/24;
    var roundTime = Number(fullTimeD).toFixed(1);
    var nTimes =Number(1000000/ score).toFixed(0);
    var fini = this.getFinishTime(fullTimeS);
    var roundedCicks= Number(clicksPerSecond).toFixed(1);
    //

    //
    //this.(fullTimeS);

    // goT = this.add.text(5, 8, goTitle, main28white);
    console.log("spentTime= "+spentTime);
    console.log("gameTime= "+gameTime);
    goTo1=this.add.text(40,187,goto1a+score+goto1b+spentTime+goto1c+roundedCicks+goto1d,collumOne);
    goTo2=this.add.text(40,355,goto2a+fini+goto2c,collumOne);
    goTo3 = this.add.text(418,53,goto3,collumTwo);

    // distanceTraveled = game.add.text( 236,240,score+si, endStyle);
    // timeTaken = game.add.text(439,240, gameDuration - gameTime+"s", endStyle);
    // nTimesThisTime = game.add.text(544,288, nTimes, endStyle);
    // finishDayTime = game.add.text(399,420,fini, endStyle);

  },
   getFinishTime: function(s){
      var cd = new Date();//currentDate
      var fDays;
      var fHours;
      var fMins;
      var fSecs;
      //
      fDays = Math.floor(s / 60/60/24);
      // console.log("fDays = "+fDays);
      s = s-(fDays *24*60*60);
      fHours = Math.floor(s/60/60);
      // console.log("fHours = "+fHours);
      s = s- (fHours *60*60);
      fMins = Math.floor(s/60);
      // console.log("fMins = "+fMins);
      s = s- (fMins *60);
      fSecs = s;
      // console.log("fSecs= "+fSecs);
      //
      cd.setSeconds(cd.getSeconds() + s);
      cd.setMinutes(cd.getMinutes() + fMins);
      cd.setHours(cd.getHours() + fHours);
      cd.setDate(cd.getDate() + fDays);
      //
      var zMins = cd.getMinutes();
      if(parseInt(zMins)<=9){
        zMins= "0"+zMins;
      }
      var zSecs= cd.getSeconds();
      if(parseInt(zSecs)<=9){
        zSecs= "0"+zSecs;
      }

    finishTime = dayNames[cd.getDay()]+" at "+cd.getHours()+":"+zMins+":"+zSecs;

      return finishTime;
  },
  getEndDate: function(s){
     var cd = new Date();//currentDate
     var fDays;
     var fHours;
     var fMins;
     var fSecs;
     //
     fDays = Math.floor(s / 60/60/24);
     // console.log("fDays = "+fDays);
     s = s-(fDays *24*60*60);
     fHours = Math.floor(s/60/60);
     // console.log("fHours = "+fHours);
     s = s- (fHours *60*60);
     fMins = Math.floor(s/60);
     // console.log("fMins = "+fMins);
     s = s- (fMins *60);
     fSecs = s;
     // console.log("fSecs= "+fSecs);
     //
     cd.setSeconds(cd.getSeconds() + s);
     cd.setMinutes(cd.getMinutes() + fMins);
     cd.setHours(cd.getHours() + fHours);
     cd.setDate(cd.getDate() + fDays);
     //
     var zMins = cd.getMinutes();
     if(parseInt(zMins)<=9){
       zMins= "0"+zMins;
     }
     var zSecs= cd.getSeconds();
     if(parseInt(zSecs)<=9){
       zSecs= "0"+zSecs;
     }

  // finishTime = dayNames[cd.getDay()]+" at "+cd.getHours()+":"+zMins+":"+zSecs;

     return cd;
 },
  ressel: function(){
    gameReset();
    game.state.start('menu');
  },
  reshover : function(){
    restartButt.frame=1;

  },
  resout:function(){
    restartButt.frame=0;
  },
  //
  alarmsel: function(){
     console.log("CALENDAR EVENT");
     // projectPop();
     calPop(this.getEndDate(fullTimeS));
     // console.log(hats);


      // document.querySelector('.new-cal2').appendhild(myCalendar2);
  },
  alarmhover : function(){
    alarmButt.frame=1;

  },
  alarmout:function(){
    alarmButt.frame=0;
  }

};
//end of gameover state
function gameReset(){
  score = 0;
  // gameTime=gameDuration;
  homeTime=false;
  lives = livesBase;
  holeFull=false;
  currentTemp = startTemp;
  // console.log("currentTemp at reset is "+currentTemp);
  endlich.stop();
  gameLive= true;
  phaseShift= false;
  drift = driftBase;
  distCheck = 0;
  // carType=1;
  // trackselection=1;
}
