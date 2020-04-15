var playState = {

  create: function() {
    //set up the graffic assets
    //set the background hexgrid
    // set the track and mode
    // if (trackselection === 1) {
    //   // the next line creates  the tilesprite bg
    //   hexgrid = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'graphene');
    //   friction = cold;
    //   drift *= friction;
    //   //TODO check the use if friction
    //   trackMeltingPoint = meltingPointOfGraphene;
    // } else if (trackselection === 2) {
    //   hexgrid = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'silver');
    //   friction = cold;
    //   drift *= friction;
    //   trackMeltingPoint = meltingPointOfSilver;
    // } else {
    //   console.log("CRASH - no track");
    // }
    cheatdeath = false;
    hexgrid = game.add.tileSprite(0, 0, game.world.width, game.world.height, trackArr[trackselection]);
    friction = cold;
    drift *= friction;
    trackMeltingPoint = trackMeltingPointArr[trackselection];

    hexgrid.animations.add("cool", [0, 1, 3], 2, true);
    hexgrid.animations.add("warm", [0, 1, 2, 3, 4], 4, true);
    hexgrid.animations.add("hot", [4, 5, 6, 7, 8, 9, 10], 12, true);
    hexgrid.animations.play("cool");
    //

    lattice = game.add.group();
    lattice.enableBody = true;

    //first we loop through all the rows
    atomRows= (game.world.height/ atomY)+2;
    atomColumns = (game.world.width/ atomX)+2;
    //
    atomRowsHex= (game.world.height/ hexAtomY)+3;
    atomColumnsHex = (game.world.width/ hexAtomX)+3;


  if(trackselection==1){

    for(let i = 0; i<= atomRows; i++ ){
      // then for each row we loop through each position
      for(let j = 0; j <= atomColumns  ; j ++){
        //at each postion we create a sprite by adding it to our array this way we can get at it again later
        atomMatrix[i][j]= lattice.create(atomX * j, (atomY *i) -atomY, 'silver-atoms');
        atomMatrix[i][j].animations.add("basic",[randomFrame(),randomFrame(),randomFrame(),randomFrame(),randomFrame(),randomFrame()],12,true);
        atomMatrix[i][j].animations.play("basic");
        atomAngles[i][j] = randomAngle();
        atomOscilationSteps[i][j] = randomSteps();
        atomOscilationBools[i][j] = randomBool();
        atomOscilationStepsLive[i][j] = 0;// start at teh beginning
        atomMatrix[i][j].body.drag.y=worldDragRate;


      }
    }
  }else if(trackselection==2){

    for(let i = 0; i<= atomRowsHex; i++ ){
      // then for each row we loop through each position
      let builtPosition=0
      for(let j = 0; j <= atomColumnsHex  ; j ++){

        if(isOdd(i)){
          console.log("ODD");
            // ODD
            if(!verboseHexLineOdd[j]){
              builtPosition += hexAtomX2;
              atomMatrixHex[i][j]= lattice.create(builtPosition, (hexAtomY *i) -hexAtomY, 'new-atoms');
              atomMatrixHex[i][j].alpha =0.1;
            }else{
              builtPosition += hexAtomX;
              atomMatrixHex[i][j]= lattice.create(builtPosition, (hexAtomY *i) -hexAtomY, 'new-atoms');
            }
        }else {
          console.log("EVEN");
          if(!verboseHexLineEven[j]){
            builtPosition += hexAtomX2;
            atomMatrixHex[i][j]= lattice.create(builtPosition, (hexAtomY *i) -hexAtomY, 'new-atoms');
            atomMatrixHex[i][j].alpha =0.1;
          }else{
            builtPosition += hexAtomX;
            atomMatrixHex[i][j]= lattice.create(builtPosition, (hexAtomY *i) -hexAtomY, 'new-atoms');
          }
        //
        }
        atomMatrixHex[i][j].animations.add("basic",[randomFrame(),randomFrame(),randomFrame(),randomFrame(),randomFrame(),randomFrame()],12,true);
        atomMatrixHex[i][j].animations.play("basic");
        //
        atomAngles[i][j] = randomAngle();
        atomOscilationSteps[i][j] = randomSteps();
        atomOscilationBools[i][j] = randomBool();
        atomOscilationStepsLive[i][j] = 0;// start at teh beginning
        atomMatrixHex[i][j].body.drag.y=worldDragRate;
        //


      }
    }
  }

    //
    finishline = game.add.sprite(0, -100, "finishline");

    //Set teh drift (lateral speed ) based on car selection
    if (carType === 1) {
      drift /= 2;// hello hello ??
      tempEffectX = tempEffect2; //set the lateral random movement fro heat.
    }
    hexgrid.alpha = 0;
    //
    platforms = game.add.physicsGroup(); //for the hud
    platforms.enableBody = true;
    var barr = platforms.create(0, game.world.height - barrOffset, 'bar');
    barr.body.immovable = true;
    barr.alpha = 0;
    //
    //Holes
    holesGroup = game.add.group();
    holesGroup.enableBody = true;

    this.setHole();
    //
    //Power Ups
    powerGroup = game.add.group();
    powerGroup.enableBody = true;
    bluePowerUp = powerGroup.create(-200, -200, 'blue-power-up');
    bluePowerUp.body.immovable = true;
    game.physics.arcade.enable(bluePowerUp);
    bluePowerUp.body.drag.y=worldDragRate;

    //Steps
    stepGroup = game.add.group();
    stepGroup.enableBody = true;
    leftStepGroup = game.add.group();
    leftStepGroup.enableBody = true;
    createSteps();
    //
    deadGroup = game.add.group();
    // deadGroup.enableBody = true;
    // game.physics.arcade.enable(deadGroup);
    // deadGroup.body.drag.y=worldDragRate;

    // powerGroup.enableBody = true;
    // deadCar= powerGroup.create(-200, -200, 'blue-power-up');
    // bluePowerUp.body.immovable = true;

    heatSheildMeter = game.add.sprite(690, 50, 'heatsheildmeter');
    freezeMeter = game.add.sprite(thermX, thermY-425, 'freeze');
    freezeMeter.alpha = 0;
    // heatSheild.alpha = 0.5;
    heatSheildMeter.alpha = 0.7;
    heatSheildMeter.scale.setTo(0, 1);
    //
    outRiggers = game.add.group();
    outRiggers.enableBody = true;
    outRig1 = outRiggers.create(-200, -200, 'outrigger');
    outRig2 = outRiggers.create(-200, -200, 'outrigger');
    outRig3 = outRiggers.create(-200, -200, 'outrigger');
    outRig4 = outRiggers.create(-200, -200, 'outrigger');

    //Create the car

    car = game.add.sprite(game.world.width / 2 - 25, carStartY, cars[carType]); //CAR START POS
    // if (carType === 2) {
    //   car = game.add.sprite(game.world.width / 2 - 25, carStartY, 'buckycar'); //CAR START POS
    //   // console.log("how many?");
    // } else if (carType === 1) {
    //   if (testing) {
    //     car = game.add.sprite(game.world.width / 2 - 25, carStartY, 'tubecar-test'); //CAR START POS
    //   } else {
    //     car = game.add.sprite(game.world.width / 2 - 25, carStartY, 'tubecar'); //CAR START POS
    //   }
    //
    //   // console.log("how many?");
    // }
    //
    var smlLogo = game.add.sprite(10, 10, 'logo');
    smlLogo.scale.setTo(0.5, 0.5);
    //

    emitter = game.add.emitter(game.world.centerX, 0, 400);

    // NEW NEW HUD :)
    thermLevels = game.add.group();
    // var frame = thermLevels.create(thermX, thermY, 'therm-frame');

    //
    //Set some properties
    //
    this.setLives();
    game.physics.arcade.enable(car);
    car.body.bounce.y = carBounce;
    // car.body.gravity.y = carGrav; //
    car.body.collideWorldBounds = true;
    car.anchor.setTo(0.5, 0.5);
    car.body.drag.x = carDragRate;
    car.body.drag.y = carYDrag;
    // car.body.immovable = true;//?? TBC

    // car.anchor.setTo(0.25, 0.25);
    //
    // game.physics.arcade.enable(hole);//  //  HOLE REMOVED
    game.physics.arcade.enable(bluePowerUp);
    //
    //lets add some AUDIO
    //
    rev = game.add.audio('rev');
    mainTheme = game.add.audio('theme');
    holeDeath = game.add.audio('death');
    gameOverChime = game.add.audio('win');
    swipe = game.add.audio('swipe');
    powerUpBlips = game.add.audio('power-up-blips');
    fallFx = game.add.audio('fall-sfx');
    grindFx = game.add.audio('grind');
    grindFx.allowMultiple = true;
    grindFx.volume=sfxLevel;
    // mainTheme.volume =  musicVol;
    mainTheme.loopFull(musicVol);
    // mainTheme.volume =  gameLiveVol;
    //
    // Get keyboard input
    //
    //cursors = this.input.keyboard.createCursorKeys();
    cursors = game.input.keyboard.createCursorKeys();
    spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    //
    //ANIMATIONS
    //
    car.animations.add('rotate', [1, 2, 3, 4, 5, 6, 7, 8, 9], 60, true);
    car.animations.add('stop', [0], 20, true);
    car.animations.add('crash', [9, 10, 11], 60, true);
    car.animations.add('spawn', [0, 12], 12, true);

    // hole.animations.add('fizz', [0, 1, 2, 3, 4], 20, true);  //  HOLE REMOVED
    bluePowerUp.animations.add('freeze', [0, 1, 2, 3, 4, 5], 20, true);
    // outRigger.animations.add("rotate",[0,1,2,3,4,5,6,7,8,9],20,true);
    //
    //TEXT
    //

    //
    //
    //           HUD BELOW
    //
    //
    //
    racegauge= game.add.sprite(game.world.width - 50, 0, 'racegauge');
    placeMarker= game.add.sprite(game.world.width - 48, game.world.height-70, cars[carType]);
    placeMarker.scale.setTo(0.3,0.3);

    //
    scoreText = this.add.text(752, game.world.height - hudOffset + 60, score, score14green);

    tempLabel = this.add.text(thermX, game.world.height - 75, temperatureLabel, screen18white);
    tempLabel2 = this.add.text(thermX, game.world.height - 55, temperatureLabel2, screen18white);
    clockText = this.add.text(thermX, game.world.height -  25, Math.floor(currentTemp), score14green); // now the temperature
    siText = this.add.text(thermX+65, game.world.height - 25, tempScaleName, score14green);//k
    //
    meltL1 = this.add.text(thermX,game.world.height -555, meltLabel1,screen18white);
    meltL2 = this.add.text(thermX,game.world.height -535, meltLabel2,screen18white);

    endmessage1 = this.add.text(200, 150, "", main56);
    endmessage2 = this.add.text(130, 250, "", thin28white);
    //
    lapLabel = this.add.text(game.world.width -50, 0, lap, lapWhite);
    //
    var frame = thermLevels.create(thermX, thermY -425, 'therm-frame');
    //
    platforms.alpha = 1;

    bluePowerUp.animations.play('freeze', true);
    //


    this.mainTick();
    this.secondTick();

    try {
      bassLoop.stop();
    } catch (e) {
      console.log("e =" + e);
    }
    //Temp Breaks
    for (i = 0; i <= noOfBreaks - 1; i++) {
      tempBreaks[i] = (trackMeltingPoint / noOfBreaks) * (i + 1);
    }
    //
    // test mode settings
    //
    if (testing) {
      // trackMeltingPoint = 5000;
      tempIncrement = 27;
      audioLive = false;
      // creeTime = 200000; // can be used to create invulnerable after the first hit
    }
    //
    spawnCar(true); // calls a car in to being. true if this is game start false otherwise this sets the cree function
    //
    carCentreX = car.width / 2;
    carCentreY = car.height / 2;
    //

    speakerbut = game.add.sprite(game.world.width - 200, 15, 'speakerbut');


    //
    var speakerOn = speakerbut.animations.add('sp-on', [0], 1, false);
    var speakerOff = speakerbut.animations.add('sp-off', [1], 1, false);

    speakerbut.inputEnabled = true;

    speakerbut.events.onInputDown.add(this.speakerButContol, this);
    //
    if(audioLive){
      speakerbut.animations.play('sp-on');
    }else{
      speakerbut.animations.play('sp-off');
    }


  },
  // ---------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------------
  /// END CREATE
  // ---------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------------
  update: function() {
    if (audioLive) {
      //mainTheme.play();
    } else {
      mainTheme.stop();
    }
    // game.emitter.setYSpeed(currentTemp);
    game.physics.arcade.collide(car, platforms);
    // game.physics.arcade.collide(car, powerGroup);
    //
    if (hitTheWall) {
      for(i=0; i< leftStaircase.length; i++){
        game.physics.arcade.collide(car, leftStaircase[i])
      }
      for(i=0; i< rightStaircase.length; i++){
        game.physics.arcade.collide(car, rightStaircase[i])
      }


    }

    //detect hole collision


    // game.physics.arcade.overlap(hole, car, crash, checkRespawnTime, this); //  HOLE REMOVED
    game.physics.arcade.overlap(bluePowerUp, car, this.sheildUp, this.movePowerUp, this);




    // isHCrashing = game.physics.arcade.overlap(hole, car, crash, checkRespawnTime, this);
    isHCrashing = game.physics.arcade.overlap(hole, car, holeExposure, checkRespawnTime, this);
    if (!isHCrashing ){
       hCrashTime  = 0;


     }else{
        playState.playFx("grind");
        grind(true,hCrashCount);
     }


    if (hCrashTime  > HLIMIT) {
      crash(hole, car);
      // playState.playFx("grind");

      // …

    }


//
    lCrashCount = 0
    for(i=0; i< leftStaircase.length; i++){
        isLCrashing[i]  = game.physics.arcade.overlap(leftStaircase[i], car, leftWallExposure, null, this);
        if (isLCrashing[i]){
          lCrashCount += 1;
          lcoH = leftStaircase[i];
          grind(true,lCrashCount);
      }else{
        grind(false,lCrashCount);
      }
    }
    if(lCrashCount === 0 ){
      lCrashTime = 0;
    }
    if(lCrashTime > LIMIT){
      lCrashTime = 0;
      leftDrop(lcoH, car);
    }
//
  rCrashCount = 0

    for(i=0; i< rightStaircase.length; i++){
        // game.physics.arcade.overlap(rightStaircase[i], car, rightDrop, secCall, this);
        isRCrashing[i]  = game.physics.arcade.overlap(rightStaircase[i], car, rightWallExposure, null, this);
        if (isRCrashing[i]){
          rCrashCount += 1;
          rcoH = rightStaircase[i];
          grind(true);
          //

      }else{
        grind(false);
      }
    }

    if(rCrashCount === 0 ){
      // console.log("lCrashTime  ",lCrashTime );
      rCrashTime = 0;
      // console.log("lCrashTime  ",lCrashTime );
    }
    if(rCrashTime > LIMIT){
      //
      rCrashTime = 0;
      rightDrop(rcoH, car);

    }



    //SIDEWAYS
    // phase transition from here
    if (gameLive) { // this should prevent us from moving further once the track melts
      if (cursors.left.isDown) {
        //  console.log("left");
        if (!leftTog) {
          //    car.body.x -= drift; //clicky
          // car.body.velocity.x -= drift;// smooth
          if(car.body.velocity.x > (carMaxYV * -1) ){


          // car.body.velocity.x -= miniNudge; // have some inpact on velocity too

          if( car.angle <= 0){
          car.body.velocity.x -= miniNudge; //
        }
        }
          // car.body.drag.x=800;
          // carXpos -= drift;

          this.playFx("swipe");
          //
          if (car.angle >= -80) {
            car.angle -= 10; //lets try rotation
          }
          //
          leftTog = true;
        }
      } else {
        leftTog = false;
      }
      if (cursors.right.isDown) {
        if (!rightTog) {
          //    car.body.x += drift; //clicky
          // car.body.velocity.x += drift;//smooth
          if(car.body.velocity.x < carMaxYV  && car.angle >= 0){
          car.body.velocity.x += miniNudge; //
        }

          // car.body.drag.x = carDragRate; //TODO is this fun? ??
          // carXpos+= drift;
          this.playFx("swipe");
          //
          if (car.angle <= 80) {
            car.angle += 10; //lets try rotation
          }
          //
          rightTog = true;

        }
      } else {
        rightTog = false;
      }
      //UP DOWN

      if (cursors.up.isDown) {
        // console.log("frame= "+car.frame);
        if (!upTog) {
          this.moveTiles(1);
          this.moveWheels(1);
          this.moveLittleScale();
          this.playFx("rev");
          if (car.body.y > carMaxYpos) {
            // car.body.velocity.y -= carAccelRate ;//drift;//TODO Remove me
            if (car.angle >= 0) {
              let adj = Math.cos(car.angle * (Math.PI / 180)) * carAccelRate;
              if(carMovesVertically){
              car.body.velocity.y -= adj;
            }
              let opp = Math.sin(car.angle * (Math.PI / 180)) * adj;
              car.body.velocity.x += opp;
              trackRate = adj / carAccelRate; // we'll use this to mod the tracks rate of movement too.
            } else {

              let adj = Math.cos(car.angle * (Math.PI / 180)) * carAccelRate;
              if(carMovesVertically){
              car.body.velocity.y -= adj;
            }
              let opp = (Math.sin(car.angle * (Math.PI / 180)) * adj);
              car.body.velocity.x += opp;
            }
          }else {

            let adj = Math.cos(car.angle * (Math.PI / 180)) * carAccelRate;
            let opp = Math.sin(car.angle * (Math.PI / 180)) * adj;
            if (car.angle >= 0) {


              // let opp = Math.sin(car.angle * (Math.PI / 180)) * adj;
              car.body.velocity.x += opp;
            }else{
              // let opp = (Math.sin(car.angle * (Math.PI / 180)) * adj);
              car.body.velocity.x += opp;
            }

          }

          if (frameNo <= carLoopLength - 1) {
            frameNo += 1;
            car.frame = frameNo;
          } else {
            frameNo = 1;
            car.frame = frameNo;
          }
          upTog = true;
          if(score >raceLimit){
            this.crossTheline();
          }
        }

      } else {
        upTog = false;
      }
      //
      //  if (cursors.down.isDown) {
      //
      //   if (!downTog) {
      //      this.moveTiles(-1);
      //      this.moveWheels(-1);
      //      this.playFx("rev");
      //      // car.body.velocity.y += drift;//TODO Remove me
      //      downTog=true;
      //      if(frameNo>=2){
      //        frameNo-=1;
      //        car.frame = frameNo;
      //      }else{
      //        frameNo=carLoopLength;
      //        car.frame = frameNo;
      //      }
      //   }
      // }  else {
      //   downTog = false;
      // }
    } // end phaseShift
    //} // end stuck

    // if (hole.body.y >= game.world.height) {  //  HOLE REMOVED
    //   holeFull = false;
    //   hole.body.y = holeYstart;
    //   hole.body.x = spriteXRandomiser();
    //   currHole++;
    //   if (currHole == 5) {
    //
    //     currHole = 0;
    //   }
    //
    // }  //  HOLE REMOVED

    if (bluePowerUp.body.y >= game.world.height + bluePowerUpFreq) {
      bluePowerUp.body.y = sheildRespawnBase;
      bluePowerUp.body.x = spriteXRandomiser();
    }
    //
    staircaseCheck();
    // this.zombieCheck();
    this.checkHole();
    oscilate();
    //
    updateLattice();
    // wobble();

  },
  // ---------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------------
  // END UPDATE
  // ---------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------------

  drawHud: function() {
    // console.log("drawHud()  called");
    if (!hudSet) {
      hudBack = game.add.graphics(0, 0);
      hudBack.beginFill(0x000000);
      hudBack.drawPolygon(hud.points);
      hudBack.alpha = 0.6;
      hudBack.endFill();
      hudSet = true;
    }

  },
  setLives: function() {

    heart1 = game.add.sprite(game.world.width - 80, 20, 'heart');
    heart2 = game.add.sprite(game.world.width - 115, 20, 'heart');
    heart3 = game.add.sprite(game.world.width - 150, 20, 'heart');
  },

  setHole: function(v) {
    console.log("set Hole");
    holesGroup.y = 0;
    hole = holesGroup.create(spriteXRandomiser(), spriteYRandomiser(), holeSheet);
    let sc = randomHoleScaler();
    // hole.scale.setTo(randomHoleScaler(),randomHoleScaler());
    hole.scale.setTo(sc,sc);
    hole.body.drag.y = worldDragRate;
    hole.body.velocity.y=v;
    holeArray.push(hole);
    //
    holeFull = false;


    game.physics.arcade.enable(hole);
    hole.animations.add('fizz', [0, 1, 2, 3, 4], 20, true); //  HOLE REMOVED
    hole.animations.play('fizz', true); //  HOLE REMOVED
    // game.physics.arcade.overlap(hole, car, crash, checkRespawnTime, this);  //  HOLE REMOVED


    // hole.body.y = holeYstart;
    // hole.body.x = spriteXRandomiser();
    // currHole++;
    // if (currHole == 5) {
    //
    //   currHole = 0;
    // }

  },
  checkHole: function() {
// console.log("HOLE HOLE");
    // console.log("holeArray.length", holeArray.length);
    for (let i = 0; i < holeArray.length; i++) {
      // console.log("once through? i = ", i);
      // if (holesGroup.y > bottomOtheWorld + (holeYoff * -1)) {
        if (holeArray[i].y > bottomOtheWorld + (holeYoff * -1)) {
          this.setHole(holeArray[i].body.velocity.y);
          holeArray[i].destroy();
          holeArray.splice(i, 1);
          // this.setHole();
        // this.setHole();

      }
    }

  },

  playFx: function(clip) {
    if (!homeTime && audioLive) {
      rev.volume= gameLiveVol;
      swipe.volume= gameLiveVol;
      gameOverChime.volume= gameLiveVol;
      // holeDeath.volume= gameLiveVol;
      fallFx.volume= gameLiveVol;
      powerUpBlips.volume= gameLiveVol;

      switch (clip) {
        case "rev":
          rev.play();
          break;
        case "swipe":
          swipe.play();
          break;
          // default:
        case "gameOverChime":
          gameOverChime.play();
          break;
        case "holeDeath":
        // holeDeath.play();
        if(gameLive){
          holeDeath.play();
          // holeDeath.onStop.add(function (){holeDeath.volume = 0}, this);
        }else {
          // holeDeath.play();
          holeDeath.onStop.add(killHoleDeath, this);
        }
          break;
        case "fallFx ":
          fallFx.play();
          break;
        case "mainTheme":
          //mainTheme.play();
          console.log("maintheme");
          break;
        case "powerUpBlips":
          powerUpBlips.play();
          break;
        case "grind":
            grindFx.play();
          break;

      }
      // rev.play();
      //rev.allowMultiple = true;
      // playFx(rev);
    }
  },
  getRandomInt: function(max) {
    return Math.floor(Math.random() * Math.floor(max)); // TODO: checkto see if thisis still used
  },
  // spawnHole: function() {
  //   hole = game.add.sprite(50, 50, 'hole');
  // },
  moveTiles: function(d) {
    // if(score < raceLimit){
    score += d;
    // }
    // var adjustedRate = tileRate * d * friction;
    adjustedRate = (tileRate * d) * trackRate;
    // scoreText.setText(displayText + score + si);
    scoreText.setText(score);
    // hexgrid.tilePosition.y += adjustedRate;

    // Move the left and right step edges
    for(i =0; i <leftStaircase.length; i++){
      if(leftStaircase[i].body.velocity.y<=maxVelocity){
      leftStaircase[i].body.velocity.y += adjustedRate;
    }
    }
    for(i =0; i <rightStaircase.length; i++){
      if(rightStaircase[i].body.velocity.y<=maxVelocity){
        rightStaircase[i].body.velocity.y += adjustedRate;
      }
    }


    // move the holes
    for(i =0; i <holeArray.length; i++){
      if(holeArray[i].body.velocity.y <= maxVelocity){
        holeArray[i].body.velocity.y += adjustedRate;
      }
    }

    //move the power ups
    if(bluePowerUp.body.velocity.y <= maxVelocity){
      bluePowerUp.body.velocity.y += adjustedRate;
    }

    //move crashed cars
    for(i =0; i < zombies.length; i++){
      // console.log("zombies.length",zombies.length);
      // console.log("zombies[i] ",zombies[i]);
      if(zombies[i].body.velocity.y <= maxVelocity){
        zombies[i].body.velocity.y += adjustedRate;
      }
    }



    // stepGroup.y += adjustedRate;
    // leftStepGroup.y += adjustedRate;
    //deadGroup.y += adjustedRate; //meh




    // lattice.y += adjustedRate;
    moveLattice(adjustedRate);
    console.log("lattice y = ", lattice.y);
    //
    //loop through the individual atoms / rows here ?
    //
    if(score > raceLimit-15){
      // console.log("win");
      finishline.y += adjustedRate;
    }
    //if()
    updateTrackBounds(d);
    //velocity mod
    // updateLattice();// moved this to teh update loop
  },
  moveWheels: function(d) {
    if (outFramNo < 9 && outFramNo >= 0) {
      outRig1.frame += d;
      outRig2.frame += d;
      outRig3.frame += d;
      outRig4.frame += d;
    } else {
      outFramNo = 0
    }
    // var adjustedRate = tileRate * d * friction;
    // var adjustedRate = tileRate * d;
    // scoreText.setText(displayText + score + si);
    // scoreText.setText( score );
    // hexgrid.tilePosition.y += adjustedRate ;
    // holesGroup.y += adjustedRate;
    // powerGroup.y += adjustedRate;
    // remove comments to return block
    // blockGroup.y += adjustedRate  ;
  },
  mainTick: function() {
    // console.log("mainTick");
    game.time.events.add(1000, this.mainTick, this);
    // game.time.events.add(true, this.mainTick, this);
    this.gameTick();
    // this.staircaseCheck();
    //this.heat();
    // this.moveTiles(1);
  },
  heat: function() {

    if (currentTemp < trackMeltingPoint) {
      // introduce a little entropy
      var ent1 = (currentTemp * Math.random().toFixed()) / tempEffectR;
      var ent2 = (currentTemp * Math.random().toFixed()) / tempEffectX;
      var ent3 = (currentTemp * Math.random().toFixed()) / tempEffectY;
      ent1 *= (1 - sheildScale);
      ent2 *= (1 - sheildScale); // lets enable teh heatshiled vaar to have an effect
      ent3 *= (1 - sheildScale);
      // car.x += tempBoox ?  ent2 * -1 :  ent2;
      car.body.velocity.x += tempBoox ? ent2 * -1 : ent2;
      tempBoox = !tempBoox;
      //
      if (car.angle > -80 && car.angle < 80) { // set the bounds of the rotation
        car.angle += tempBooR ? ent1 * -1 : ent1;
      }
      tempBooR = !tempBooR;
      //
      // car.y += tempBooy ?  ent3 * -1 :  ent3;
      car.body.velocity.y += tempBooy ? ent3 * -1 : ent3;
      tempBooy = !tempBooy;
      // New Temp conditions
      var lastTemp = 0;
      var lasti = 0;
      for (i = 0; i <= noOfBreaks; i++) {
        // console.log("tempBreaks[i]= "+tempBreaks[i]);
        if (currentTemp >= tempBreaks[i]) {
          lasti = i;
        }
      }
      var frameH = this.getRandomInt(lasti);
      // console.log("1 hexgrid.frame: frameH = "+hexgrid.frame+" "+frameH);
      //
      //update the frame to a random frame check to see if this is our durrent frame add 1 if so
      //TODO this seems to output the occasional unexplainable frame no. ?
      hexgrid.frame = hexgrid.frame === frameH ? frameH + 1 : frameH;
      // console.log("2 hexgrid.frame: frameH = "+hexgrid.frame+" "+frameH);


      // console.log("cur frame = "+hexgrid.frame);
      // console.log("random int 3 = "+ this.getRandomInt(3));
    } else {
      // gameOver();
      if (!phaseShift) {
        this.meltingPoint();
        phaseShift = true;
        gameLive = false;
      }

    }
  },
  messageUpdate: function() {
    if (currentTemp >= mess1Thesh && !mesFlag1) {
      mesFlag1 = true;
      textScroller(0);
    }
    if (currentTemp >= mess2Thesh && !mesFlag2) {
      mesFlag2 = true;
      textScroller(1);
    }
    if (currentTemp + scaleDiff >= meltingPointOfLead && !mesFlag3) {
      mesFlag3 = true;
      textScroller(2);
    }
  },
  sheildUpdate: function() {
    // sheildCenterX = (heatSheild.width/2);
    // sheildCenterY = (heatSheild.width/2);
    // heatSheild.x = (car.x + 75 ) - sheildCenterX;
    // heatSheild.y = (car.y + 75 ) - sheildCenterY;
    //
    if (sheildScale > 0) {
      sheildScale -= sheildDeminishRate;
      // heatSheild.scale.setTo(sheildScale, sheildScale);
      heatSheildMeter.scale.setTo(sheildScale, 1);
      //
      if (sheildScale < 0.75 && outBool1) {
        outBool1 = false;
        velocityRandomiser(outRig1);
        freezeMeter.alpha = 0.6;
      }
      if (sheildScale < 0.5 && outBool2) {
        outBool2 = false;
        velocityRandomiser(outRig2);
        freezeMeter.alpha = 0.5;
      }
      if (sheildScale < 0.25 && outBool3) {
        outBool3 = false;
        velocityRandomiser(outRig3);
        freezeMeter.alpha = 0.3;
      }
      if (sheildScale < 0.05 && outBool4) {
        outBool4 = false;
        velocityRandomiser(outRig4);
        freezeMeter.alpha = 0;
      }
      if (outBool1) {
        //left
        outRig1.x = (car.x - (car.width / 2)) - 50; // ok so after changing teh car to use an anchor position of 0.5 0.5 i have adjusted the outriggers accordingly, but its abit  tar ball :)
        outRig1.y = (car.y - (car.height / 2)) + 50;
      }
      // else {
      //   outRig1.body.velocity.x=velocityRandomiser();
      //   outRig1.body.velocity.y=velocityRandomiser();
      // }

      //
      if (outBool2) {
        //top
        outRig2.x = (car.x - (car.width / 2)) + 58;
        outRig2.y = (car.y - (car.height / 2)) - 55;
      }
      // else{
      //   outRig2.body.velocity.x=velocityRandomiser();
      //   outRig2.body.velocity.y=velocityRandomiser();
      // }
      //
      if (outBool3) {
        //right
        outRig3.x = (car.x - (car.width / 2)) + 160;
        outRig3.y = (car.y - (car.height / 2)) + 50;
      }
      // else{
      //   outRig3.body.velocity.x=velocityRandomiser();
      //   outRig3.body.velocity.y=velocityRandomiser();
      // }
      //
      if (outBool4) {
        //bottom
        outRig4.x = (car.x - (car.width / 2)) + 58;
        outRig4.y = (car.y - (car.height / 2)) + 170;
      }
      // else{
      //   outRig4.body.velocity.x=velocityRandomiser();
      //   outRig4.body.velocity.y=velocityRandomiser();
      // }
      //
    }


  },
  sheildUp: function() {
    sheildScale = 1;
    freezeMeter.alpha = 0.8;
    car.body.velocity.x = 0;
    car.body.velocity.y = 0;
    // powerUpBlips.play();
    this.playFx("powerUpBlips");

    outBool1 = true;
    outBool2 = true;
    outBool3 = true;
    outBool4 = true;
    //
    outRig1.body.velocity.x = 0;
    outRig1.body.velocity.y = 0;
    outRig2.body.velocity.x = 0;
    outRig2.body.velocity.y = 0;
    outRig3.body.velocity.x = 0;
    outRig3.body.velocity.y = 0;
    outRig4.body.velocity.x = 0;
    outRig4.body.velocity.y = 0;
  },
  movePowerUp: function() {
    bluePowerUp.y = sheildRespawnBase;
    bluePowerUp.body.x = spriteXRandomiser();
  },
  gameTick: function() {
    if (!phaseShift) {
      clockText.setText(Math.round(currentTemp + scaleDiff));
      currentTemp += tempIncrement;
      gameTime += 1;

      // console.log("gameTick before heat added car.body.x= "+car.body.x);
      //this.heat(currentTemp);
      // console.log("gameTick after heat added car.body.x= "+car.body.x);
    }
  },
  secondTick: function() {
    //This is our 12 frame per second timer
    game.time.events.add(Phaser.Timer.SECOND * 0.12, this.secondTick, this);
    // console.log("secondTick");
    this.heat();
    this.thermomiter();
    this.messageUpdate();
    // uncomment this to return the heatcheild - also set its alpha back to  0.5
    this.sheildUpdate();
  },
  secondHeat: function() {
    // console.log("secondHeat");
    car.body.y += currentTemp;
  },
  toggle: function() {
    scaleToggle.frame = tempScaleName === siK ? 1 : 0;
    tempScaleName = tempScaleName === siK ? siC : siK;
    siText.setText(tempScaleName);
    scaleDiff = tempScaleName === siK ? 0 : -273;
    // console.log("tempScaleName = "+tempScaleName);
    // console.log("toggle");
  },
  meltingPoint: function() {
    // Paticles
    // mp = true;
    console.log("meltingPoint");

    // emitter = game.add.emitter(game.world.centerX, 0, 400);
    emitter.width = game.world.width;
    // emitter.angle = 30; // uncomment to set an angle for the rain.
    emitter.makeParticles('matrix');
    // emitter.minParticleScale = 0.1;
    emitter.maxParticleScale = 2;
    emitter.setYSpeed(100, 300);
    emitter.setXSpeed(-10, 10);
    emitter.minRotation = -50;
    emitter.maxRotation = 50;
    emitter.start(false, 1600, 5, 0);
    game.time.events.add(Phaser.Timer.SECOND * 5, gameOver, this);
    //
    mainTheme.stop();
    // gameOverChime.play();
    this.playFx("gameOverChime");
    //
    var t = currentTemp + scaleDiff;
    endmessage1.setText(endMessage1);
    endmessage2.setText(endMessage2a + t + endMessage2b + tempScaleName + endMessage2c);


  },
  outOfLivesDelay: function() {
    // console.log("outOfLivesDelay");
    mainTheme.stop();
    // gameOverChime.play();
    this.playFx("gameOverChime");
    // gameLive =  false;
    endmessage1.setText(endMessage1);
    endmessage2.setText(endMessage3);
    game.time.events.add(Phaser.Timer.SECOND * 5, gameOver, this);
  },
  checkWallRespawnTime: function() {
    console.log("checkWallRespawnTime");
  },
  creeToggle: function() {
    console.log("creeToggle called");
    cree = true;
    // game.time.events.add(Phaser.Timer.SECOND * creeTime, ct, this);
    console.log("creeTime = ", creeTime);
    game.time.events.add(Phaser.Timer.SECOND * creeTime, noCree => cree = false, this); // for soem reason this wont accept the var
  },
  zombieCheck: function() {
    for (let i = 0; i < zombies.length; i++) {
      if (zombies.length != 0) {

        if (zombies[0].worldPosition.y > bottomOtheWorld) {
          console.log("BRAAIINNSS!!!");
          zombies[0].destroy();
          zombies.splice(0, 1)
          // console.log("zombies.length ", zombies.length);
        }

      }
      if (zombies.length === 0) {
        deadGroup.y = 0;
      }
    }

  },
  thermomiter: function() {
    let tbs = thermBars.length;
    let bc = barCounter.length;
    let unit = trackMeltingPoint / tbs;
    let cu = Math.round(currentTemp / unit);
    // console.log("unit = ", unit);
    // console.log("cu = ", cu);
    if (cu > bc) {
      // let newStripe = thermLevels.create(5 + thermX + (thermOffset * cu), 4 + thermY, thermBars[cu])
      let newStripe = thermLevels.create( thermX + 4, thermY  - (thermOffset * cu), thermBars[cu]);
      barCounter.push(thermBars[cu]);
    }
    //

  },
  //
  speakerButContol: function() {
    if(audioLive){
      speakerbut.animations.play('sp-off', true);
      audioLive = false;
      // mainTheme.stop();
    }else{
      speakerbut.animations.play('sp-on', true);
      audioLive = true;
      mainTheme.loopFull(musicVol);
    }

    },
  crossTheline: function() {
    // Paticles
    // mp = true;
    console.log("cross the line");

    // emitter = game.add.emitter(game.world.centerX, 0, 400);
    emitter.width = game.world.width;
    // emitter.angle = 30; // uncomment to set an angle for the rain.
    emitter.makeParticles('matrix');
    // emitter.minParticleScale = 0.1;
    emitter.maxParticleScale = 2;
    emitter.setYSpeed(100, 300);
    emitter.setXSpeed(-10, 10);
    emitter.minRotation = -50;
    emitter.maxRotation = 50;
    emitter.start(false, 1600, 5, 0);
    game.time.events.add(Phaser.Timer.SECOND * 5, gameOver, this);
    //
    mainTheme.stop();
    // gameOverChime.play();
    this.playFx("gameOverChime");
    //
    var t = currentTemp + scaleDiff;
    // endmessage1.setText(endMessage1);
    // endmessage2.setText(endMessage2a + t + endMessage2b + tempScaleName + endMessage2c);
    endmessage1.setText("Congratulations");
    endmessage2.setText("You've completed a lap in "+ gameTime+" s");

  },
  moveLittleScale: function(){
    placeMarker.y -= trackScaleIncrement ;
  }
  //end audio functions


}; //end of playstate
// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// END OF PLAYSTATE
// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

