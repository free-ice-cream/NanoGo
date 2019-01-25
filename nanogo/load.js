
var loadState = {
  preload: function (){
    console.log('loadState');
    // images
    game.load.image('hex', ficurl+'assets/hexgrid-cross2.png');
    game.load.image('icehex', ficurl+'assets/icy-hexgrid-v1.png');
    game.load.image('glob1', ficurl+'assets/glob1.png');
    game.load.image('glob2', ficurl+'assets/glob2.png');
    game.load.image('glob3', ficurl+'assets/glob3.png');
    game.load.image('bar', ficurl+'assets/bar.png');
    game.load.image('block', ficurl+'assets/block1.png');
    game.load.image('logo', ficurl+'assets/Nano Go Logo v1.png');
    game.load.image('startbut2', ficurl+'assets/Start pt2.png');
    game.load.image('resultsScreen', ficurl+'assets/results-screen.png');
    game.load.image('endscreen', ficurl+'assets/new-end.png');
    // options
    game.load.image('tutorialScreen', ficurl+'assets/tutorial_screen_v1.jpg');
    game.load.image('ministart1', ficurl+'assets/miniStart-pt1.png');
    game.load.image('ministart2', ficurl+'assets/miniStart-pt2.png');
    game.load.image('greenheadbg', ficurl+'assets/greenheadbg.png');
    // game.load.image('miniscreen', ficurl+'assets/mini-screen.png');
    // play screen
    game.load.image('heatsheild', ficurl+'assets/heatsheild_v2.png');
    game.load.image('blue-power-up', ficurl+'assets/blue-power-up.png');
    game.load.image('heart', ficurl+'assets/heart2.png');
    game.load.image('instrument', ficurl+'assets/instrument_v3.png');
    game.load.image('instrument_back', ficurl+'assets/instrument_back.png');
    game.load.image('heatsheildmeter', ficurl+'assets/heatsheildmeter_v1.png');
    game.load.image('heatsheild', ficurl+'assets/heatsheild_v2.png');


    //SPRITESHEETS
    game.load.spritesheet('ministartss',ficurl+'assets/mini-start-546-103.png',268,103);
    game.load.spritesheet('tutbut','assets/howtoplayspritesheet-620-310.png',308,310);
    game.load.spritesheet('startSeq','assets/startspritesheet_v4.png', 306,310);
    game.load.spritesheet('restart','assets/restart-spritesheet_v1.png', 200,192);
    game.load.spritesheet('alarm','assets/alarm-button_v1.png', 201,192);
    game.load.spritesheet('track1','assets/track1sprite-v2.png', 160,157);
    game.load.spritesheet('track2','assets/track2sprite-v2.png', 160,157);
    game.load.spritesheet('tracknext','assets/tracknext-v1.png', 122,119);
    game.load.spritesheet('optionsback','assets/backbut_v1.png', 122,119);
    game.load.spritesheet('meterK','assets/rising-scale.png', 90, 40);
    //
    game.load.spritesheet('tubecar','assets/nanotube-racer-spritesheet-150-150-9f_v6.png', 150,150);
    game.load.spritesheet('buckycar','assets/buckyball-racer-spritesheet_v3.png', 150,150);
    game.load.spritesheet('tiny-toggle','assets/tiny-toggle-2.png', 69,61);
    // play screen
    game.load.spritesheet('car1', 'assets/bucky-tilesprite_v1.png', 250, 250);
    game.load.spritesheet('car', 'assets/car7-spritesheet-v3.png', 150, 150);
    game.load.spritesheet('hole','assets/holes100px.png', 100,100);
    game.load.spritesheet('blue-power-up','assets/blue-power-up.png', 30,30);
    //paritcle timeout
    game.load.spritesheet('matrix', 'assets/sliver_v1.png', 110, 100);
    game.load.spritesheet('atoms', 'assets/blackatoms_v1.png', 9, 9);
    game.load.spritesheet('graphene', 'assets/graphene_v5.png', 120, 136);
    game.load.spritesheet('silver', 'assets/silver_v2.png', 100, 150);
  //and some AUDIO
  game.load.audio('rev', 'assets/car-2.mp3');
  game.load.audio('theme', 'assets/maintrack4.mp3');
  game.load.audio('death','assets/hero-death-00.mp3');
  game.load.audio('win','assets/win.mp3');
  game.load.audio('bass-loop','assets/bass-loop2.mp3')
  game.load.audio('endlich', 'assets/endlich_v3.mp3');
  game.load.audio('swipe', 'assets/car-3.mp3');
  game.load.audio('power-up-blips', 'assets/power-up-blips.mp3');
  //

  },
  create: function(){

    game.state.start('menu');
  }


};
