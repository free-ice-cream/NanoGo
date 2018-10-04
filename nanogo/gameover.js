var gameover = {
  create: function(){
    console.log("State =gameover ");
    console.log("gameDuration = "+gameDuration);
    console.log("gameTime = "+gameTime);
    this.gameOver();
    // gameOverChime = game.add.audio('win');
  },
  update: function(){

    // if( gameDuration - gameTime <=gameDuration){
    //   gameOverChime.play();
    // }
  },
  gameOver: function(){
    homeTime = true;
    //playsoundTrack();
    mainTheme.stop();
    if( gameDuration - gameTime <=gameDuration){
      gameOverChime.play();
    }
    if(!goSet){
      goBack = game.add.graphics(0, 0);
      goBack.beginFill(0x00ff00);
      goBack.drawPolygon(gObg.points);
      goBack.alpha = 0.3;
      goBack.endFill();
      goSet = true;

    }


    // var clicksPerSecond =score/gameDuration;
    var spentTime = gameDuration - gameTime;
    var clicksPerSecond =score/spentTime;
    var fullTimeS= 1000000/clicksPerSecond;
    var fullTimeM= fullTimeS/60;
    var fullTimeH = fullTimeM/60;
    var fullTimeD = fullTimeH/24;
    var roundTime = Number(fullTimeD).toFixed(1);
    // console.log("clicksPerSecond="+clicksPerSecond);
    // console.log("full time s = "+fullTimeS);
    // console.log("full time m = "+fullTimeM);
    // console.log("final time H= "+fullTimeH);
    // console.log("final time D = "+fullTimeD);
    // console.log("rounded Time  = "+roundTime);
    // console.log("score = "+score);
    // console.log("gameDuration = "+gameDuration);
    //
    this.getFinishTime(fullTimeS);

    //goSet = false;
    //drawGameOverBG(0.9);

    //endText = this.add.text(endX, endY, "", { fontSize: '20px', fill: '#fff' });
    // var endStyle = { font: 'bold 20pt courier ', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 650 };
    endText = game.add.text(endX,endY, "", endStyle);
    // endText.setText(endText1+score+si+" in "+gameDuration+"s "+endText2+roundTime+endText3);
    // endText.setText(endText1+score+si+endText5+gameDuration+endText6+ finishTime);
    endText.setText(endText1+score+si+endText5+spentTime+endText6+ finishTime);

  },
   getFinishTime: function(s){
      var cd = new Date();//currentDate
      // console.log("start cd= "+cd);

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


      // console.log("end cd= "+cd);
      // console.log("cd.getDay() = " +cd.getDay());
      // console.log("dayNames[cd.getDate()] = "+dayNames[cd.getDay()]);
      var zMins = cd.getMinutes();
      if(parseInt(zMins)<=9){
        zMins= "0"+zMins;
      }
      var zSecs= cd.getSeconds();
      if(parseInt(zSecs)<=9){
        zSecs= "0"+zSecs;
      }



      // var today = cd.getDay();
      // var hour = cd.getHours();
      // var mins = cd.getMinutes();
      // //
      // var finishDay
      finishTime = endText2+dayNames[cd.getDay()]+" at "+cd.getHours()+":"+zMins+":"+zSecs;
      // var time = currentdate.getHours() + ":"  + currentdate.getMinutes() + ":" + currentdate.getSeconds();
      //console.log("getDate() =  "+currentdate.getDate());

      return finishTime;
  }

};