function crash(coH, coC) {
  // console.log("coH", coH);
  // console.log("coC", coC);
  // console.log("crash(): cree= " + cree);
  // console.log("coH.body.velocity.y", coH.body.velocity.y);
  playState.zombieCheck();
  if (!cree) {
    if (holeFull === false) {
      holeFull = true;

      deadGroup.y = 0;

      // let cx = hole.body.x;
      // let cy = (holesGroup.y - (holeYoff * -1));

      let zx = coC.body.position.x;
      let zy = coC.body.position.y;

      let zl = zombies.length;

      if (gameLive) {
        zombies[zl] = deadGroup.create(zx, zy, cars[carType]);
        game.physics.arcade.enable(zombies[zl]);


        // zombies[zl] = deadGroup.create(car.worldPosition.x, car.worldPosition.y, cars[carType]); // TODo Why is thi snot righ ??
        zombies[zl].angle = car.angle;
        zombies[zl].animations.add('crash', [8, 9], 6, true);
        zombies[zl].animations.play('crash', true);

        zombies[zl].body.drag.y = worldDragRate;
        zombies[zl].body.velocity.y = coH.body.velocity.y;

      }

      //reset the car in spawn mode
      loseLife("hole");
      if (gameLive) {
        spawnCar(false);
      } else {
        car.alpha = 0;
      }
    }
    //  sheildScale = 0;// add this back in to lose heatsheild on crash
  } else {
    console.log("Cree = true");
  }
}
//

