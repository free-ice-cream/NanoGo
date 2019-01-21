var playState = {
  create: function() {
    //set up the graffic assets
    //set the background hexgrid
    // set the track and mode
    if(trackselection === 1){
      // the next line creates  the tilesprite bg
      // var hexSprite =
      hexgrid = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'graphene');
      hexgrid.animations.add("cool",[0,1,3],2,true);
      hexgrid.animations.add("warm",[0,1,2,3,4],4,true);
      hexgrid.animations.add("hot",[4,5,6,7,8,9,10],12,true);
      hexgrid.animations.play("cool");
      // friction = warm;
      friction = cold;
      drift *= friction;
      //TODO check the use if friction
      trackMeltingPoint= meltingPointOfGraphene;
    }else if(trackselection === 2){
      // hexgrid = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'icehex');
      hexgrid = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'silver');
      hexgrid.animations.add("cool",[0,1,3],2,true);
      hexgrid.animations.add("warm",[0,1,2,3,4],4,true);
      hexgrid.animations.add("hot",[4,5,6,7,8,9,10],12,true);
      hexgrid.animations.play("cool");
      //
      friction= cold;
      drift *= friction;
      trackMeltingPoint = meltingPointOfSilver;
      // console.log("drift = "+drift);
    }else{
      console.log("CRASH - no track");
    }
    //
    //Set teh drift (lateral speed ) based on car selection
    if(carType === 1){
      drift /= 2;
      tempEffectX = tempEffect2;//set the lateral random movement fro heat.
    }
    hexgrid.alpha = 1;
    //
    platforms = game.add.physicsGroup(); //for the hud
    platforms.enableBody = true;
    var barr = platforms.create(0, game.world.height - 109, 'bar');
    barr.body.immovable = true;

    holesGroup = game.add.group();
    holesGroup.enableBody = true;
    hole = holesGroup.create(50, 50, 'hole');
    hole.body.x = holeX[currHole];

    if(carType===2){
      car = game.add.sprite(game.world.width / 2 - 25, carStartY, 'buckycar');//CAR START POS
      // console.log("how many?");
    }else if(carType===1){
      car = game.add.sprite(game.world.width / 2 - 25, carStartY, 'tubecar');//CAR START POS
      // console.log("how many?");
    }

    // car.alpha = 0;
    //
    var smlLogo = game.add.sprite(10, 10, 'logo');
    smlLogo.scale.setTo(0.5, 0.5);
    //
    //Lets make some graphics
    // the main hud background
    //
    hudTop = game.world.height - hudOffset;
    hudLeft = 0;
    hudRight = game.world.width;
    hudBot = game.world.height;
    //
    hud = new Phaser.Polygon();
    hud.setTo([new Phaser.Point(hudLeft, hudTop), new Phaser.Point(hudRight, hudTop), new Phaser.Point(hudRight, hudBot), new Phaser.Point(hudLeft, hudBot)]);
    // game over background
    gObg = new Phaser.Polygon();
    gObg.setTo([new Phaser.Point(goLeft, goTop), new Phaser.Point(goRight, goTop), new Phaser.Point(goRight, goBot), new Phaser.Point(goLeft, goBot)]);
    // gObg.setTo([ new Phaser.Point(100, 100), new Phaser.Point(700, 100), new Phaser.Point(700, 100), new Phaser.Point(100, 100) ]);
    // game start gb
    gStart = new Phaser.Polygon();
    gStart.setTo([new Phaser.Point(gsLeft, gsTop), new Phaser.Point(gsRight, gsTop), new Phaser.Point(gsRight, gsBot), new Phaser.Point(gsLeft, gsBot)]);
    //

    emitter = game.add.emitter(game.world.centerX, 0, 400);
    //and the new hud
    var newHud = game.add.sprite(0, 491, 'instrument');

    //and the heatsheild
    heatSheild= game.add.sprite(0,0,'heatsheild');
    heatSheildMeter= game.add.sprite(690,50,'heatsheildmeter');
    heatSheild.alpha = 0;
    heatSheildMeter.alpha = 0.1;


    //Set some properties
    //
    game.physics.arcade.enable(car);
    //game.physics.p2.enable(car, false);
    car.body.bounce.y = carBounce;
    car.body.gravity.y = carGrav; // CURR SWITCHED OFF
    car.body.collideWorldBounds = true;
    //
    game.physics.arcade.enable(hole);

    //lets add some AUDIO
    rev = game.add.audio('rev');
    mainTheme = game.add.audio('theme');
    holeDeath = game.add.audio('death');
    gameOverChime = game.add.audio('win');

    mainTheme.loopFull(0.8);


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
    hole.animations.add('fizz', [0, 1, 2, 3, 4], 20, true);
    //TEXT
    // this.drawHud();
    this.setLives();

    // clockX = game.world.width - 120;
    // clockY = game.world.height - 100;
    scoreText = this.add.text(410, game.world.height - hudOffset + 40, scoreText, screen18green);
    clockText = this.add.text(521, game.world.height - hudOffset + 40, currentTemp, screen18green);// now the temperature
    siText = this.add.text(580, game.world.height - hudOffset + 40, tempScaleName, screen18green);
    siNm = this.add.text(460, game.world.height - hudOffset + 40, si, screen18green);
    scrollingText = this.add.text(30, game.world.height - hudOffset + 20, scollingTextCopy1, scrollingGreen );
    //game.time.events.repeat(Phaser.Timer.SECOND * 1, 99, this.secondHeat, this);

    // var hitPlatform = game.physics.arcade.collide(car, platforms);
    platforms.alpha = 1;
    hole.animations.play('fizz', true);
    cursors.up.onDown.add(this.playFx);
    cursors.down.onDown.add(this.playFx);
    //

    scaleToggle = game.add.sprite(699,512, 'tiny-toggle');
    //
    scaleToggle.inputEnabled=true;
    scaleToggle.events.onInputDown.add(this.toggle, this);
    // scaleToggle.events.onInputOver.add(this.reshover,this);
    // rscaleToggle.events.onInputOut.add(this.resout,this);
    //
    this.mainTick();
    this.secondTick();
    // carXpos = car.body.x;
    // carYpos = car.body.y;
    // car.body.drag.x=400;
    // car.body.drag.y=400;
    try{
      bassLoop.stop();
    }catch(e){
      console.log("e ="+e);
    }
    //TEmp Breaks
    noOfBreaks = 10;
    console.log("trackMeltingPoint = "+trackMeltingPoint);
    for(i=0; i<= noOfBreaks-1 ; i++){
      tempBreaks[i] = (trackMeltingPoint/ noOfBreaks) * (i+1) ;
    }


  },
  update: function() {
    if(audioLive){
      //mainTheme.play();
    }else{
      mainTheme.stop();
    }
    // game.emitter.setYSpeed(currentTemp);
    game.physics.arcade.collide(car, platforms);
    // game.physics.arcade.collide(car, emitter);
      if (!stuck) {// a bool to check if we have hit something
        if (gameLive == false) {// a bool to check if the game is running or not
          car.scale.setTo(2, 2);
          car.alpha = 1;
          game.add.tween(car.scale).to({
            x: 1,
            y: 1
          }, 2000, Phaser.Easing.Bounce.Out, true);
          gameLive = true;
        //  this.mainTick();
        }
    //SIDEWAYS
        if (cursors.left.isDown) {
          console.log("left");
         if (!leftTog) {

           car.body.x -= drift; //clicky
             // car.body.velocity.x -= drift;// smooth
             // car.body.drag.x=800;
             // carXpos -= drift;
             this.playFx();
            leftTog=true;
         }
        } else {
          leftTog=false;
        }
        if (cursors.right.isDown) {
         if (!rightTog) {
            car.body.x += drift;//clicky
            // car.body.velocity.x += drift;//smooth
            // car.body.drag.x=800;
            // carXpos+= drift;
            this.playFx();
            rightTog=true;
         }
        } else  {
          rightTog=false;
        }
        //UP DOWN

        if (cursors.up.isDown) {
          // console.log("frame= "+car.frame);
         if (!upTog) {
            this.moveIt(1);
            // car.body.velocity.y -= drift;//TODO Remove me
            if(frameNo<=carLoopLength-1){
              frameNo+=1;
              car.frame = frameNo;
            }else{
              frameNo=1;
              car.frame = frameNo;
            }
            upTog=true;
         }

      }else{
        upTog=false;
      }
        //
        if (cursors.down.isDown) {

         if (!downTog) {
            this.moveIt(-1);
            // car.body.velocity.y += drift;//TODO Remove me
            downTog=true;
            if(frameNo>=2){
              frameNo-=1;
              car.frame = frameNo;
            }else{
              frameNo=carLoopLength;
              car.frame = frameNo;
            }
         }
       }  else {
         downTog = false;
       }
      } // end stuck
    if (hole.body.y >= game.world.height) {
      holeFull=false;
      hole.body.y = holeYstart;
      hole.body.x = holeRandomiser();
      currHole++;
      if (currHole == 5) {

        currHole = 0;
      }

    }
    //detect hole collision
    game.physics.arcade.overlap(hole, car, crash, checkRespawnTime, this);
    //
     // game.time.events.repeat(Phaser.Timer.SECOND * 1, 99, this.secondHeat, this);

// if(mp){
//
//
// }
//
},// end update()

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

    heart1 = game.add.sprite(game.world.width - 50, 20, 'heart');
    heart2 = game.add.sprite(game.world.width - 85, 20, 'heart');
    heart3 = game.add.sprite(game.world.width - 120, 20, 'heart');
  },

  holeLayout: function() {
    //TODO  maybe refactore so teh hole spawn is inteh hole spawn functiona :)

  },
  playFx: function() {
    if (!homeTime) {
      rev.play();
      //rev.allowMultiple = true;
      // playFx(rev);
    }
  },
  getRandomInt: function(max) {
    return Math.floor(Math.random() * Math.floor(max)); // TODO: checkto see if thisis still used
  },
  spawnHole: function() {
    hole = game.add.sprite(50, 50, 'hole');
  },
  moveIt: function(d){

    // score += d * friction;
    score += d ;
    var adjustedRate = tileRate * d * friction;
    var adjustedRate = tileRate * d;
                            // carXpos
    // scoreText.setText(displayText + score + si);
    scoreText.setText( score );
    hexgrid.tilePosition.y += adjustedRate ;
    holesGroup.y += adjustedRate  ;

  },
  mainTick: function(){
    // console.log("mainTick");
    game.time.events.add(1000, this.mainTick, this);
    // game.time.events.add(true, this.mainTick, this);
    this.gameTick();
    //this.heat();
    // this.moveIt(1);
  },
  heat: function(){

  if( currentTemp < trackMeltingPoint){
    var ent2 = (currentTemp * Math.random().toFixed())/ tempEffectX;

    var ent3 = (currentTemp * Math.random().toFixed())/ tempEffectY;

    // car.x += tempBoox ?  ent2 * -1 :  ent2;
    car.body.velocity.x += tempBoox ?  ent2 * -1 :  ent2;
    tempBoox = !tempBoox;
    //
    // car.y += tempBooy ?  ent3 * -1 :  ent3;
    car.body.velocity.y += tempBooy ?  ent3 * -1 :  ent3;
    tempBooy = !tempBooy;

    // setting the random movement animations
    // if(currentTemp >= 200 && currentTemp <= 400 ){
    //   hexgrid.animations.play("warm");
    // } else if (currentTemp >= 401 && currentTemp <= 600 ) {
    //   hexgrid.animations.play("hot");
    // }
    // New Temp conditions
    var lastTemp =0;
    var lasti=0;
    for(i=0 ; i<= noOfBreaks;  i++){
      // console.log("tempBreaks[i]= "+tempBreaks[i]);
      if(currentTemp >= tempBreaks[i]){
        lasti=i;
      }
    }
    hexgrid.frame= this.getRandomInt(lasti);
    // console.log("cur frame = "+hexgrid.frame);
    // console.log("random int 3 = "+ this.getRandomInt(3));
  } else{
    // gameOver();
    if(!phaseShift){
      this.meltingPoint();
       phaseShift = true;
    }

  }


  },
  gameTick: function() {
     clockText.setText(currentTemp +scaleDiff);
     currentTemp += tempIncrement;
     gameTime += 1;
     // console.log("gameTick before heat added car.body.x= "+car.body.x);
     //this.heat(currentTemp);
     // console.log("gameTick after heat added car.body.x= "+car.body.x);
  },
  secondTick: function(){
    game.time.events.add(Phaser.Timer.SECOND * 0.1, this.secondTick, this);
    // console.log("secondTick");
    this.heat();
  },
  secondHeat:function(){
    // console.log("secondHeat");
     car.body.y +=currentTemp;
  },
  toggle:function(){
    scaleToggle.frame = tempScaleName === siK ? 1 : 0 ;
    tempScaleName = tempScaleName === siK ? siC : siK;
    siText.setText(tempScaleName);
    scaleDiff = tempScaleName === siK ? 0 : -273;
    // console.log("tempScaleName = "+tempScaleName);
    // console.log("toggle");
  },
   meltingPoint: function(){
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
  },

}; //end of playstate
function crash(coH, coC) {
  if(holeFull==false){
    holeFull=true;
    if (!stuck) {

    }
    //create a car in the space of crash TODO adjust this so that it is in the right place.
    if(carType==1){
      var crash = holesGroup.create(coH.x, coH.y, 'tubecar');
    }else if(carType==2){
      var crash = holesGroup.create(coH.x, coH.y, 'buckycar');
    }

    crash.animations.add('crash', [8, 9], 6, true);
    crash.animations.play('crash', true);
    //reset the car in spawn mode
    spawnCar();
    loseLife();
  }
}

