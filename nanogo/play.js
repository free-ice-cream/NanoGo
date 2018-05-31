var playState = {
//  console.log("playState");
  create: function(){
//here goes nothing
//
  //set the background hexgrid
  hexgrid = game.add.tileSprite(0, 0, 800, 1200, 'hex');
  starC1 = game.add.tileSprite(trackLX, 0, 50, 600, 'glob3');
  starC2 = game.add.tileSprite(trackRX, 0, 50, 600, 'glob3');
    //player = game.add.sprite(32, game.world.height - 150, 'dude');
  car = game.add.sprite(330,250, 'car');

///////// --->>>  game.physics.startSystem(Phaser.Physics.ARCADE);

  //car2 = game.add.sprite(200, 200, 'car');
  game.physics.arcade.enable(car);
  car.body.bounce.y = carBounce;
  car.body.gravity.y = carGrav;
  car.body.collideWorldBounds = true;
  //
  //lets add soem AUDIO
  rev =  game.add.audio('rev');
  mainTheme = game.add.audio('theme');
  mainTheme.loopFull(0.8);
  //
  //Lets make some graphics
// the main hud background
  hud = new Phaser.Polygon();
  hud.setTo([ new Phaser.Point(hudLeft, hudTop), new Phaser.Point(hudRight, hudTop), new Phaser.Point(hudRight, hudBot), new Phaser.Point(hudLeft, hudBot) ]);
// game over background
  gObg = new Phaser.Polygon();
  gObg.setTo([ new Phaser.Point(goLeft, goTop), new Phaser.Point(goRight, goTop), new Phaser.Point(goRight, goBot), new Phaser.Point(goLeft, goBot) ]);
  // gObg.setTo([ new Phaser.Point(100, 100), new Phaser.Point(700, 100), new Phaser.Point(700, 100), new Phaser.Point(100, 100) ]);
// game start gb
  gStart = new Phaser.Polygon();
  gStart.setTo([ new Phaser.Point(gsLeft, gsTop), new Phaser.Point(gsRight, gsTop), new Phaser.Point(gsRight, gsBot), new Phaser.Point(gsLeft, gsBot) ]);



//TODO set up the number of loops properly

game.time.events.repeat(Phaser.Timer.SECOND * 1, 999, this.gameTick, this);

  //
  // Get keyboard input
  //
  //cursors = this.input.keyboard.createCursorKeys();
  cursors = game.input.keyboard.createCursorKeys();
  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  //ANIMATIONS
  //
  car.animations.add('rotate', [1, 2, 3, 4, 5, 6], 10, true);
  car.animations.add('stop', [0], 20, true);

  //TEXT
  this.drawHud();
  //drawGameOverBG(0.1);
  // var st32 = { font: 'bold 32pt courier ', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 650 };
  // var st64 = { font: 'bold 64pt courier ', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 650 };
  scoreText = this.add.text(16, 16, startText, st32);
  clockText = this.add.text(clockX, clockY, gameTime, st64);

//
  // var introStyle = { font: 'bold 60pt courier ', fill: 'GREEN', align: 'left', wordWrap: true, wordWrapWidth: 650 };
  introT = this.add.text(endX,endY,introText, introStyle);
  // endText = this.add.text(endX, endY, "", { fontSize: '20px', fill: '#fff' });
  //TODO PUT THIS BACK
  //playsoundTrack();

  this.drawGStart(true);
  //
  this.starLayout();

//  starLayout = function(){
//
//   starTrack = game.add.group();
//
//   for (var i = 0; i < 10; i++)
//   {
//
//       // starTrack.create(game.world.randomX, game.world.randomY, 'sonic');
//       for (var j = 0; j < 10; j++)
//     {
//
//         starTrack.create(trackLX, trackYD*j, 'glob1');
//         starTrack.create(trackRX, trackYD*j, 'glob1');
//     }
//
//   }
// }
//
// Time stuff
// var timestyle = { font: 'bold 40pt courier ', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 650 };
// timeText = game.add.text(10, 150, "00:00:00",timestyle);


  },
  update: function(){
//

  //if(!homeTime){
  //  console.log('homeTime= '+homeTime);

  spaceKey.onDown.add(this.playFx);
  //};

  if(gameTime!=0){


    if(spaceKey.isDown ){
      introT.setText("");
      this.drawGStart(false);//TODO delete this
      gameLive=true;
      //game.graphics.gStart.setTo([ new Phaser.Point(0, 0),new Phaser.Point(0, 0),new Phaser.Point(0, 0),new Phaser.Point(0, 0),]);
      car.animations.play('rotate', true);
      if(car.y >280){

        car.body.velocity.y = -60;


      }
      if(!toggle){
        toggle= true;
        //count +=1;
        //console.log(count);
        score += 1;
        scoreText.setText(displayText+ score + si);
        //hexgrid.tilePositionY+= -2;
        hexgrid.tilePosition.y += tileRate;
        starC1.tilePosition.y += tileRate*1.3;
        starC2.tilePosition.y += tileRate*1.3;
        //player.anims.play('rotate', true);
      }
    }else {
      toggle= false;
      //console.log("player.y = "+player.y);
      if(car.body.y >350){
        car.animations.play('stop', true);
      }
    }
  }else{
    //gameOver();
  }

  //
  //game.debug.geom(hud,'#0fffff');
  //timeText.setText(getCurrentTime());



},
//##################################

// var tick = {};
//   if(gameLive){
//     if(gameTime>=1){
//     gameTime -= 1;
//     clockText.setText(gameTime);
//     }else {
//       gameLive=false;
//       gameOver();
//     }
//   }
// };
gameTick: function(){
  if(gameTime>=1){
  gameTime -= 1;
  clockText.setText(gameTime);
  }else {
    gameLive=false;
    //gameOver();
    game.state.start('gameover');
  }

},
drawHud: function(){
  console.log("drawHud()  called");
  if(!hudSet){
    hudBack = game.add.graphics(0, 0);
    hudBack.beginFill(0x000000);
    hudBack.drawPolygon(hud.points);
    hudBack.alpha= 0.6;
    hudBack.endFill();
    hudSet=true;
  }

},
drawGStart: function(){
  //// TODO: delete this
},
starLayout: function(){
//TODO WTF??
console.log("startLayout called");
 // starTrack = game.add.group();
 //
 // for (var i = 0; i < 10; i++)
 // {
 //
 //     // starTrack.create(game.world.randomX, game.world.randomY, 'sonic');
 //     for (var j = 0; j < 10; j++)
 //   {
 //
 //       starTrack.create(trackLX, trackYD*j, 'glob1');
 //       starTrack.create(trackRX, trackYD*j, 'glob1');
 //   }
 //
 // }
},
playFx: function(){
      if(!homeTime){
        rev.play();
      }
    }
//##################################




};
// function tick(){
//
// }