function firstCall(){
  console.log("fistcall called");
}
function secCall() {
  //
  console.log("secCall called ");
}


function rightDrop(coH, coC) {
  console.log("rightDrop");
  playState.zombieCheck();

  let zx = coC.body.position.x;
  let zy = coC.body.position.y;

  if (!cree) {
    // let cx = hole.body.x;
    // let cy = (holesGroup.y - (holeYoff * -1));
    deadGroup.y = 0;
    let zl = zombies.length;
    // let leftOrRight = (car.x)? ent2 * -1 : ent2;

    if (gameLive) {
      // zombies[zl] = deadGroup.create(cx, cy, cars[carType]);
      // zombies[zl] = deadGroup.create(coC.worldPosition.x - (car.width / 2), car.y - (car.height / 2), cars[carType]);
      zombies[zl] = deadGroup.create(zx, zy, cars[carType]);
      game.physics.arcade.enable(zombies[zl]);
      zombies[zl].angle = car.angle;
      zombies[zl].enableBody = true;

      zombies[zl].body.drag.y = worldDragRate;
      zombies[zl].body.velocity.y = coH.body.velocity.y;

      zombies[zl].animations.add('crash', [8, 9], 6, true);
      zombies[zl].animations.play('crash', true);

    }
    loseLife("drop");
    if (gameLive) {
      console.log("spawncar ");
      spawnCar(false);
    } else {
      car.alpha = 0;
    }
    // }
    sheildScale = 0; // remove this to lose heatsheild on crash
  } else {
    console.log("Cree = true");
  }


}
//
function ld(coH, coC){
  console.log("POW!! ");
}
function leftDrop(coH, coC) {
  // console.log("coH", coH);
  // console.log("coC", coC);
  playState.zombieCheck();

  let zx = coC.body.position.x;
  let zy = coC.body.position.y;

  if (!cree) {
    // let cx = hole.body.x;
    // let cy = (holesGroup.y - (holeYoff * -1));
    deadGroup.y = 0;
    let zl = zombies.length;
    // let leftOrRight = (car.x)? ent2 * -1 : ent2;
    if (gameLive) {
      // zombies[zl] = deadGroup.create(cx, cy, cars[carType]);
      // zombies[zl] = deadGroup.create(coC.worldPosition.x + coC.width - (car.width / 2), car.y - (car.height / 2), cars[carType]);
      zombies[zl] = deadGroup.create(zx, zy, cars[carType]);
      game.physics.arcade.enable(zombies[zl]);
      zombies[zl].angle = car.angle;

      zombies[zl].body.drag.y = worldDragRate;
      zombies[zl].body.velocity.y = coH.body.velocity.y;

      zombies[zl].animations.add('crash', [8, 9], 6, true);
      zombies[zl].animations.play('crash', true);

    }
    loseLife("hole");
    if (gameLive) {
      console.log("spawncar ");
      spawnCar(false);
    } else {
      car.alpha = 0;
    }
    // }
    sheildScale = 0; // remove this to lose heatsheild on crash
  } else {
    console.log("Cree = true");
  }


}


