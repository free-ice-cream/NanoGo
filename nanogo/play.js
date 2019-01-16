var playState = {
  create: function() {
    //set up the graffic assets
    //
    //set the background hexgrid
    // set the track and mode
    if(trackselection==1){
      hexgrid = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'hex');
      friction = warm;
      drift *= friction;
      // trackMeltingPoint= meltingPointOfGraphene;
    }else if(trackselection==2){
      hexgrid = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'icehex');
      friction= cold;
      drift *= friction;
      // trackMeltingPoint= meltingPointOfSilver;
      // console.log("drift = "+drift);
    }else{
      console.log("CRASH - no track");
    }
    //
    //Set teh drift (lateral speed ) based on car selection
    if(carType==1){
      drift /=3;
      console.log("drift = "+drift);
    }
    hexgrid.alpha = 1;
    //
    platforms = game.add.group(); //for the hud
    platforms.enableBody = true;
    var barr = platforms.create(0, game.world.height - hudOffset, 'bar');
    barr.body.immovable = true;

    holesGroup = game.add.group();
    holesGroup.enableBody = true;
    hole = holesGroup.create(50, 50, 'hole');
    hole.body.x = holeX[currHole];

    if(carType==2){
      car = game.add.sprite(game.world.width / 2 - 25, carStartY, 'buckycar');//CAR START POS
      // console.log("how many?");
    }else if(carType==1){
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
    this.drawHud();
    this.setLives();

    clockX = game.world.width - 120;
    clockY = game.world.height - 100;
    scoreText = this.add.text(16, game.world.height - hudOffset + 30, scoreText, main18green);
    clockText = this.add.text(clockX, game.world.height - hudOffset + 10, gameTime, timestyle);
    //game.time.events.repeat(Phaser.Timer.SECOND * 1, 99, this.secondHeat, this);

    var hitPlatform = game.physics.arcade.collide(car, platforms);
    platforms.alpha = 0;
    hole.animations.play('fizz', true);
    cursors.up.onDown.add(this.playFx);
    cursors.down.onDown.add(this.playFx);
    this.mainTick();
    this.secondTick();
    // carXpos = car.body.x;
    // carYpos = car.body.y;

  },
  update: function() {
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
             car.body.x -= drift;
             // carXpos -= drift;
            leftTog=true;
         }
        } else {
          leftTog=false;
        }
        if (cursors.right.isDown) {
         if (!rightTog) {
            car.body.x += drift;
            // carXpos+= drift;
            rightTog=true;
         }
        } else  {
          rightTog=false;
        }
        //UP DOWN

        if (cursors.up.isDown) {
          console.log("frame= "+car.frame);
         if (!upTog) {
            this.moveIt(1);
            //this.secondHeat(10);
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

// this.heat();
  // car.body.x = carXpos;
  // car.body.y = carYpos;

  },

  drawHud: function() {
    console.log("drawHud()  called");
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
    }
  },
  getRandomInt: function(max) {
    return Math.floor(Math.random() * Math.floor(max)); // TODO: checkto see if thisis still used
  },
  spawnHole: function() {
    hole = game.add.sprite(50, 50, 'hole');
  },
  moveIt: function(d){
    score += d * friction;
    var adjustedRate = tileRate * d * friction;
    scoreText.setText(displayText + score + si);

    hexgrid.tilePosition.y += adjustedRate ;
    holesGroup.y += adjustedRate  ;

  },
  mainTick: function(){
    console.log("mainTick");
    game.time.events.add(1000, this.mainTick, this);
    // game.time.events.add(true, this.mainTick, this);
    this.gameTick();
    //this.heat();
    // this.moveIt(1);
  },
  heat: function(){

  if( currentTemp < trackMeltingPoint){
    var ent2 = (currentTemp * Math.random().toFixed())/ tempRat;
    var ent3 = (currentTemp * Math.random().toFixed())/ tempRat;

    car.x += tempBoox ?  ent2 * -1 :  ent2;
    tempBoox = !tempBoox;
    //
    car.y += tempBooy ?  ent3 * -1 :  ent3;
    tempBooy = !tempBooy;
  } else{
    gameOver();
  }


  },
  gameTick: function() {
     clockText.setText(currentTemp);
     currentTemp += tempIncrement;
     gameTime += 1;
     // console.log("gameTick before heat added car.body.x= "+car.body.x);
     //this.heat(currentTemp);
     // console.log("gameTick after heat added car.body.x= "+car.body.x);
  },
  secondTick: function(){
    game.time.events.add(Phaser.Timer.SECOND * 0.1, this.secondTick, this);
    console.log("secondTick");
    this.heat();
  },
  secondHeat:function(){
    console.log("secondHeat");
     car.body.y +=currentTemp;
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
    gameOver();
  }
  timeOfDeath = game.time.time;
  console.log("timeOfDeath= " + timeOfDeath);
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
