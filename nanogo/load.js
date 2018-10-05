var loadState = {
  preload: function (){
    console.log('loadState');

    //// TODO:
    // copy all our assets in here
    game.load.image('hex', ficurl+'assets/hexgrid-cross2.png');
    game.load.image('glob1', ficurl+'assets/glob1.png');
    game.load.image('glob2', ficurl+'assets/glob2.png');
    game.load.image('glob3', ficurl+'assets/glob3.png');
    game.load.image('heart', ficurl+'assets/heart2.png');
    game.load.image('bar', ficurl+'assets/bar.png');
    //more graphic assets
    //start screen
    game.load.image('logo', ficurl+'assets/Nano Go Logo v1.png');
    game.load.image('logo', ficurl+'assets/Nano Go Logo v1.png');
    game.load.image('startbut1', ficurl+'assets/Start pt1.png');
    game.load.image('startbut2', ficurl+'assets/Start pt2.png');
    game.load.image('howtoplaybut1', ficurl+'assets/How to Play pt1.png');
    game.load.image('howtoplaybut2', ficurl+'assets/How to Play pt2.png');
    // game.load.spritesheet('hexsign','assets/startbutspritesheetv3.png', 300.7,298.1);
    game.load.spritesheet('hexsign','assets/startbutspritesheetv3.png', 301,298);
    game.load.spritesheet('tutbut','assets/howtoplayspritesheet-620-310.png',308,310);
    //tutorial
    game.load.image('tutorialScreen', ficurl+'assets/tutorial_screen_v1.jpg');
    game.load.image('ministart1', ficurl+'assets/miniStart-pt1.png');
    game.load.image('ministart2', ficurl+'assets/miniStart-pt2.png');
    game.load.spritesheet('ministartss',ficurl+'assets/mini-start-546-103.png',268,103);

    //Game over images to follow
    game.load.image('resultsScreen', ficurl+'assets/results-screen.png');

    //
    // game.load.spritesheet('car', 'assets/car3.png', 160, 240);
    game.load.spritesheet('car1', 'assets/bucky-tilesprite_v1.png', 250, 250);
    game.load.spritesheet('car', 'assets/car7-spritesheet.png', 150, 150);
    // game.load.spritesheet('hexsign','assets/hextiles2.png', 200,200);
    game.load.spritesheet('hole','assets/holes100px.png', 100,100);

  //and some AUDIO

  game.load.audio('rev', 'assets/car-2.mp3');
  game.load.audio('theme', 'assets/maintrack4.mp3');
  game.load.audio('death','assets/hero-death-00.mp3');
  game.load.audio('win','assets/win.mp3');

  },
  create: function(){

    game.state.start('menu');
  }


};