function leftWallExposure(coW, coC){

  lCrashTime  += this.time.physicsElapsedMS;


}
function rightWallExposure(coW, coC){

  rCrashTime  += this.time.physicsElapsedMS;
}
function  holeExposure() {

  hCrashTime += this.time.physicsElapsedMS;

}
// function checklLeftActive(coW, coC){
//   lChecking = false;
//   if(coC.body.touching.none === false){
//     console.log("coC ",coC);
//     console.log("coC touching");
//   }else {
//     console.log("no coC touching");
//   }
// }

function vibration1(){
  // console.log("well ? something at least");
}
function vibration2(){

}

function spawnCar(start) {
  //lets make sure we dont inherit some movement
  car.body.velocity.x = 0;
  car.body.velocity.y = 0;
  car.angle = 0;
  sheildScale = 0.001;
  playState.sheildUpdate();
  //
  car.body.x = game.world.width / 2 - 125;
  car.body.y = carStartY;
  //car.animations.play('spawn', true);
  car.scale.setTo(2, 2);
  game.add.tween(this.car.scale).to({
    x: 1,
    y: 1
  }, 2000, Phaser.Easing.Bounce.Out, true);
  stepFull = false;
  if (!start) {
    playState.creeToggle();
  }
}

function loseLife(cause) {
  if (lives === 3) {
    heart3.alpha = 0;
    
    if(!cheatdeath){// THIS SHOULD DISABLE DEATH
      lives = 2;
    }
  } else if (lives === 2) {
    heart2.alpha = 0;
    lives = 1;
    // textScroller(1);
  } else if (lives === 1) {
    heart1.alpha = 0;
    lives = 0;
    playState.outOfLivesDelay();
    gameLive = false;
    console.log("gameLive = ", gameLive);
  }
  timeOfDeath = game.time.time;
  // console.log("timeOfDeath= " + timeOfDeath);
  if (cause === "hole") {
    // holeDeath.play();
    playState.playFx("holeDeath"); //gameOverChime , holeDeath
    //TODO trigger game over chime only iflives === 0 and the cause o death sound has completed.
  } else if (cause === "drop") {
    // fallFx.play();
    playState.playFx("holeDeath"); //gameOverChime , holeDeath, fallFx
  }

  return lives;
}

