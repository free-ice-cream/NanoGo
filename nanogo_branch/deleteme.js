// var playState = {
//   update: function() {
//
//     isCrashingBool = false;
//     game.physics.arcade.overlap(wallSprite, car, wallExposure, null, this);
//     if (isCrashingBool) {
//       count +=1;
//       if(count == countLimit){
//         // do something
//       }
//     }
//   }
// }
//
// function wallExposure() {
//   isCrashingBool = true;
//
// }


var crashTime = 0;

var LIMIT = 500;



function update () {

  var isCrashing = game.physics.arcade.overlap(wallSprite, car, wallExposure, null, this);



  if (!isCrashing) crashTime = 0;



  if (crashTime > LIMIT) {

    // …

  }

}



function wallExposure() {

  crashTime += this.time.physicsElapsedMS;

}