function spawnCar() {
  console.log("spawnCar !!");
  car.body.x = game.world.width / 2 - 125;
  car.body.y = carStartY;
  //car.animations.play('spawn', true);
  car.scale.setTo(2, 2);
  game.add.tween(this.car.scale).to({
    x: 1,
    y: 1
  }, 2000, Phaser.Easing.Bounce.Out, true);

}

function loseLife() {
  if (lives == 3) {
    heart3.alpha = 0;
    lives = 2;
  } else if (lives == 2) {
    heart2.alpha = 0;
    lives = 1;
  } else if (lives == 1) {
    heart1.alpha = 0;
    lives = 0;
    // console.log("GAME OVER! you LOSE");
    // game.state.start('gameover');
    // gameOver();
    if(!phaseShift){
      this.meltingPoint();
      phaseShift = true;
    }
  }
  timeOfDeath = game.time.time;
  // console.log("timeOfDeath= " + timeOfDeath);
  holeDeath.play();
}
function gameOver(){
  game.state.start('gameover');
}

function checkRespawnTime() {
  console.log("respawncheck");
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

function holeRandomiser() {
  var pad = 40;
  var x = game.world.width - pad;
  var n = Math.floor(Math.random() * Math.floor(x));
  if (n < pad) {
    n = pad;
  }
  return n;
}
