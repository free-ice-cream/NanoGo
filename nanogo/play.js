var playState = {


create: function(){
  time_til_spawn = this.getRandomInt(holeFreq);//// TEMP: is this defunct?
  last_spawn_time = game.time.time;//// TEMP: is this defunct?
  //
  //set up the graffic assets
  //
  //set the background hexgrid
  hexgrid = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'hex');
  // starC1 = game.add.tileSprite(trackLX, 0, 50, game.world.height, 'glob3');
  // starC2 = game.add.tileSprite(trackRX, 0, 50, game.world.height, 'glob3');
  hexgrid.alpha =1;

  //
  platforms = game.add.group();//for the hud
  platforms.enableBody = true;
  var barr = platforms.create(0,game.world.height - hudOffset, 'bar');
  barr.body.immovable = true;

  holesGroup = game.add.group();
  holesGroup.enableBody = true;
  hole = holesGroup.create(50, 50, 'hole');
  hole.body.x =holeX[currHole];
  car = game.add.sprite(game.world.width /2 - 125,250, 'car');
  car.alpha=0;
  //
  var  smlLogo = game.add.sprite(10,10,'logo');
  smlLogo.scale.setTo(0.5,0.5);
  //
  //Lets make some graphics
  // the main hud background
  //
   hudTop =game.world.height-hudOffset;
   hudLeft =0;
   hudRight =game.world.width;
   hudBot =game.world.height;
//
  hud = new Phaser.Polygon();
  hud.setTo([ new Phaser.Point(hudLeft, hudTop), new Phaser.Point(hudRight, hudTop), new Phaser.Point(hudRight, hudBot), new Phaser.Point(hudLeft, hudBot) ]);
// game over background
  gObg = new Phaser.Polygon();
  gObg.setTo([ new Phaser.Point(goLeft, goTop), new Phaser.Point(goRight, goTop), new Phaser.Point(goRight, goBot), new Phaser.Point(goLeft, goBot) ]);
  // gObg.setTo([ new Phaser.Point(100, 100), new Phaser.Point(700, 100), new Phaser.Point(700, 100), new Phaser.Point(100, 100) ]);
// game start gb
  gStart = new Phaser.Polygon();
  gStart.setTo([ new Phaser.Point(gsLeft, gsTop), new Phaser.Point(gsRight, gsTop), new Phaser.Point(gsRight, gsBot), new Phaser.Point(gsLeft, gsBot) ]);


  //
  //Set some properties
  //
  game.physics.arcade.enable(car);
  //game.physics.p2.enable(car, false);
  car.body.bounce.y = carBounce;
  car.body.gravity.y = carGrav;
  car.body.collideWorldBounds = true;
  //
  game.physics.arcade.enable(hole);

  //lets add some AUDIO
  rev =  game.add.audio('rev');
  mainTheme = game.add.audio('theme');
  holeDeath = game.add.audio('death');
  gameOverChime = game.add.audio('win');
  mainTheme.loopFull(0.8);
  //


//TODO set up the number of loops properly

game.time.events.repeat(Phaser.Timer.SECOND * 1, 999, this.gameTick, this);

  //
  // Get keyboard input
  //
  //cursors = this.input.keyboard.createCursorKeys();
  cursors = game.input.keyboard.createCursorKeys();
  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  //
  //ANIMATIONS
  //
  car.animations.add('rotate', [1, 2, 3, 4, 5, 6,7,8,9], 60, true);
  car.animations.add('stop', [0], 20, true);
  car.animations.add('crash', [9,10,11], 60, true);
  car.animations.add('spawn', [0,12], 12, true);
  hole.animations.add('fizz', [0,1,2,3,4], 20, true);
  //TEXT
  this.drawHud();
  this.setLives();

  clockX = game.world.width -120;
  clockY = game.world.height - 100;
  scoreText = this.add.text(16, game.world.height -hudOffset +30, scoreText, st24);
  clockText = this.add.text(clockX, game.world.height -hudOffset +10, gameTime, st56);
  },
  update: function(){
    var hitPlatform = game.physics.arcade.collide(car, platforms);
    // platforms.alpha=0;TODO TODO put this back
//
    hole.animations.play('fizz', true);
    spaceKey.onDown.add(this.playFx);

  if(gameTime!=0){
    if(!stuck){
      if(gameLive==false){
        car.scale.setTo(3,3);
        car.alpha=1;
        game.add.tween(car.scale).to({x:1, y:1}, 2400, Phaser.Easing.Bounce.Out, true);
      }
      gameLive=true;

      if(spaceKey.isDown ){

        // if(gameLive==false){
        //   car.scale.setTo(3,3);
        //   car.alpha=1;
        //   game.add.tween(car.scale).to({x:1, y:1}, 2400, Phaser.Easing.Bounce.Out, true);
        // }
        // gameLive=true;
        //game.graphics.gStart.setTo([ new Phaser.Point(0, 0),new Phaser.Point(0, 0),new Phaser.Point(0, 0),new Phaser.Point(0, 0),]);
        car.animations.play('rotate', true);
        // console.log("car.y = "+car.y);
        if(car.y >200){

          car.body.velocity.y = -100;


        }
        if(!toggle){
          toggle = true;
          //count +=1;
          //console.log(count);
          score += 1;
          scoreText.setText(displayText+ score + si);
          //hexgrid.tilePositionY+= -2;
          hexgrid.tilePosition.y += tileRate;
          // starC1.tilePosition.y += tileRate*1.3;
          // starC2.tilePosition.y += tileRate*1.3;
          // hole.y += tileRate*.5;// halfspeed because the sprite is doubel sized
          holesGroup.y += tileRate;
          //player.anims.play('rotate', true);
        }
      }else if(toggle){
            toggle= false;
            //console.log("player.y = "+player.y);
            if(car.body.y >350){
              car.animations.play('stop', true);
            }
      } else if (stuck){
        //car.body.rotation++;
      }

      //}
    //

    if(cursors.left.isDown){
      if(car.body.x >50){
        car.body.x-=drift;
      }

    }else if (cursors.left.isDown ){
      car.body.rotation +=1;
    }
    if(cursors.right.isDown ){
      if(car.body.x <=500){
        car.body.x+=drift;
      }

    }else if (cursors.right.isDown ){
      car.body.rotation -=1;
    }
     }// end stuck
  }//end game time 0 check


  if(hole.body.y >= game.world.height){
    console.log("HOLE RESET");
    hole.body.y = holeYstart;
    // hole.body.x = this.getRandomInt(game.world.width-100);
    hole.body.x =holeX[currHole];
    currHole++;
    if(currHole==5){
      currHole=0;
    }
    console.log("hole.body.x = "+hole.body.x );
  }
//detect hole collision
game.physics.arcade.overlap(hole, car, crash, checkRespawnTime, this)


},

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
      // platforms.add(hudBack);
      // hudBack.enableBody = true;
      // hudBack.immovabe = true;
    }

  },
  setLives:function(){

    heart1= game.add.sprite(game.world.width-50,20, 'heart');
    heart2= game.add.sprite(game.world.width-85,20, 'heart');
    heart3= game.add.sprite(game.world.width-120,20, 'heart');
  },


  holeLayout: function(){
  //TODO  maybe refactore so teh hole spawn is inteh hole spawn functiona :)



  },
  playFx: function(){
        if(!homeTime){
          rev.play();
        }
    },
  getRandomInt: function(max) {
      return Math.floor(Math.random() * Math.floor(max));
  },
  spawnHole: function(){

   hole = game.add.sprite(50, 50, 'hole');

  },

};//end of playstate
function crash(coH, coC){
  if(!stuck){

}
  //create a car in the space of crash TODO adjust this so that it is in the right place.
  var  crash = holesGroup.create(coH.x, coH.y, 'car');
  crash.animations.add('crash', [10,11], 6, true);
    crash.animations.play('crash', true);
    //reset the car in spawn mode
    spawnCar();
    loseLife();
}
function spawnCar(){

  car.body.x= game.world.width /2 - 125;
  car.body.y= 250;
  car.animations.play('spawn', true);
  car.scale.setTo(3,3);
  game.add.tween(this.car.scale).to({x:1, y:1}, 2400, Phaser.Easing.Bounce.Out, true);



}
function loseLife(){
if(lives==3){
  heart3.alpha=0;
  lives=2;
}else if(lives==2){
  heart2.alpha=0;
  lives=1;
}else if(lives==1){
  heart1.alpha=0;
  lives=0;
  console.log("GAME OVER! you LOSE");
  game.state.start('gameover');
}
timeOfDeath=game.time.time;
console.log("timeOfDeath= "+timeOfDeath);
holeDeath.play();
}
function checkRespawnTime(){
  console.log("respawncheck");
  var currTOD= game.time.time;
  if (lives!=3){
    if(currTOD -timeOfDeath >= safeSpawnTime){
      return true;
    } else {
      return false;
    }
  }else{
    return true;
  }


}
