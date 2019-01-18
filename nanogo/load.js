// google fonts object
// WebFontConfig = {
//   //  'active' means all requested fonts have finished loading
//   //  We set a 1 second delay before calling 'createText'.
//   //  For some reason if we don't the browser cannot render the text the first time it's created.
//   active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },
//
//   //  The Google Fonts we want to load (specify as many as you like in the array)
//   google: {
//     families: ['Revalia']
//   }
//
// }
var loadState = {
  preload: function (){
    console.log('loadState');

    //
    // copy all our assets in here
    game.load.image('hex', ficurl+'assets/hexgrid-cross2.png');
    game.load.image('icehex', ficurl+'assets/icy-hexgrid-v1.png');
    game.load.image('glob1', ficurl+'assets/glob1.png');
    game.load.image('glob2', ficurl+'assets/glob2.png');
    game.load.image('glob3', ficurl+'assets/glob3.png');
    game.load.image('heart', ficurl+'assets/heart2.png');
    game.load.image('bar', ficurl+'assets/bar.png');
    //more graphic assets
    //start screen
    game.load.image('logo', ficurl+'assets/Nano Go Logo v1.png');
    // game.load.image('logo', ficurl+'assets/Nano Go Logo v1.png');
    // game.load.image('startbut1', ficurl+'assets/Start pt1.png');
    // game.load.image('startbut2', ficurl+'assets/Start pt2.png');
    // game.load.image('howtoplaybut1', ficurl+'assets/How to Play pt1.png');
    // game.load.image('howtoplaybut2', ficurl+'assets/How to Play pt2.png');
    // game.load.spritesheet('hexsign','assets/startbutspritesheetv3.png', 300.7,298.1);
    game.load.spritesheet('startSeq','assets/startspritesheet_v4.png', 306,310);
    // game.load.spritesheet('startSeq','assets/howtoplayspritesheet-620-310.png',308,310);
    game.load.spritesheet('tutbut','assets/howtoplayspritesheet-620-310.png',308,310);
    //tutorial
    game.load.image('tutorialScreen', ficurl+'assets/tutorial_screen_v1.jpg');
    game.load.image('ministart1', ficurl+'assets/miniStart-pt1.png');
    game.load.image('ministart2', ficurl+'assets/miniStart-pt2.png');
    game.load.spritesheet('ministartss',ficurl+'assets/mini-start-546-103.png',268,103);
    //
    game.load.image('startbut2', ficurl+'assets/Start pt2.png');


    //Game over images t
    game.load.image('resultsScreen', ficurl+'assets/results-screen.png');
    game.load.spritesheet('restart','assets/restart-spritesheet_v1.png', 200,192);
    game.load.spritesheet('alarm','assets/alarm-button_v1.png', 201,192);
    //options screen
    game.load.image('greenheadbg', ficurl+'assets/greenheadbg.png');
    // game.load.image('track1white', ficurl+'assets/track1white.png');
    // game.load.image('track1green', ficurl+'assets/track1green.png');
    // game.load.image('track2white', ficurl+'assets/track2white.png');
    // game.load.image('track2green', ficurl+'assets/track2green.png');
    // game.load.image('next1', ficurl+'assets/next1.png');
    // game.load.image('next2', ficurl+'assets/next2.png');
    game.load.spritesheet('track1','assets/track1sprite-v2.png', 160,157);
    game.load.spritesheet('track2','assets/track2sprite-v2.png', 160,157);
    game.load.spritesheet('tracknext','assets/tracknext-v1.png', 122,119);
    game.load.spritesheet('optionsback','assets/backbut_v1.png', 122,119);
    //
    game.load.spritesheet('tubecar','assets/nanotube-racer-spritesheet-150-150-9f_v6.png', 150,150);
    game.load.spritesheet('buckycar','assets/buckyball-racer-spritesheet_v3.png', 150,150);
    //
    // play screen
    game.load.image('instrument', ficurl+'assets/instrument.png');
    game.load.spritesheet('tiny-toggle','assets/tiny-toggle-2.png', 69,61);



    //
    // game.load.spritesheet('car', 'assets/car3.png', 160, 240);
    game.load.spritesheet('car1', 'assets/bucky-tilesprite_v1.png', 250, 250);
    game.load.spritesheet('car', 'assets/car7-spritesheet-v3.png', 150, 150);
    // game.load.spritesheet('hexsign','assets/hextiles2.png', 200,200);
    game.load.spritesheet('hole','assets/holes100px.png', 100,100);

  //and some AUDIO

  game.load.audio('rev', 'assets/car-2.mp3');
  game.load.audio('theme', 'assets/maintrack4.mp3');
  game.load.audio('death','assets/hero-death-00.mp3');
  game.load.audio('win','assets/win.mp3');
  game.load.audio('bass-loop','assets/bass-loop2.mp3')

  //
  //paritcle timeout
  game.load.spritesheet('matrix', 'assets/sliver_v1.png', 110, 100);
  game.load.spritesheet('atoms', 'assets/blackatoms_v1.png', 9, 9);
  game.load.spritesheet('graphene', 'assets/graphene_v1.png', 120, 136);

  },
  create: function(){

    game.state.start('menu');
  }


};