function gameOver() {

  game.state.start('gameover');
}

function checkRespawnTime() {

  var currTOD = game.time.time;
  if (lives != 3) {
    if (currTOD - timeOfDeath >= safeSpawnTime) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function spriteXRandomiser() {
  var pad = 40;
  var x = game.world.width - pad;
  var n = Math.floor(Math.random() * Math.floor(x));
  if (n < pad) {
    n = pad;
  }
  return n;
}

function spriteYRandomiser() {
  var pad = 100;
  var y = game.world.height * 2;
  var n = Math.floor(Math.random() * Math.floor(y));
  if (n < pad) {
    n = pad;
  }
  holeYoff = n * -1;
  return holeYoff;
}

function velocityRandomiser(sprite) {

  var a = playState.getRandomInt(10);
  var b = playState.getRandomInt(10);
  var n = playState.getRandomInt(800);
  var m = playState.getRandomInt(800);

  if (a <= 5) {
    n *= -1;
  }
  if (b <= 5) {
    m *= -1;
  }
  sprite.body.velocity.x = n;
  sprite.body.velocity.y = m;

}

function textScroller(messNo) {
  // scrollingText.setText(text);
  // messageIndex++;
  messageIndex = messNo;

  if (messageIndex < scrollingMessages.length) {
    currMessage = '';
    game.time.events.repeat(180, scrollingMessages[messageIndex].length + 1, updateLine, this);
  }

}

function updateLine() {
  var chunk;
  if (currMessage.length >= maxChars) {
    chunk = currMessage.length - maxChars;
  } else {
    chunk = 0;
  }
  // console.log("currMessage.lenght ="+currMessage.length );
  // console.log("chunk ="+chunk);

  if (currMessage.length < scrollingMessages[messageIndex].length) {
    currMessage = scrollingMessages[messageIndex].substr(chunk, currMessage.length + 1);
    // text.text = line;
    // text.setText(line);
    // scrollingText.setText(currMessage);
  }
  // else
  // {
  //     //  Wait 2 seconds then start a new line
  //     game.time.events.add(Phaser.Timer.SECOND * 2, textScroller, this);
  // }

}

function createSteps() {
  // create a set of step graffics
  for (i = 0; i < stepLimit; i++) {
    // step = stepGroup.create(-290 +i , i*5, 'step');
    rightStaircase[i] = stepGroup.create(rightStepStart, (i * stepTileH) - stepTileH, 'half-graphene');
    // rightStaircase[i] = game.add.tileSprite(750, (i*stepTileH)-stepTileH,  300, 50,'silver');
    leftStaircase[i] = leftStepGroup.create(leftStepStart, (i * stepTileH) - stepTileH, 'half-grapheneL');

    game.physics.arcade.enable(rightStaircase[i]);
    game.physics.arcade.enable(leftStaircase[i]);

    rightStaircase[i].enableBody = true;
    leftStaircase[i].enableBody = true;


    rightStaircase[i].body.immovable = true;
    leftStaircase[i].body.immovable = true;

    rightStaircase[i].body.drag.y = worldDragRate;
    leftStaircase[i].body.drag.y = worldDragRate;

    rightStaircase[i].alpha= stepAlpha;
    leftStaircase[i].alpha= stepAlpha;

    // rightStaircase[i].alpha =0.5;
    // stepBools[i]=true;
    // physics.arcade.enable

  }
}

function staircaseCheck() {
  // if (score > distCheck) {
    // console.log("score = "+score+" : dist= "+distCheck);
    distCheck++;
    for (i = 0; i < stepLimit; i++) {
      if (rightStaircase[i].body.y >= bottomOtheWorld) {
        //
        rightStaircase[i].body.y = rightStaircase[i].body.y - (stepLimit * stepTileH);
        rightStaircase[i].body.x = rightStepPath(i);
        // console.log("bottom o the world");
      }
      if (leftStaircase[i].body.y >= bottomOtheWorld) {
        //
        leftStaircase[i].body.y = leftStaircase[i].body.y - (stepLimit * stepTileH);
        leftStaircase[i].body.x = leftStepPath(i);
        // console.log("bottom o the world");
      }
    }
  // }
}

function rightStepPath(n) {

  if (n === rightStaircase.length - 1) {
    // console.log("last");
    var lastStepX = rightStaircase[0].body.x;
  } else {
    // console.log("not last");
    var lastStepX = rightStaircase[n + 1].body.x;
    // console.log("lastStepX  = "+lastStepX+ " and i = "+i);
  }
  var pinger = lastStepX;
  //
  if (rightZig) {
    // console.log("rightZig");
    if (lastStepX >= rightInnerBound) {
      // console.log(" x >= rightInnerBound");
      pinger -= attackRate;
    } else {
      rightZig = false;
    }
  } else if (rightZag) {
    // console.log("rightZag");
    if (lastStepX <= rightOuterBound) {
      // console.log("x <= rightOuterBound");
      pinger += attackRate;
    } else {
      rightZag = false;
    }
  }
  //
  if (!rightZig && !rightZag) {
    // console.log("!rightZig && !rightZag");
    rightCurrRest++;
    if (restSteps >= rightCurrRest) {
      // console.log("restSteps >= rightCurrRest");
      if (lastStepX <= rightInnerBound) {
        // console.log("x <= rightInnerBoun");
        rightZag = true;
        rightCurrRest = 0;
      } else if (lastStepX >= rightOuterBound) {
        // console.log("x >= rightOuterBound");
        rightZig = true;
        rightCurrRest = 0;
      }
    }
  }
  return pinger;
}
//
function leftStepPath(n) {

  if (n === leftStaircase.length - 1) {
    // console.log("last");
    var lastStepX = leftStaircase[0].body.x;
  } else {
    // console.log("not last");
    var lastStepX = leftStaircase[n + 1].body.x;
    // console.log("lastStepX  = "+lastStepX+ " and i = "+i);
  }
  var pinger = lastStepX;
  //
  if (leftZig) {
    // console.log("leftZig");
    if (lastStepX >= leftInnerBound) {
      // console.log(" x >= rightInnerBound");
      pinger -= attackRate;
    } else {
      leftZig = false;
    }
  } else if (leftZag) {
    // console.log("leftZag");
    if (lastStepX <= leftOuterBound) {
      // console.log("x <= rightOuterBound");
      pinger += attackRate;
    } else {
      leftZag = false;
    }
  }
  //
  if (!leftZig && !leftZag) {
    // console.log("!rightZig && !rightZag");
    leftCurrRest++;
    if (restSteps >= leftCurrRest) {
      // console.log("restSteps >= rightCurrRest");
      if (lastStepX <= leftInnerBound) {
        // console.log("x <= rightInnerBoun");
        leftZag = true;
        rightCurrRest = 0;
      } else if (lastStepX >= leftOuterBound) {
        // console.log("x >= rightOuterBound");
        leftZig = true;
        leftCurrRest = 0;
      }
    }
  }
  // console.log("pinger = "+pinger);
  return pinger;
}



function updateTrackBounds(n) {
  n = n / 5;
  if (rightInnerBound > rightInnerBoundLimit) {
    rightInnerBound -= n;
    // rightOuterBound -= n;
  }
  if (rightOuterBound > rightOuterBoundLimit) {
    // rightInnerBound -= n;
    rightOuterBound -= n;
  }

  if (leftInnerBound > leftInnerBoundLimit) {
    leftInnerBound -= n;
    // leftOuterBound += n;
  }
  if (leftOuterBound < leftOuterBoundLimit) {
    // leftInnerBound -= n;
    leftOuterBound += n;
  }
}
function updateLattice(){

// loop through atomicMatrix checking the y positions of each atom. if  > game.world.height set to - atomY
// console.log(atomMatrix[0][0]);
// let rows =
let am;//aton Matrinz / hexgrid
let ar;//atom rows
let aty;
let atx;
if(trackselection==1){
  am = atomMatrix;
  ar = atomRows;
  aty = atomY;
}else{
  am = atomMatrixHex;
  ar = atomRowsHex;
  aty = hexAtomY;
}

  for(let i = 0; i <= am.length -1 ; i++){
    for(let j = 0; j <= am[i].length -1 ; j++){
      if(am[i][j].y > (ar* aty)){
        // console.log("offscreen ", atomMatrix[i][j]);
         am[i][j].y = am[i][j].y -( ar* aty)-aty;
      }
      // csonsole.log("atomMatrix[i][j].y ",atomMatrix[i][j].y);
    }
    // atomOffset -= atomY;
  }
  // atomOffset -= atomY;
}
function moveLattice(r){

  let am;//aton Matrinz / hexgrid
  let ar;//atom rows
  let aty;
  let atx;
  if(trackselection==1){
    am = atomMatrix;
    ar = atomRows;
    aty = atomY;
  }else{
    am = atomMatrixHex;
    ar = atomRowsHex;
    aty = hexAtomY;
  }


// loop through atomicMatrix checking the y positions of each atom. if  > game.world.height set to - atomY
// console.log(atomMatrix[0][0]);
// console.log("lattice y = ", lattice.y);
// let b =0;
  for(let i = 0; i <= am.length -1 ; i++){
    for(let j = 0; j <= am[i].length -1 ; j++){
      // if(atomMatrix[i][j].world.y > 600){
        // console.log("offscreen ", atomMatrix[i][j]);

        //velocity mod
        if(am[i][j].body.velocity.y<=maxVelocity){
          am[i][j].body.velocity.y += r;
        }

         // am[i][j].y += r;//


         // let n = i*j;
         // console.log("atom row #", i, "atom pos#", j,  atomMatrix[i][j].y );
      // }
      // csonsole.log("atomMatrix[i][j].y ",atomMatrix[i][j].y);
    }
    // atomOffset -= atomY;
  }
  // atomOffset -= atomY;
}
function randomFrame(){

  let min=0;
    let max=19;
    let random =Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
}
function randomWobble(){

  let min=0;
    let max = currentTemp/100;//2;
    let random =Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
}
function randomPeriod(){

  let minP=20;
    let maxP = currentTemp/10;//100;
    let randomP =Math.floor(Math.random() * (+maxP - +minP)) + +minP;
    return randomP;
}
//
function wobble(){
//
// Now using oscilate() instead of this.
//
  // fish =  this.add.image(150, fishY,'').setOrigin(0.5, 0.5);
   let time = (new Date()).getTime();
  // speed
   let amplitude = 10;
  //distance
   let period = 1000;
  //apply to y position
  let nextX = amplitude * Math.sin(time * 2 * Math.PI / period);
  //


  for(let i = 0; i <= atomMatrix.length -1 ; i++){
    for(let j = 0; j <= atomMatrix[i].length -1 ; j++){
      //
      //velocity mod
      // if(){

      atomMatrix[i][j].anchor.x = atomMatrix[i][j].x+ (randomWobble() * Math.sin(time * 2 * Math.PI / randomPeriod()));
      atomMatrix[i][j].anchor.y = atomMatrix[i][j].y+ (randomWobble() * Math.sin(time * 2 * Math.PI / randomPeriod()));
// }
    //
         // atomMatrix[i][j].x = atomMatrix[i][j].x+ (randomWobble() * Math.sin(time * 2 * Math.PI / randomPeriod()));
         // atomMatrix[i][j].y = atomMatrix[i][j].y+ (randomWobble() * Math.sin(time * 2 * Math.PI / randomPeriod()));
    }
  }




}
function oscilate(){
  let am;//aton Matrinz / hexgrid
  let ar;//atom rows
  let aty;
  let atx;
  let frq
  if(trackselection==1){
    am = atomMatrix;
    ar = atomRows;
    aty = atomY;
    frq =frequecyScaleFactor ;
  }else{
    am = atomMatrixHex;
    ar = atomRowsHex;
    aty = hexAtomY;
    frq =frequecyScaleFactorHex
  }

// console.log("Boom L1");
  for(let i = 0; i <= am.length -1 ; i++){

    for(let j = 0; j <= am[i].length -1 ; j++){

      if(atomOscilationStepsLive[i][j] <atomOscilationSteps[i][j]){
      // console.log("Boom L2");
        if(atomOscilationBools[i][j]){

          // console.log("Boom L3");
          let adj = Math.cos(atomAngles[i][j] * (Math.PI / 180)) * currentTemp/frq;
          am[i][j].y -= adj;
          let opp = Math.sin(atomAngles[i][j]* (Math.PI / 180)) * adj;
          am[i][j].x += opp;
          // update the step position
          atomOscilationStepsLive[i][j]+=1;

          if(atomOscilationStepsLive[i][j] >= atomOscilationSteps[i][j]){
            atomOscilationBools[i][j] = !atomOscilationBools[i][j];
            atomOscilationStepsLive[i][j]=0;
            // atomAngles[i][j]= randomAngle();
            // console.log(" flip to false");
          }

        }else if(!atomOscilationBools[i][j]) {
          // console.log("Boom L4");
          // go the other way
          let adj = Math.cos(atomAngles[i][j] * (Math.PI / 180)) * currentTemp/frq;
          am[i][j].y += adj;
          let opp = Math.sin(atomAngles[i][j]* (Math.PI / 180)) * adj;
          am[i][j].x -= opp;
          atomOscilationStepsLive[i][j]+=1;
          if(atomOscilationStepsLive[i][j] >= atomOscilationSteps[i][j]){
            atomOscilationBools[i][j] = !atomOscilationBools[i][j];
            atomOscilationStepsLive[i][j]=0;
            atomAngles[i][j]= randomAngle();
            // console.log(" flip to true");
          }
        }
      }
    }
  }
}
function randomAngle(){
  //return  a random number between 0 and 360
    let min=0;
    let max=360;
    let random =Math.floor(Math.random() * (+max - +min)) + +min;
    return random;

}
function randomBool(){
    // return at random  a 1 or a 0 to be used as a bool
    // let min=0;
    // let max=1;
    // let random =Math.floor(Math.random() * (+max - +min)) + +min;
    var random_boolean = Math.random() >= 0.5;
    return random_boolean;

}
function randomSteps(){
    // return at random  a 1 or a 0 to be used as a bool
    let min= minAmplitude;
    let max= maxAmplitude;
    let random =Math.floor(Math.random() * (+max - +min)) + +min;
    return random;

}
function isEven(n) {
   return n % 2 == 0;
}
function isOdd(n) {
   return Math.abs(n % 2) == 1;
}
function randomHoleScaler(){
  let min=holeMin;
  let max=holeMax;
  let random =Math.floor(Math.random() * (+max - +min)) + +min;
  return random;
}
function grind(offPiste, loops){
  if(offPiste){
    car.body.drag.x = offCourseDragRate;
    car.body.drag.y = offCourseDragRate;
//
      // slow the steps
      for(i =0; i <leftStaircase.length; i++){
        leftStaircase[i].body.velocity.y = leftStaircase[i].body.velocity.y/ grindRate ;
      }
      for(i =0; i <rightStaircase.length; i++){
          rightStaircase[i].body.velocity.y =rightStaircase[i].body.velocity.y/ grindRate ;
      }

      // slow th track
      if(trackselection==1){


      //move teh sliver track
        for(let i = 0; i<= atomRows; i++ ){
          // then for each row we loop through each position
          for(let j = 0; j <= atomColumns  ; j ++){

            atomMatrix[i][j].body.velocity.y =atomMatrix[i][j].body.velocity.y /grindRate;

          }
        }
      }
      //move the graphene track
      else if(trackselection==2){
        for(let i = 0; i<= atomRowsHex; i++ ){
          // then for each row we loop through each position
          for(let j = 0; j <= atomColumnsHex  ; j ++){

            atomMatrixHex[i][j].body.velocity.y = atomMatrixHex[i][j].body.velocity.y /grindRate;

          }
        }

      }
      // play the sfx
      if(gameLive){
        playState.playFx("grind");
      }
      // slow the holes
      for(let i =0; i <holeArray.length; i++){
          holeArray[i].body.velocity.y = holeArray[i].body.velocity.y/ grindRate ;
      }
      //slow the power ups

        bluePowerUp.body.velocity.y =bluePowerUp.body.velocity.y / grindRate ;
        //slow crashed cars
        for(let i =0; i < zombies.length; i++){
            zombies[i].body.velocity.y =zombies[i].body.velocity.y/ grindRate ;
        }


        }else{
          car.body.drag.x = carDragRate;
          car.body.drag.y = carYDrag;
        }
}


function killHoleDeath(){
  holeDeath.volume = 0;
}
